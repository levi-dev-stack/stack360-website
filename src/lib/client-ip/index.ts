import type { NextRequest } from 'next/server';

export function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for');
  const ip = forwardedFor?.split(',')[0]?.trim() ?? 'unknown';

  return ip;
}
