'use client';

import dynamic from 'next/dynamic';
import HeroSectionLoading from '@/components/layout/Loading/HeroSectionLoading';

const HeroSection = dynamic(() => import('@/components/pages/landing/HeroSection'), {
  ssr: false,
  loading: () => <HeroSectionLoading hideNavbar />,
});

export default function HeroSectionLoader() {
  return <HeroSection />;
}
