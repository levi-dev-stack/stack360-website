import NewsPage from '@/components/pages/our-work/news';
import { seo } from '@/constants/seo';

export const metadata = seo.ourWorkNews;

export default function Page() {
  return <NewsPage />;
}
