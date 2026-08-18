'use client';

import { createContext, type ReactNode, useContext } from 'react';
import type { OpenRolesCatalog } from './fetch-open-roles-catalog';

const OpenRolesCatalogContext = createContext<OpenRolesCatalog | null>(null);

interface OpenRolesProviderProps {
  catalog: OpenRolesCatalog;
  children: ReactNode;
}

export function OpenRolesProvider({ catalog, children }: OpenRolesProviderProps) {
  return (
    <OpenRolesCatalogContext.Provider value={catalog}>{children}</OpenRolesCatalogContext.Provider>
  );
}

export function useOpenRolesCatalog() {
  const catalog = useContext(OpenRolesCatalogContext);

  if (!catalog) {
    throw new Error('useOpenRolesCatalog must be used within OpenRolesProvider');
  }

  return catalog;
}
