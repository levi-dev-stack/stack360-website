'use client';
import { useCallback } from 'react';
import { envVars } from '@/config/env';
import { showToast } from '@/lib/toaster';
import { safeJSONParser } from '@/utils/general';

export const useLocalStorage = () => {
  const getItem = useCallback((key: string) => {
    return safeJSONParser(localStorage.getItem(key));
  }, []);

  const setItem = useCallback((key: string, value: unknown) => {
    if (!value) {
      if (envVars.NEXT_PUBLIC_NODE_ENV === 'development') {
        showToast({ text: 'Value is falsy', type: 'warning' });
      }
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const removeItem = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  const clear = useCallback(() => {
    localStorage.clear();
  }, []);

  return { getItem, setItem, removeItem, clear };
};
