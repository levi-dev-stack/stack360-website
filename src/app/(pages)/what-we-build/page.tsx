import SectionHub from '@/components/shared/SectionHub';
import { WHAT_WE_BUILD_HUB } from '@/constants/component/section-hubs-data';

export const metadata = {
  title: 'What We Build',
  description:
    'ERP, CRM, AI, SaaS, mobile, web, cloud, DevOps, and automation — systems Stack360 architects end to end.',
};

export default function Page() {
  return <SectionHub {...WHAT_WE_BUILD_HUB} />;
}
