'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';

/* ─── storage ──────────────────────────────────────────────── */
const KEY = 'bloo-cookie-consent';

type Prefs = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  ts: number;
};

function loadPrefs(): Prefs | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
}

function savePrefs(p: Omit<Prefs, 'ts'>) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...p, ts: Date.now() }));
  } catch { /* storage unavailable */ }
}

/* ─── Toggle switch (brand-aware) ─────────────────────────── */
function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={[
        'relative inline-flex h-[26px] w-[46px] shrink-0 cursor-pointer items-center rounded-full',
        'transition-colors duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
        checked ? 'bg-secondary' : 'bg-border',
      ].join(' ')}
    >
      <span
        className={[
          'inline-block h-5 w-5 rounded-full bg-bright shadow-1 transition-transform duration-200',
          checked ? 'translate-x-[23px]' : 'translate-x-[3px]',
        ].join(' ')}
      />
    </button>
  );
}

/* ─── Accordion item ───────────────────────────────────────── */
type AccordionItemProps = {
  id: string;
  label: string;
  description: string;
  defaultOpen?: boolean;
  badge?: React.ReactNode;
  control?: React.ReactNode;
};

function AccordionItem({
  id,
  label,
  description,
  defaultOpen,
  badge,
  control,
}: AccordionItemProps) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`cpanel-${id}`}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 py-3.5 text-left hover:bg-surface-2/40 transition-colors"
      >
        {/* chevron */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className={[
            'shrink-0 text-muted transition-transform duration-200',
            open ? 'rotate-90' : '',
          ].join(' ')}
        >
          <path
            d="M4.5 2L10 7L4.5 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="flex-1 font-bold text-bright text-[0.9375rem]">{label}</span>

        {badge && (
          <span className="ml-auto text-sm font-bold text-success">{badge}</span>
        )}
        {control && (
          <span
            className="ml-auto"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {control}
          </span>
        )}
      </button>

      {open && (
        <div
          id={`cpanel-${id}`}
          role="region"
          className="pb-4 pl-[1.4rem] pr-1 text-sm leading-relaxed text-body"
        >
          {description}
        </div>
      )}
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────── */
export function CookieConsent() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen]         = useState(false);
  const [showExtra, setShowExtra]         = useState(false);

  const [functional,   setFunctional]   = useState(false);
  const [analytics,    setAnalytics]    = useState(false);
  const [performance,  setPerformance]  = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  /* Show banner only when no prior consent */
  useEffect(() => {
    const saved = loadPrefs();
    if (!saved) {
      setBannerVisible(true);
    } else {
      setFunctional(saved.functional);
      setAnalytics(saved.analytics);
      setPerformance(saved.performance);
    }
  }, []);

  /* Trap focus + Escape key inside modal */
  useEffect(() => {
    if (!modalOpen) return;
    const el = modalRef.current;
    if (el) {
      const first = el.querySelector<HTMLElement>(
        'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  /* ── actions ── */
  const acceptAll = () => {
    savePrefs({ necessary: true, functional: true, analytics: true, performance: true });
    setFunctional(true); setAnalytics(true); setPerformance(true);
    setBannerVisible(false);
    setModalOpen(false);
  };

  const saveMyPreferences = () => {
    savePrefs({ necessary: true, functional, analytics, performance });
    setBannerVisible(false);
    setModalOpen(false);
  };

  const openCustomise = () => {
    setBannerVisible(false);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  /* ══════════════════════════════════════════════
     BANNER
  ══════════════════════════════════════════════ */
  const banner = bannerVisible && (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ck-banner-title"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-bg/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) setBannerVisible(false); }}
    >
      <div className="relative w-full max-w-[490px] rounded-md border border-border bg-surface p-7 shadow-3">

        {/* close × */}
        <button
          type="button"
          aria-label="Close banner"
          onClick={() => setBannerVisible(false)}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded text-muted transition-colors hover:bg-surface-2 hover:text-bright text-base leading-none"
        >
          ✕
        </button>

        <h2
          id="ck-banner-title"
          className="mb-3 pr-8 font-black tracking-tightish text-bright"
        >
          We value your privacy
        </h2>

        <p className="mb-6 text-sm leading-relaxed text-body">
          We use cookies to enhance your browsing experience, serve personalized ads or content,
          and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use
          of cookies.
        </p>

        <div className="flex gap-3">
          <Button variant="ghost" size="md" className="flex-1" onClick={openCustomise}>
            Customise
          </Button>
          <Button variant="accent" size="md" className="flex-1" onClick={acceptAll}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );

  /* ══════════════════════════════════════════════
     PREFERENCES MODAL
  ══════════════════════════════════════════════ */
  const modal = modalOpen && (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ck-modal-title"
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto p-4 bg-bg/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      <div
        ref={modalRef}
        className="flex w-full max-w-[860px] flex-col rounded-md border border-border bg-surface shadow-3"
        style={{ maxHeight: '94vh' }}
      >

        {/* ── header ── */}
        <div className="flex items-start justify-between gap-4 border-b border-border px-7 py-5">
          <h2
            id="ck-modal-title"
            className="font-black tracking-tightish text-bright"
          >
            Customize Consent Preferences
          </h2>
          <button
            type="button"
            aria-label="Close preferences"
            onClick={closeModal}
            className="flex items-center justify-center rounded border border-border px-2 py-1 text-base leading-none text-muted transition-colors hover:bg-surface-2 hover:text-bright"
          >
            ✕
          </button>
        </div>

        {/* ── scrollable body ── */}
        <div className="flex-1 overflow-y-auto px-7 py-5">

          {/* intro */}
          <div className="text-sm leading-relaxed text-body">
            <p>
              We use cookies to help you navigate efficiently and perform certain functions. You
              will find detailed information about all cookies under each consent category below.
            </p>
            <p className="mt-1.5">
              The cookies that are categorized as &ldquo;Necessary&rdquo; are stored on your
              browser as they are essential for enabling the basic functionalities of the site.
              {!showExtra && (
                <>
                  {' '}
                  <span className="text-muted">...</span>{' '}
                  <button
                    type="button"
                    onClick={() => setShowExtra(true)}
                    className="bg-transparent border-none p-0 text-sm text-secondary cursor-pointer hover:underline underline-offset-2"
                  >
                    Show more
                  </button>
                </>
              )}
            </p>
            {showExtra && (
              <p className="mt-2">
                We also use third-party cookies that help us analyze how you use this website,
                store your preferences, and provide the content and advertisements that are
                relevant to you. These cookies will only be stored in your browser with your
                prior consent. You can choose to enable or disable some or all of these cookies
                but disabling some of them may affect your browsing experience.{' '}
                <button
                  type="button"
                  onClick={() => setShowExtra(false)}
                  className="bg-transparent border-none p-0 text-sm text-secondary cursor-pointer hover:underline underline-offset-2"
                >
                  Show less
                </button>
              </p>
            )}
          </div>

          {/* accordion */}
          <div className="mt-5 border-t border-border">
            <AccordionItem
              id="necessary"
              label="Necessary"
              defaultOpen
              badge="Always Active"
              description="Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data."
            />
            <AccordionItem
              id="functional"
              label="Functional"
              description="Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features."
              control={
                <Toggle
                  checked={functional}
                  onChange={setFunctional}
                  label="Toggle Functional cookies"
                />
              }
            />
            <AccordionItem
              id="analytics"
              label="Analytics"
              description="Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc."
              control={
                <Toggle
                  checked={analytics}
                  onChange={setAnalytics}
                  label="Toggle Analytics cookies"
                />
              }
            />
            <AccordionItem
              id="performance"
              label="Performance"
              description="Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors."
              control={
                <Toggle
                  checked={performance}
                  onChange={setPerformance}
                  label="Toggle Performance cookies"
                />
              }
            />
          </div>
        </div>

        {/* ── footer ── */}
        <div className="border-t border-border px-7 py-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" size="md" className="min-w-[150px] flex-1" onClick={saveMyPreferences}>
              Save My Preferences
            </Button>
            <Button variant="accent" size="md" className="min-w-[150px] flex-1" onClick={acceptAll}>
              Accept All
            </Button>
          </div>

          {/* Powered by CookieYes */}
          <p className="mt-3 text-right font-mono text-xs tracking-widecaps text-muted">
            Powered by{' '}
            <span className="font-bold not-italic text-body">CookieYes</span>
          </p>
        </div>

      </div>
    </div>
  );

  return (
    <>
      {banner}
      {modal}
    </>
  );
}
