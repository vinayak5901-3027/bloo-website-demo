import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCta } from '@/components/layout/StickyCta';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

// Self-hosted via next/font/local (offline, no external request, no layout shift).
const lato = localFont({
  src: [
    { path: '../fonts/lato-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/lato-latin-300-italic.woff2', weight: '300', style: 'italic' },
    { path: '../fonts/lato-latin-300-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/lato-latin-300-italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/lato-latin-300-normal.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/lato-latin-300-italic.woff2', weight: '700', style: 'italic' },
    { path: '../fonts/lato-latin-300-normal.woff2', weight: '900', style: 'normal' },
    { path: '../fonts/lato-latin-300-italic.woff2', weight: '900', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-lato',
  fallback: ['system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
});

// JetBrains Mono  -  eyebrows, IDs, footers, queries (per brand spec).
const jetbrainsMono = localFont({
  src: [
    { path: '../fonts/jetbrains-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/jetbrains-mono-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-jbmono',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Telemetry Intelligence for the Enterprise`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/favicon.png' }],
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_US',
    url: siteConfig.url,
  },
  twitter: { card: 'summary_large_image', site: '@bloo' },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F1EA' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1220' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// Runs before paint: applies the saved room (ink/paper) so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('bloo-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${lato.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <CookieConsent />
      </body>
    </html>
  );
}
