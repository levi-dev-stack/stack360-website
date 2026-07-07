import z from 'zod';

export const serverSchema = z.object({
  // =========================
  // Server Variables (Only available on Node.js server)
  // =========================
  // NEXTAUTH_SECRET: z.string().min(1),
  // NEXTAUTH_URL: z.url(),
  // NEXT_URL: z.url(),
  // NEXT_BE_API_URL: z.url(),
  // NEXT_BE_API_HOST_NAME: z.string().min(1),
  // NEXT_BE_API_PORT: z.coerce.number(),
});

export const clientSchema = z.object({
  // =========================
  // Client Variables (Available on browser & server)
  // =========================
  // NEXT_PUBLIC_MAIN_DOMAIN: z.string().min(1),
  // NEXT_PUBLIC_PORT: z.coerce.number(),
  NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production', 'test']),
});

export const envSchema = serverSchema.extend(clientSchema.shape);
export type Env = z.infer<typeof envSchema>;
