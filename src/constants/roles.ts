export const ROLES = Object.freeze({
  ADMIN: 'admin',
  USER: 'user',
  PUBLIC: 'public',
});

export type RoleKeys = keyof typeof ROLES;
export type RoleValue = (typeof ROLES)[RoleKeys];
