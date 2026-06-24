import Link from 'next/link';
import { Linkedin, Github, Youtube } from 'lucide-react';
import { Container } from '@/components/ui/Section';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { Logo } from '@/components/layout/Logo';
import { footerNav, legalNav, siteConfig } from '@/lib/site';

// X (Twitter) has no dedicated current Lucide glyph; use a small inline mark.
function XMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <Logo width={104} height={38} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}. Full-fidelity telemetry, detection and AI-driven security
              operations  -  in your cloud, at predictable cost.
            </p>
            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-widecaps text-muted">
                Telemetry intelligence brief
              </p>
              <NewsletterForm className="mt-3" />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-mono text-xs uppercase tracking-widecaps text-muted">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-body transition-colors hover:text-secondary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-secondary">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={siteConfig.social.linkedin} aria-label="Bloo on LinkedIn" className="text-muted transition-colors hover:text-secondary" rel="noopener noreferrer" target="_blank">
              <Linkedin size={18} />
            </a>
            <a href={siteConfig.social.x} aria-label="Bloo on X" className="text-muted transition-colors hover:text-secondary" rel="noopener noreferrer" target="_blank">
              <XMark size={17} />
            </a>
            <a href={siteConfig.social.github} aria-label="Bloo on GitHub" className="text-muted transition-colors hover:text-secondary" rel="noopener noreferrer" target="_blank">
              <Github size={18} />
            </a>
            <a href={siteConfig.social.youtube} aria-label="Bloo on YouTube" className="text-muted transition-colors hover:text-secondary" rel="noopener noreferrer" target="_blank">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
