import CapabilityPage from '@/components/pages/what-we-build/CapabilityPage';
import { getCapabilityPage } from '@/constants/component/what-we-build-data';

const data = getCapabilityPage('mobile-apps');

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
};

export default function Page() {
  return <CapabilityPage data={data} />;
}
