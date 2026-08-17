'use client';

import { useEffect } from 'react';

function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }
  return pathname.replace(/\/+$/, '') || '/';
}

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

/**
 * Same-origin `<a>` that already matches the current path + query,
 * with no in-page hash target. Hash links like `#main-content` are left alone.
 */
function isSamePageAnchor(anchor: HTMLAnchorElement): boolean {
  if (anchor.target && anchor.target !== '_self') {
    return false;
  }
  if (anchor.hasAttribute('download')) {
    return false;
  }

  const hrefAttr = anchor.getAttribute('href');
  if (!hrefAttr || hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) {
    return false;
  }

  let next: URL;
  try {
    next = new URL(anchor.href);
  } catch {
    return false;
  }

  if (next.origin !== window.location.origin) {
    return false;
  }
  if (next.hash && next.hash !== '#') {
    return false;
  }
  if (normalizePath(next.pathname) !== normalizePath(window.location.pathname)) {
    return false;
  }
  if (next.search !== window.location.search) {
    return false;
  }

  return true;
}

function scrollToTop() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, left: 0, behavior: reduced ? 'auto' : 'smooth' });
}

/**
 * Clicking a link (or Link-styled button) to the page you are already on
 * would otherwise no-op. Scroll to top instead — every route.
 */
export default function SameRouteScrollToTop() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || isModifiedClick(event)) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest('a');
      if (!anchor || !isSamePageAnchor(anchor)) {
        return;
      }

      event.preventDefault();
      scrollToTop();
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
