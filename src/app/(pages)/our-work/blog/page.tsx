import BlogPage from '@/components/pages/our-work/blog';
import { seo } from '@/constants/seo';

export const metadata = seo.ourWorkBlog;

export default function Page() {
  return <BlogPage />;
}
