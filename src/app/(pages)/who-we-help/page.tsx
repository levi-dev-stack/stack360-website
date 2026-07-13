import SectionHub from '@/components/shared/SectionHub';
import { WHO_WE_HELP_HUB } from '@/constants/component/section-hubs-data';

export const metadata = {
  title: 'Who We Help',
  description:
    'Stack360 partners with startups, SMEs, and enterprises across Healthcare, FinTech, and Logistics.',
};

export default function Page() {
  return <SectionHub {...WHO_WE_HELP_HUB} />;
}
