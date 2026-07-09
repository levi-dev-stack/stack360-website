import type { Metadata } from 'next';
import SmesPage from '@/components/pages/who-we-help/smes';
import { SMES_META } from '@/constants/component/who-we-help-smes-data';

export const metadata: Metadata = {
  title: SMES_META.title,
  description: SMES_META.description,
  keywords: SMES_META.keywords,
};

export default function Page() {
  return <SmesPage />;
}
