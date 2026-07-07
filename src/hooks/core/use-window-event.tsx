'use client';
import { useEffect } from 'react';
import type { WindowEventHandlerMap } from '@/types/hooks';

export const useWindowEvents = (handlers: WindowEventHandlerMap) => {
  useEffect(() => {
    const entries = Object.entries(handlers) as [keyof WindowEventMap, EventListener][];

    entries.forEach(([eventName, handler]) => {
      window.addEventListener(eventName, handler);
    });

    return () => {
      entries.forEach(([eventName, handler]) => {
        window.removeEventListener(eventName, handler);
      });
    };
  }, [handlers]);
};
