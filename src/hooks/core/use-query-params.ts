'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

export type QueryParamMethod = 'replace' | 'push';

interface UseQueryParamsOptions {
  method?: QueryParamMethod;
}

function readParam(query: string, key: string) {
  return new URLSearchParams(query).get(key)?.trim() ?? '';
}

function locationQuery() {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.search.startsWith('?')
    ? window.location.search.slice(1)
    : window.location.search;
}

export function useQueryParams({ method = 'replace' }: UseQueryParamsOptions = {}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routerQuery = searchParams.toString();
  const [query, setQuery] = useState(routerQuery);
  const queryRef = useRef(query);

  useEffect(() => {
    if (routerQuery === queryRef.current || locationQuery() === queryRef.current) {
      return;
    }

    queryRef.current = routerQuery;
    setQuery(routerQuery);
  }, [routerQuery]);

  const getParam = useCallback((key: string) => readParam(query, key), [query]);

  const setParams = useCallback(
    (updates: Record<string, string | null | undefined>, overrideMethod?: QueryParamMethod) => {
      const next = new URLSearchParams(queryRef.current);
      let changed = false;

      for (const [key, value] of Object.entries(updates)) {
        const normalized = value?.trim() ?? '';
        const current = next.get(key) ?? '';

        if (!normalized) {
          if (next.has(key)) {
            next.delete(key);
            changed = true;
          }
          continue;
        }

        if (current !== normalized) {
          next.set(key, normalized);
          changed = true;
        }
      }

      if (!changed) {
        return;
      }

      const nextQuery = next.toString();
      queryRef.current = nextQuery;
      setQuery(nextQuery);

      const href = nextQuery ? `${pathname}?${nextQuery}` : pathname;
      const navigation = overrideMethod ?? method;

      if (navigation === 'push') {
        window.history.pushState(null, '', href);
        return;
      }

      window.history.replaceState(null, '', href);
    },
    [method, pathname]
  );

  return { getParam, setParams, searchParams };
}
