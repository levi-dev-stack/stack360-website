import type { NextRequest } from 'next/server';
import { getClientIp } from '../client-ip';
import { store } from './store';
import type { RateLimitOptions, RateLimitResult } from './type';

export function rateLimit(request: NextRequest, options: RateLimitOptions): RateLimitResult {
  const pathname = request.nextUrl.pathname;
  const ip = getClientIp(request);

  const key = `${ip}:${pathname}:${options.windowMs}:${options.maxRequests}`;

  const now = Date.now();

  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, {
      count: 1,
      resetAt: now + options.windowMs,
    });

    return {
      success: true,
    };
  }

  if (current.count >= options.maxRequests) {
    return {
      success: false,
      retryAfter: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count++;

  return {
    success: true,
  };
}
