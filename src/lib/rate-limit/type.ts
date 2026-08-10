export type RateLimitOptions = {
  windowMs: number;
  maxRequests: number;
};

export type RateLimitResult = {
  success: boolean;
  retryAfter?: number;
};
