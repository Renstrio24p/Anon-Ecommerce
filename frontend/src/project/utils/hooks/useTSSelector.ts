type AnyElement =
    | HTMLElement
    | HTMLAnchorElement
    | HTMLImageElement
    | HTMLButtonElement
    | HTMLDivElement
    | HTMLSelectElement
    | HTMLInputElement
    | NodeListOf<HTMLElement>
    | NodeListOf<HTMLAnchorElement>
    | NodeListOf<HTMLImageElement>
    | NodeListOf<HTMLButtonElement>
    | NodeListOf<HTMLDivElement>
    | NodeListOf<HTMLSelectElement>
    | NodeListOf<HTMLInputElement>
    | null;

export function useTSSelector<T extends AnyElement = HTMLElement>(
    selector: string,
    DOM: HTMLElement | Document = document,
    all?: boolean,
): T {
    if (all) {
        return (DOM.querySelectorAll(selector) as unknown) as T;
    } else {
        return (DOM.querySelector(selector) as unknown) as T;
    }
}
