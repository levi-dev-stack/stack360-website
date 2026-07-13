import ContactPage from '@/components/pages/contact';
import { seo } from '@/constants/seo';

export const metadata = seo.contact;

export default function Page() {
  return <ContactPage />;
}
