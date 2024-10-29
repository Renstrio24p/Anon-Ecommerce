import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        checker({
            overlay: {
                initialIsOpen: false,
            },
            typescript: {
                tsconfigPath: './tsconfig.json',
            },
        })
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
