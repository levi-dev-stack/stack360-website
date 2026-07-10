'use client';

import { type FormEvent, useState } from 'react';
import { CONTACT_FORM_FIELDS } from '@/constants/component/contact-data';

type Status = 'idle' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

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

    const subject = encodeURIComponent(`Stack360 inquiry from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, company ? `Company: ${company}` : null, '', message]
        .filter(Boolean)
        .join('\n')
    );

    window.location.href = `mailto:sales@stack360.co?subject=${subject}&body=${body}`;
    setStatus('sent');
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-lg space-y-sm">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Start a conversation</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
          Tell us what you are building. We will follow up with a scoped next step — not a generic
          brochure.
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
            Project brief
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
            placeholder="What are you building? Timeline, stack, team size..."
            className="w-full resize-y rounded-md border border-neutral-200 bg-neutral-50 px-md py-md text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15"
          />
        </div>
      </div>

      {status === 'error' ? (
        <p className="mt-md text-sm font-medium text-danger" role="alert">
          Name, email, and project brief are required.
        </p>
      ) : null}
      {status === 'sent' ? (
        <output className="mt-md block text-sm font-medium text-neutral-700">
          Your mail client should open with the message drafted. If it does not, email{' '}
          <a className="font-bold text-primary underline" href="mailto:sales@stack360.co">
            sales@stack360.co
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
          Send message
        </button>
      </div>
    </form>
  );
}
