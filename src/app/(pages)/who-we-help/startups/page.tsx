import type { Metadata } from 'next';
import StartupsPage from '@/components/pages/who-we-help/startups';
import { STARTUPS_META } from '@/constants/component/who-we-help-startups-data';

export const metadata: Metadata = {
  title: STARTUPS_META.title,
  description: STARTUPS_META.description,
  keywords: STARTUPS_META.keywords,
};

export default function Page() {
  return <StartupsPage />;
}
