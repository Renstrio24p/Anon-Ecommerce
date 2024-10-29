import NotFound from "@/project/pages/404/NotFound";
import Home from "@/project/pages/home/Home";
import { useTSPurifier } from "@/project/utils/hooks/useTSPurifier";
import { TSRouter } from "@/project/utils/routes/class/Router.class";

export const Router = (DOM: HTMLElement, title: string) => {
    const routes = new TSRouter(
        [
            {
                path: "/",
                element: () => Home(DOM, title),
            },
            {
                path: "*",
                element: () => NotFound(DOM, title),
            },
        ],
        [String(useTSPurifier(window.location.search))]
    )
    return routes.navigate("");
};
