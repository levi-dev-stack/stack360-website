import type { Metadata } from 'next';
import EnterprisesPage from '@/components/pages/who-we-help/enterprises';
import { ENTERPRISES_META } from '@/constants/component/who-we-help-enterprises-data';

export const metadata: Metadata = {
  title: ENTERPRISES_META.title,
  description: ENTERPRISES_META.description,
  keywords: ENTERPRISES_META.keywords,
};

export default function Page() {
  return <EnterprisesPage />;
}
