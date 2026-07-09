import type { Metadata } from 'next';
import IndustriesPage from '@/components/pages/who-we-help/industries';
import { INDUSTRIES_META } from '@/constants/component/who-we-help-industries-data';

export const metadata: Metadata = {
  title: INDUSTRIES_META.title,
  description: INDUSTRIES_META.description,
  keywords: INDUSTRIES_META.keywords,
};

export default function Page() {
  return <IndustriesPage />;
}
