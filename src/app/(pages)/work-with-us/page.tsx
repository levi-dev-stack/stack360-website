import SectionHub from '@/components/shared/SectionHub';
import { WORK_WITH_US_HUB } from '@/constants/component/section-hubs-data';
import { seo } from '@/constants/seo';

export const metadata = seo.workWithUs;

export default function Page() {
  return <SectionHub {...WORK_WITH_US_HUB} />;
}
