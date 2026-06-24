import { LegalPage } from '@/components/templates/LegalPage';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Terms of Service | Bloo',
  description: 'The terms that govern your use of the Bloo website and services, including acceptable use, intellectual property and liability.',
  path: '/terms',
});

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      description="Terms governing use of the Bloo website and services."
      lastUpdated="1 June 2026"
    >
      <p>
        These Terms of Service (“Terms”) govern your access to and use of the {siteConfig.url}{' '}
        website and any related content (the “Site”), operated by {siteConfig.legalName} (“Bloo”).
        By accessing the Site you agree to these Terms. This is a demonstration website; commercial
        use of the Bloo platform is governed by a separate written agreement.
      </p>

      <h2>Use of the Site</h2>
      <p>
        You may use the Site for lawful, informational and evaluation purposes. You agree not to
        misuse the Site, including by attempting to gain unauthorized access, interfering with its
        operation, scraping at scale, or using it to violate any law or third-party right.
      </p>

      <h2>Accounts and submissions</h2>
      <p>
        Information you submit (for example, through a demo or contact form) must be accurate and
        your own to share. You grant us permission to use that information to respond to you, as
        described in our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Site and its content  -  including text, design, logos, and the Bloo and Telemetry
        Intelligence marks  -  are owned by Bloo or its licensors and protected by intellectual
        property laws. You may not copy, modify, distribute or create derivative works without our
        prior written consent, except as permitted by these Terms.
      </p>

      <h2>No warranties</h2>
      <p>
        The Site is provided “as is” and “as available” without warranties of any kind, express or
        implied, including merchantability, fitness for a particular purpose and non-infringement.
        Content is provided for general information and does not constitute professional advice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Bloo will not be liable for any indirect,
        incidental, special, consequential or punitive damages, or any loss of profits or data,
        arising from your use of the Site. Nothing in these Terms limits liability that cannot be
        limited under applicable law.
      </p>

      <h2>Third-party links</h2>
      <p>
        The Site may link to third-party websites. We are not responsible for the content or
        practices of those sites, and their inclusion does not imply endorsement.
      </p>

      <h2>Changes and governing law</h2>
      <p>
        We may update these Terms and will revise the “last updated” date above; continued use
        constitutes acceptance. These Terms are governed by the laws of the State of California,
        without regard to conflict-of-laws principles, and disputes are subject to the exclusive
        jurisdiction of the courts located in San Francisco, California.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{' '}
        <a href={`mailto:${siteConfig.contact.salesEmail}`}>{siteConfig.contact.salesEmail}</a>.
      </p>
    </LegalPage>
  );
}
