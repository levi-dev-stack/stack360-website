'use client';

import { useSearchParams } from 'next/navigation';
import { type FormEvent, useState } from 'react';
import { CONTACT_FORM_FIELDS } from '@/constants/component/contact-data';
import { SITE_EMAIL, SITE_EMAIL_HREF } from '@/constants/site';

type Status = 'idle' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const searchParams = useSearchParams();
  const role = searchParams.get('role')?.trim() ?? '';

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(
      role ? `Stack360 application: ${role} — ${name}` : `Stack360 inquiry from ${name}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        role ? `Role: ${role}` : null,
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n')
    );

    window.location.href = `${SITE_EMAIL_HREF}?subject=${subject}&body=${body}`;
    setStatus('sent');
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-lg space-y-sm">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          {role ? `Apply: ${role}` : 'Start a conversation'}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
          {role
            ? 'Tell us about your background and why this role fits. We will follow up with next steps.'
            : 'Tell us what you are building. We will follow up with a scoped next step — not a generic brochure.'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
        {CONTACT_FORM_FIELDS.map((field) => (
          <div key={field.id} className={field.id === 'company' ? 'sm:col-span-2' : undefined}>
            <label
              htmlFor={field.id}
              className="mb-xs block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600"
            >
              {field.label}
              {field.id !== 'company' ? (
                <span className="text-primary" aria-hidden>
                  {' '}
                  *
                </span>
              ) : null}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.id !== 'company'}
              autoComplete={
                field.id === 'name' ? 'name' : field.id === 'email' ? 'email' : 'organization'
              }
              aria-required={field.id !== 'company'}
              placeholder={field.placeholder}
              className="min-h-11 w-full rounded-md border border-neutral-200 bg-neutral-50 px-md py-md text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15"
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-xs block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600"
          >
            {role ? 'Cover note' : 'Project brief'}
            <span className="text-primary" aria-hidden>
              {' '}
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder={
              role
                ? 'Experience, availability, and why this role…'
                : 'What are you building? Timeline, stack, team size...'
            }
            className="w-full resize-y rounded-md border border-neutral-200 bg-neutral-50 px-md py-md text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15"
          />
        </div>
      </div>

      {status === 'error' ? (
        <p className="mt-md text-sm font-medium text-danger" role="alert">
          Name, email, and message are required.
        </p>
      ) : null}
      {status === 'sent' ? (
        <output className="mt-md block text-sm font-medium text-neutral-700">
          Your mail client should open with the message drafted. If it does not, email{' '}
          <a className="font-bold text-primary underline" href={SITE_EMAIL_HREF}>
            {SITE_EMAIL}
          </a>
          .
        </output>
      ) : null}

      <div className="mt-lg flex flex-col gap-md sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-xs leading-relaxed text-neutral-600">
          By submitting, you agree we may contact you about your inquiry. No mailing lists.
        </p>
        <button
          type="submit"
          className="min-h-11 shrink-0 rounded-sm bg-primary px-xl py-md text-sm font-bold text-neutral-50 shadow-md transition-all hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
        >
          {role ? 'Submit application' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
