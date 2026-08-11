import LandingPage from '@/components/pages/landing';
import { seo } from '@/constants/seo';

export const metadata = seo.home;

export default function Page() {
  return <LandingPage />;
}
