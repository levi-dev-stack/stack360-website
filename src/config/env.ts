import { clientSchema, type Env, serverSchema } from '../schema/env';

const clientEnv = {
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
};

let env = {} as Env;

if (typeof window === 'undefined') {
  const serverParsed = serverSchema.safeParse(process.env);
  const clientParsed = clientSchema.safeParse(clientEnv);

  if (!serverParsed.success || !clientParsed.success) {
    console.error('❌ Invalid environment variables:');
    if (!serverParsed.success) {
      console.error(serverParsed.error.format());
    }
    if (!clientParsed.success) {
      console.error(clientParsed.error.format());
    }
    throw new Error('Invalid server environment variables');
  }

  env = { ...serverParsed.data, ...clientParsed.data };
} else {
  const clientParsed = clientSchema.safeParse(clientEnv);

  if (!clientParsed.success) {
    console.error('❌ Invalid client environment variables:');
    if (!clientParsed.success) {
      console.error(clientParsed.error.format());
    }
    throw new Error('Invalid client environment variables');
  }

  env = clientParsed.data as Env;
}

const isProd = env?.NEXT_PUBLIC_NODE_ENV === 'production';

/**
 * Final export
 */
export const envVars = {
  ...env,
  isProd,
};
