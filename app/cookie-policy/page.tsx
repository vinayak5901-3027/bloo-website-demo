import { LegalPage } from '@/components/templates/LegalPage';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Cookie Policy | Bloo',
  description: 'What cookies Bloo uses, why, and how to manage your preferences  -  essential, analytics and marketing categories explained.',
  path: '/cookie-policy',
});

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookie-policy"
      description="What cookies Bloo uses and how to manage them."
      lastUpdated="1 June 2026"
    >
      <p>
        This Cookie Policy explains how {siteConfig.legalName} uses cookies and similar technologies
        on {siteConfig.url}. It should be read alongside our <a href="/privacy-policy">Privacy
        Policy</a>.
      </p>

      <h2>What cookies are</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They let a site
        remember your actions and preferences and help operators understand how the site is used.
      </p>

      <h2>Categories we use</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Consent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Essential</strong></td>
            <td>Enable core functionality such as security, network management and remembering your cookie choices.</td>
            <td>Always on</td>
          </tr>
          <tr>
            <td><strong>Analytics</strong></td>
            <td>Help us understand how visitors use the site so we can improve it, in aggregate and privacy-respecting form.</td>
            <td>Opt-in</td>
          </tr>
          <tr>
            <td><strong>Marketing</strong></td>
            <td>Measure the effectiveness of campaigns and tailor relevant content. Not set unless you consent.</td>
            <td>Opt-in</td>
          </tr>
        </tbody>
      </table>

      <h2>Managing your preferences</h2>
      <p>
        When you first visit, our consent banner lets you <strong>Accept all</strong> or{' '}
        <strong>Reject non-essential</strong> cookies. Your choice is stored locally so we can honour
        it on future visits. You can change your decision at any time by clearing the{' '}
        <code>bloo-cookie-consent</code> value in your browser storage, which will re-display the
        banner.
      </p>
      <p>
        You can also control cookies through your browser settings, including blocking or deleting
        them. Disabling essential cookies may affect how the site functions. Where you have enabled a
        Global Privacy Control signal, we treat it as a valid opt-out of non-essential cookies.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update this policy and will revise the “last updated” date above. Questions can be
        sent to{' '}
        <a href={`mailto:${siteConfig.contact.salesEmail}`}>{siteConfig.contact.salesEmail}</a>.
      </p>
    </LegalPage>
  );
}
