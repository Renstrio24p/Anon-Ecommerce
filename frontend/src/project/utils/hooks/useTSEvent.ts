export const useTSEvent = (
  id: string,
  eventType: keyof HTMLElementEventMap,
  handler: (event: HTMLElementEventMap[keyof HTMLElementEventMap]) => void
) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener(eventType, handler as EventListener);
    }
  }, 0);
};