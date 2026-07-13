import SectionHub from '@/components/shared/SectionHub';
import { WHO_WE_ARE_HUB } from '@/constants/component/section-hubs-data';

export const metadata = {
  title: 'Who We Are',
  description: 'History, culture, and how Stack360 ships complex software systems.',
};

export default function Page() {
  return <SectionHub {...WHO_WE_ARE_HUB} />;
}
