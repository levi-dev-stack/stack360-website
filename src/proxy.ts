import { type NextRequest, NextResponse } from 'next/server';
import { RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW } from './constants/rate-limit';
import { rateLimit } from './lib/rate-limit';

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const result = rateLimit(req, {
    windowMs: RATE_LIMIT_WINDOW,
    maxRequests: RATE_LIMIT_MAX_REQUESTS,
  });

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        error: 'Too many requests. Please try again later.',
        pathname,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(result.retryAfter),
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
