'use client';

import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { Button } from './Button';

type Variant = 'demo' | 'contact';

const HOW_DID_YOU_HEAR_OPTIONS = [
  'Social Media',
  'Website',
  'Google',
  'Newsletters & PR',
  'Events',
];

const fieldBase =
  'w-full rounded-sm border border-border bg-bg px-3.5 py-2.5 text-sm text-body placeholder:text-muted transition-colors focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary';

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
  placeholder,
  error,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-body">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={clsx(fieldBase, error && 'border-error focus:border-error focus:ring-error')}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function CheckboxGroup({
  label,
  name,
  options,
  required,
  values,
  onChange,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  values: string[];
  onChange: (v: string[]) => void;
  error?: string;
}) {
  const toggle = (opt: string) => {
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]);
  };
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-body">
        {label} {required && <span className="text-accent">*</span>}
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((opt) => {
          const checked = values.includes(opt);
          return (
            <label
              key={opt}
              className={clsx(
                'flex cursor-pointer items-center gap-2.5 rounded-sm border px-3.5 py-2.5 text-sm transition-colors',
                checked
                  ? 'border-secondary bg-secondary/10 text-secondary'
                  : 'border-border bg-bg text-body hover:border-secondary/50',
              )}
            >
              <span
                className={clsx(
                  'flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors',
                  checked ? 'border-secondary bg-secondary text-white' : 'border-border',
                )}
              >
                {checked && <Check size={10} strokeWidth={3} />}
              </span>
              <input
                type="checkbox"
                name={name}
                value={opt}
                checked={checked}
                onChange={() => toggle(opt)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-1 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-body">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={clsx(fieldBase, 'appearance-none', error && 'border-error')}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function LeadForm({ variant = 'demo' }: { variant?: Variant }) {
  const [v, setV] = useState<Record<string, string>>({});
  const [heard, setHeard] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');
  const set = (k: string) => (val: string) => setV((p) => ({ ...p, [k]: val }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!v.firstName?.trim()) e.firstName = 'Required';
    if (variant === 'demo' && !v.lastName?.trim()) e.lastName = 'Required';
    if (!v.email?.trim()) e.email = 'Required';
    else if (!emailOk(v.email)) e.email = 'Enter a valid work email.';
    if (!v.company?.trim()) e.company = 'Required';
    if (variant === 'contact' && heard.length === 0) e.heard = 'Please select at least one option.';
    if (variant === 'demo' && !v.heard?.trim()) e.heard = 'Please select how you heard about us.';
    if (variant === 'contact' && !v.message?.trim()) e.message = 'Tell us how we can help.';
    if (variant === 'demo' && !consent) e.consent = 'Please accept to proceed.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setState('loading');
    // Demo-only: simulate a submit. Wire to your CRM/endpoint here.
    setTimeout(() => setState('done'), 700);
  };

  if (state === 'done') {
    return (
      <div className="rounded-lg border border-success/30 bg-success/10 p-8 text-center" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success">
          <Check size={26} />
        </span>
        <h3 className="mt-4 text-xl font-bold text-bright">Thank you  -  we’ll be in touch.</h3>
        <p className="mx-auto mt-2 max-w-sm text-body">
          {variant === 'demo'
            ? 'A solutions engineer will reach out within one business day to schedule your walkthrough.'
            : 'A member of our team will respond within one business day.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required autoComplete="given-name" value={v.firstName || ''} onChange={set('firstName')} error={errors.firstName} />
        {variant === 'demo' ? (
          <Field label="Last name" name="lastName" required autoComplete="family-name" value={v.lastName || ''} onChange={set('lastName')} error={errors.lastName} />
        ) : (
          <Field label="Company" name="company" required autoComplete="organization" value={v.company || ''} onChange={set('company')} error={errors.company} />
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Work email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" value={v.email || ''} onChange={set('email')} error={errors.email} />
        {variant === 'demo' && (
          <Field label="Company" name="company" required autoComplete="organization" value={v.company || ''} onChange={set('company')} error={errors.company} />
        )}
      </div>
      {variant === 'demo' && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Job role" name="role" autoComplete="organization-title" value={v.role || ''} onChange={set('role')} />
          <SelectField label="Company size" name="size" options={['1–50', '51–200', '201–1,000', '1,001–5,000', '5,000+']} value={v.size || ''} onChange={set('size')} />
        </div>
      )}
      {variant === 'demo' && (
        <SelectField
          label="Area of interest"
          name="interest"
          options={['Bloo SIEM (cloud)', 'Bloo On-Prem SIEM', 'Datafabric / log modernization', 'SynthAI', 'Crucible (autonomous SOC)', 'Not sure yet']}
          value={v.interest || ''}
          onChange={set('interest')}
        />
      )}
      {variant === 'contact' && (
        <CheckboxGroup
          label="How did you hear about us?"
          name="heard"
          required
          options={HOW_DID_YOU_HEAR_OPTIONS}
          values={heard}
          onChange={setHeard}
          error={errors.heard}
        />
      )}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-body">
          {variant === 'contact' ? 'Message' : 'Anything we should know?'}{' '}
          {variant === 'contact' && <span className="text-accent">*</span>}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={v.message || ''}
          onChange={(e) => set('message')(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={clsx(fieldBase, errors.message && 'border-error')}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      {variant === 'demo' && (
        <SelectField
          label="How did you hear about us?"
          name="heard"
          required
          options={['Google / Search', 'Social Media', 'LinkedIn', 'Newsletter / PR', 'Events / Conferences', 'Colleague / Referral', 'Other']}
          value={v.heard || ''}
          onChange={set('heard')}
          error={errors.heard}
        />
      )}
      {variant === 'demo' && (
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <span
              className={clsx(
                'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors',
                consent ? 'border-secondary bg-secondary text-white' : 'border-border bg-bg',
                errors.consent && !consent && 'border-error',
              )}
            >
              {consent && <Check size={10} strokeWidth={3} />}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (e.target.checked) setErrors((prev) => { const n = { ...prev }; delete n.consent; return n; });
              }}
            />
            <span className="text-xs leading-relaxed text-muted">
              By clicking submit below, you consent to allow Bloo to store and process the Personal Data submitted above as per our{' '}
              <a href="/privacy-policy" className="text-secondary underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-error" role="alert">{errors.consent}</p>
          )}
        </div>
      )}
      <Button variant="accent" size="lg" className="w-full sm:w-auto" disabled={state === 'loading'}>
        {state === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Submitting…
          </>
        ) : variant === 'demo' ? (
          'Request my demo'
        ) : (
          'Send message'
        )}
      </Button>
      <p className="text-xs text-muted">
        By submitting, you agree to our{' '}
        <a href="/privacy-policy" className="text-secondary underline underline-offset-2">
          Privacy Policy
        </a>
        . We’ll never share your details.
      </p>
    </form>
  );
}
