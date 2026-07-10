import SectionHub from '@/components/shared/SectionHub';
import { WORK_WITH_US_HUB } from '@/constants/component/section-hubs-data';

export const metadata = {
  title: 'Work With Us | Stack360',
  description: 'Engage Stack360 as a software partner or explore careers at the studio.',
};

export default function Page() {
  return <SectionHub {...WORK_WITH_US_HUB} />;
}
