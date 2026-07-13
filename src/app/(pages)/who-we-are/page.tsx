import SectionHub from '@/components/shared/SectionHub';
import { WHO_WE_ARE_HUB } from '@/constants/component/section-hubs-data';
import { seo } from '@/constants/seo';

export const metadata = seo.whoWeAre;

export default function Page() {
  return <SectionHub {...WHO_WE_ARE_HUB} />;
}
