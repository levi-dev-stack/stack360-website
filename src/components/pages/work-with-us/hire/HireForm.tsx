'use client';

import { type FormEvent, useId, useState } from 'react';
import BrandIcon from '@/components/shared/BrandIcon';
import {
  HIRE_NEED_OPTIONS,
  HIRE_SKILLS,
  type HireNeedId,
  type HireSkillId,
} from '@/constants/component/hire-talent-data';
import { SITE_EMAIL, SITE_EMAIL_HREF } from '@/constants/site';
import { cn } from '@/styles/tailwind.utils';

type Status = 'idle' | 'sent' | 'error';

export default function HireForm() {
  const formId = useId();
  const [skills, setSkills] = useState<HireSkillId[]>([]);
  const [need, setNeed] = useState<HireNeedId | ''>('');
  const [status, setStatus] = useState<Status>('idle');

  const toggleSkill = (id: HireSkillId) => {
    setSkills((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const notes = String(data.get('notes') ?? '').trim();

    if (!name || !email || skills.length === 0 || !need) {
      setStatus('error');
      return;
    }

    const skillLabels = skills
      .map((id) => HIRE_SKILLS.find((s) => s.id === id)?.label ?? id)
      .join(', ');
    const needLabel = HIRE_NEED_OPTIONS.find((o) => o.id === need)?.label ?? need;

    const subject = encodeURIComponent(`Hire talent request from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Skills: ${skillLabels}`,
        `Need: ${needLabel}`,
        notes ? `\nNotes:\n${notes}` : null,
      ]
        .filter(Boolean)
        .join('\n')
    );

    window.location.href = `${SITE_EMAIL_HREF}?subject=${subject}&body=${body}`;
    setStatus('sent');
    form.reset();
    setSkills([]);
    setNeed('');
  };

  const fieldClass =
    'min-h-11 w-full rounded-md border border-neutral-200 bg-neutral-50 px-md py-md text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15';

  const labelClass =
    'mb-xs block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600';

  return (
    <form onSubmit={onSubmit} noValidate aria-labelledby={`${formId}-title`}>
      <div className="mb-lg space-y-sm">
        <h2 id={`${formId}-title`} className="text-2xl font-bold tracking-tight text-neutral-900">
          Hire a developer
        </h2>
        <p className="max-w-prose text-sm leading-relaxed text-neutral-600">
          Select skills and engagement length. We follow up with a shortlist — not a generic
          brochure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className={labelClass}>
            Name
            <span className="text-primary" aria-hidden>
              {' '}
              *
            </span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className={labelClass}>
            Email
            <span className="text-primary" aria-hidden>
              {' '}
              *
            </span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-company`} className={labelClass}>
            Company name
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc."
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset className="mt-xl">
        <legend className={labelClass}>
          Skills / technology
          <span className="text-primary" aria-hidden>
            {' '}
            *
          </span>
        </legend>
        <p className="mt-xs text-xs text-neutral-600">Select all that apply.</p>
        <div className="mt-md grid grid-cols-2 gap-sm sm:grid-cols-3 md:grid-cols-4">
          {HIRE_SKILLS.map((skill) => {
            const selected = skills.includes(skill.id);
            return (
              <button
                key={skill.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleSkill(skill.id)}
                className={cn(
                  'flex min-h-11 items-center justify-center gap-sm rounded-md border px-sm py-sm text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                  selected
                    ? 'border-primary bg-primary text-neutral-50 shadow-sm'
                    : 'border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-400'
                )}
              >
                {skill.iconSlug ? (
                  <BrandIcon
                    slug={skill.iconSlug}
                    size={16}
                    variant="tech"
                    className={selected ? 'brightness-0 invert' : undefined}
                  />
                ) : null}
                {skill.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-xl">
        <legend className="text-base font-bold text-neutral-900">
          What best describes your need?
        </legend>
        <p className="mt-xs text-sm text-neutral-600">
          Stack360 developers are full-time, dedicated resources on your team.
        </p>
        <div className="mt-md space-y-sm">
          {HIRE_NEED_OPTIONS.map((option) => (
            <label
              key={option.id}
              className={cn(
                'flex cursor-pointer items-start gap-md rounded-md border px-md py-md transition-colors',
                need === option.id
                  ? 'border-primary/40 bg-primary/5'
                  : 'border-neutral-200 bg-neutral-50 hover:border-neutral-400'
              )}
            >
              <input
                type="radio"
                name="need"
                value={option.id}
                checked={need === option.id}
                onChange={() => setNeed(option.id)}
                className="mt-1 size-4 accent-primary"
              />
              <span className="text-sm text-neutral-800">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-xl">
        <label htmlFor={`${formId}-notes`} className={labelClass}>
          Anything else?
        </label>
        <textarea
          id={`${formId}-notes`}
          name="notes"
          rows={4}
          placeholder="Would you like to tell us anything else?"
          className={cn(fieldClass, 'resize-y')}
        />
      </div>

      {status === 'error' ? (
        <p className="mt-md text-sm font-medium text-danger" role="alert">
          Name, email, at least one skill, and engagement length are required.
        </p>
      ) : null}
      {status === 'sent' ? (
        <output className="mt-md block text-sm font-medium text-neutral-700">
          Your mail client should open with the request drafted. If it does not, email{' '}
          <a className="font-bold text-primary underline" href={SITE_EMAIL_HREF}>
            {SITE_EMAIL}
          </a>
          .
        </output>
      ) : null}

      <div className="mt-lg flex flex-col gap-md sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-prose text-xs leading-relaxed text-neutral-600">
          By submitting, you agree we may contact you about this staffing request. No mailing lists.
        </p>
        <button
          type="submit"
          className="min-h-11 shrink-0 rounded-sm bg-primary px-xl py-md text-sm font-bold text-neutral-50 shadow-md transition-all hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
