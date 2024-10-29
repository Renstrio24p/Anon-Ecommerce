export const useTSEventAll = <T extends Event>(
  selector: string,
  eventType: keyof HTMLElementEventMap,
  handler: (event: T) => void
) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.addEventListener(eventType, handler as EventListener);
  });

  return () => {
    elements.forEach(element => {
      element.removeEventListener(eventType, handler as EventListener);
    });
  };
};

export function useTSEventSelectAll(
  selectors: string[],
  eventType: keyof HTMLElementEventMap,
  handler: (event: HTMLElementEventMap[keyof HTMLElementEventMap]) => void,
  DOM: HTMLElement | Document = document
): void {
  setTimeout(() => {
    selectors.forEach((selector) => {
      const elements = DOM.querySelectorAll(selector);
      elements.forEach((element) => {
        element.addEventListener(eventType, handler as EventListener);
      });
    });
  }, 0);
}

