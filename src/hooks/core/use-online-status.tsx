'use client';
import { useBooleanToggle } from './use-boolean-toggle';
import { useWindowEvents } from './use-window-event';

export function useOnlineStatus() {
  const { state, enable, disable } = useBooleanToggle(navigator.onLine);

  useWindowEvents({
    online: () => enable(),
    offline: () => disable(),
  });

  return state;
}
