function subscribe(eventName: string, listener: EventListener) {
  document.addEventListener(eventName, listener);
}

function unsubscribe(eventName: string, listener: EventListener) {
  document.removeEventListener(eventName, listener);
}

function dispatch<T>(eventName: string, data?: T) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export const customEvent = {
  subscribe,
  unsubscribe,
  dispatch,
};
