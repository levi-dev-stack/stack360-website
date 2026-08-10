import { type NextRequest, NextResponse } from 'next/server';
import { getClientIp } from '@/lib/client-ip';

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  return NextResponse.json({ ip });
}
