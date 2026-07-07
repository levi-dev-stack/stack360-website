import type { DefaultSession, DefaultUser } from 'next-auth';
import type { CurrentUser } from './user';

declare module 'next-auth' {
  interface Session {
    user: CurrentUser & DefaultSession['user'];
  }

  interface User extends DefaultUser, CurrentUser {}
}

declare module 'next-auth/jwt' {
  interface JWT extends CurrentUser {}
}
