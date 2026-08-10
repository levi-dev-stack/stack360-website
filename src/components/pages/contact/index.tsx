import { Suspense } from 'react';
import ContactForm from '@/components/pages/contact/ContactForm';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionReveal } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { CONTACT_CTA, CONTACT_HERO } from '@/constants/component/contact-data';
import ContactChannel from './ContactChannel';

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...CONTACT_HERO} />

      <MotionSection className="py-2xl">
        <div className="site-container grid grid-cols-1 gap-2xl lg:grid-cols-12">
          <ContactChannel />

          <MotionReveal className="lg:col-span-7">
            <MotionCard
              interactive={false}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-xl shadow-sm"
            >
              <Suspense fallback={<p className="text-sm text-neutral-600">Loading form…</p>}>
                <ContactForm />
              </Suspense>
            </MotionCard>
          </MotionReveal>
        </div>
      </MotionSection>

      <PageClosingCta {...CONTACT_CTA} />
    </div>
  );
}
