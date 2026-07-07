import { ROLES, type RoleValue } from './roles';

// OPERATIONS
// create | read | update | delete

// ATTRIBUTES
// tenant | user

export const PERMISSIONS = Object.freeze({
  [ROLES.ADMIN]: [],
  [ROLES.USER]: [],
  [ROLES.PUBLIC]: [],
} as const);

export type Permission = (typeof PERMISSIONS)[RoleValue][number];
