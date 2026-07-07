'use client';
import type { RefObject } from 'react';
import { useDocumentEvent } from './use-dom-event';

export function useClickOutside(ref: RefObject<HTMLElement>, handler: () => void) {
  useDocumentEvent('mousedown', (event) => {
    if (!ref.current?.contains(event.target as Node)) {
      handler();
    }
  });

  useDocumentEvent('touchstart', (event) => {
    if (!ref.current?.contains(event.target as Node)) {
      handler();
    }
  });
}
