'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export type QueryParamMethod = 'replace' | 'push';

interface UseQueryParamsOptions {
  method?: QueryParamMethod;
}

export function useQueryParams({ method = 'replace' }: UseQueryParamsOptions = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getParam = useCallback(
    (key: string) => searchParams.get(key)?.trim() ?? '',
    [searchParams]
  );

  const setParams = useCallback(
    (updates: Record<string, string | null | undefined>, overrideMethod?: QueryParamMethod) => {
      const next = new URLSearchParams(searchParams.toString());
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
      const href = query ? `${pathname}?${query}` : pathname;
      const navigation = overrideMethod ?? method;

      if (navigation === 'push') {
        router.push(href, { scroll: false });
        return;
      }

      router.replace(href, { scroll: false });
    },
    [method, pathname, router, searchParams]
  );

  return { getParam, setParams, searchParams };
}
