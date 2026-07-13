import SectionHub from '@/components/shared/SectionHub';
import { WHAT_WE_BUILD_HUB } from '@/constants/component/section-hubs-data';
import { seo } from '@/constants/seo';

export const metadata = seo.whatWeBuild;

export default function Page() {
  return <SectionHub {...WHAT_WE_BUILD_HUB} />;
}
