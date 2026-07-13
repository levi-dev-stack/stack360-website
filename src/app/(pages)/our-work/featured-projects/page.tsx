import FeaturedProjectsPage from '@/components/pages/our-work/featured-projects';
import { seo } from '@/constants/seo';

export const metadata = seo.ourWorkFeaturedProjects;

export default function Page() {
  return <FeaturedProjectsPage />;
}
