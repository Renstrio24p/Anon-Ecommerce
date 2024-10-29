import fs from 'node:fs/promises';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { ViteDevServer, createServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

// Define types for the render function result
interface RenderResult {
  head?: string;
  html?: string;
}

// Define type for the render function itself
type RenderFunction = (url: string, ssrManifest?: string) => Promise<RenderResult>;

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5174;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : '';
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined;

// Create HTTP server
const app = express();

// Add Vite or respective production middlewares
let vite: ViteDevServer | undefined;
if (!isProduction) {
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template: string;
    let render: RenderFunction;

    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite!.transformIndexHtml(url, template);
      render = (await vite!.ssrLoadModule('/src/server.ts')).render as RenderFunction;
    } else {
      template = templateHtml;
      // @ts-ignore
      render = (await import('./dist/server/server.js')).render as RenderFunction;
    }

    const rendered: RenderResult = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e as Error);
    console.error(e);
    res.status(500).end((e as Error).stack);
  }
});

// Start HTTP server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
