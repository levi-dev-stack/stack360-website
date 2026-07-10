import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import {
  CONTACT_CHANNELS,
  CONTACT_CTA,
  CONTACT_FORM_FIELDS,
  CONTACT_HERO,
  CONTACT_OFFICES,
} from '@/constants/component/contact-data';

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...CONTACT_HERO} />

      <MotionSection className="py-2xl">
        <div className="site-container grid grid-cols-1 gap-2xl lg:grid-cols-12">
          <div className="space-y-xl lg:col-span-5">
            <MotionStagger className="space-y-md">
              <MotionStaggerItem>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                  Direct channels
                </h2>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
                  Reach our partnerships desk directly. We route every inquiry to the right lead
                  engineer — not a generic inbox.
                </p>
              </MotionStaggerItem>
            </MotionStagger>

            <MotionStagger className="space-y-md">
              {CONTACT_CHANNELS.map((channel) => (
                <MotionStaggerItem key={channel.label}>
                  <MotionCard>
                    <a
                      href={channel.href}
                      className="group flex items-start gap-md rounded-lg border border-neutral-200 bg-neutral-50 p-lg transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-primary transition-colors group-hover:border-primary/30">
                        {channel.label === 'Phone' ? <Phone size={18} /> : <Mail size={18} />}
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                          {channel.label}
                        </span>
                        <span className="mt-xs block text-base font-semibold text-neutral-900 group-hover:text-primary">
                          {channel.value}
                        </span>
                        <span className="mt-xs block text-xs text-neutral-500">{channel.hint}</span>
                      </span>
                    </a>
                  </MotionCard>
                </MotionStaggerItem>
              ))}
            </MotionStagger>

            <MotionStagger className="grid grid-cols-1 gap-md sm:grid-cols-2">
              {CONTACT_OFFICES.map((office) => (
                <MotionStaggerItem key={office.country}>
                  <MotionCard className="rounded-lg border border-neutral-200 bg-neutral-50 p-md">
                    <div className="flex items-center gap-sm">
                      <Image
                        src={office.flagSrc}
                        alt={`${office.country} flag`}
                        width={24}
                        height={16}
                        unoptimized
                        className="h-4 w-6 rounded-[2px] border border-neutral-200 object-cover"
                      />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                        {office.role}
                      </span>
                    </div>
                    <p className="mt-sm text-sm font-semibold text-neutral-900">{office.country}</p>
                    <p className="mt-xs text-xs leading-relaxed text-neutral-600">
                      {office.address}
                    </p>
                  </MotionCard>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>

          <MotionReveal className="lg:col-span-7">
            <MotionCard
              interactive={false}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-xl shadow-sm"
            >
              <form>
                <div className="mb-lg space-y-sm">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                    Start a conversation
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
                    Tell us what you are building. We will follow up with a scoped next step — not a
                    generic brochure.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
                  {CONTACT_FORM_FIELDS.map((field) => (
                    <div
                      key={field.id}
                      className={field.id === 'company' ? 'sm:col-span-2' : undefined}
                    >
                      <label
                        htmlFor={field.id}
                        className="mb-xs block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-md py-sm text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-xs block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500"
                    >
                      Project brief
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="What are you building? Timeline, stack, team size..."
                      className="w-full resize-y rounded-md border border-neutral-200 bg-neutral-50 px-md py-sm text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </div>

                <div className="mt-lg flex flex-col gap-md sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-3xl text-xs leading-relaxed text-neutral-500">
                    By submitting, you agree we may contact you about your inquiry. No mailing
                    lists.
                  </p>
                  <button
                    type="submit"
                    className="shrink-0 rounded-sm bg-primary px-xl py-md text-sm font-bold text-neutral-50 shadow-md transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </MotionCard>
          </MotionReveal>
        </div>
      </MotionSection>

      <PageClosingCta {...CONTACT_CTA} />
    </div>
  );
}
