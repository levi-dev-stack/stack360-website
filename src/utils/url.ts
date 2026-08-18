export const isPathActive = (pathname: string | undefined, href?: string) => {
  if (!href || !pathname) {
    return false;
  }

  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};
