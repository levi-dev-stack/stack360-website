'use client';

import dynamic from 'next/dynamic';
import NavbarSkeleton from './NavbarSkeleton';

const PremiumNavbar = dynamic(() => import('@/components/layout/Navbar'), {
  ssr: false,
  loading: () => <NavbarSkeleton />,
});

export default function NavbarLoader() {
  return <PremiumNavbar />;
}
