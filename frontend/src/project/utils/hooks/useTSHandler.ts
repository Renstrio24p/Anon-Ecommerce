
type EventConfig = {
    mode: string; // The event type (e.g., 'click', 'input', etc.)
    handler: (event: Event) => void; // The event handler function
};

export function useTSHandler(elementId: string, config: EventConfig) {
    const element = document.getElementById(elementId);

    if (element) {
        const { mode, handler } = config;

        // Bind the event listener to the specified element
        element.addEventListener(mode, handler);

        // Cleanup function to remove the event listener
        return () => {
            element.removeEventListener(mode, handler);
        };
    } else {
        console.warn(`Element with ID ${elementId} not found.`);
    }
}
