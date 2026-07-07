'use client';

import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useDebounce } from './use-debounce';
import { useWindowEvents } from './use-window-event';

export function useElementPosition<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
  });

  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
        bottom: rect.bottom + window.scrollY,
        right: rect.right + window.scrollX,
      });
    }
  }, []);

  const debouncedUpdate = useDebounce(updatePosition, 50);

  useLayoutEffect(() => {
    debouncedUpdate();
  }, [debouncedUpdate]);

  useWindowEvents({
    scroll: debouncedUpdate,
    resize: debouncedUpdate,
  });

  return { ref, position, updatePosition: debouncedUpdate };
}
