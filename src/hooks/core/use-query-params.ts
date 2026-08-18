'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

export type QueryParamMethod = 'replace' | 'push';

interface UseQueryParamsOptions {
  method?: QueryParamMethod;
}

function readParam(query: string, key: string) {
  return new URLSearchParams(query).get(key)?.trim() ?? '';
}

export function useQueryParams({ method = 'replace' }: UseQueryParamsOptions = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routerQuery = searchParams.toString();
  const routerQueryRef = useRef(routerQuery);
  const snapshotRef = useRef(routerQuery);
  const pendingRef = useRef<{ expected: string; seen: string } | null>(null);
  const [_queryVersion, setQueryVersion] = useState(0);

  routerQueryRef.current = routerQuery;

  useEffect(() => {
    const pending = pendingRef.current;

    if (pending) {
      if (routerQuery === pending.expected) {
        pendingRef.current = null;
        return;
      }

      if (routerQuery === pending.seen) {
        return;
      }

      pendingRef.current = null;
    }

    if (snapshotRef.current === routerQuery) {
      return;
    }

    snapshotRef.current = routerQuery;
    setQueryVersion((version) => version + 1);
  }, [routerQuery]);

  const getParam = useCallback((key: string) => readParam(snapshotRef.current, key), []);

  const setParams = useCallback(
    (updates: Record<string, string | null | undefined>, overrideMethod?: QueryParamMethod) => {
      const next = new URLSearchParams(snapshotRef.current);
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

      const query = next.toString();
      pendingRef.current = { expected: query, seen: routerQueryRef.current };
      snapshotRef.current = query;
      setQueryVersion((version) => version + 1);

      const href = query ? `${pathname}?${query}` : pathname;
      const navigation = overrideMethod ?? method;

      if (navigation === 'push') {
        router.push(href, { scroll: false });
        return;
      }

      router.replace(href, { scroll: false });
    },
    [method, pathname, router]
  );

  return { getParam, setParams, searchParams };
}
