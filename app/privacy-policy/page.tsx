import { LegalPage } from '@/components/templates/LegalPage';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Bloo',
  description: 'How Bloo Systems, Inc. collects, uses, protects and shares personal data, and the rights available to you under GDPR, CCPA/CPRA and DPDPA.',
  path: '/privacy-policy',
});

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      description="How Bloo collects, uses and protects personal data."
      lastUpdated="1 June 2026"
    >
      <p>
        This Privacy Policy explains how {siteConfig.legalName} (“Bloo”, “we”, “us”) collects, uses,
        discloses and safeguards personal data when you visit {siteConfig.url}, request a demo, or
        otherwise interact with us. It is written to align with the EU/UK General Data Protection
        Regulation (GDPR), the California Consumer Privacy Act as amended (CCPA/CPRA), and India’s
        Digital Personal Data Protection Act (DPDPA).
      </p>
      <p>
        This is a demonstration website. The policy below reflects the practices a production Bloo
        deployment would follow and should be reviewed by legal counsel before going live.
      </p>

      <h2>Data we collect</h2>
      <ul>
        <li><strong>Information you provide</strong>  -  name, work email, company, role and message when you complete a form (for example, a demo request or contact form).</li>
        <li><strong>Usage data</strong>  -  pages visited, referring URLs and approximate location, collected through privacy-respecting analytics where you have consented.</li>
        <li><strong>Device data</strong>  -  browser type, operating system and IP address, used for security and to operate the site.</li>
      </ul>
      <p>
        Bloo the product runs inside your own cloud or bare metal. Telemetry processed by the
        platform is your data and is not transmitted to Bloo through this website.
      </p>

      <h2>How we use data</h2>
      <ul>
        <li>To respond to your enquiries and provide requested demos or materials.</li>
        <li>To operate, secure and improve this website.</li>
        <li>To send communications you have requested, which you can opt out of at any time.</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>
      <p>
        Our legal bases under GDPR are consent, the performance of a contract, our legitimate
        interests in running our business, and compliance with legal obligations.
      </p>

      <h2>Cookies and tracking</h2>
      <p>
        We use essential cookies to run the site and, with your consent, analytics cookies to
        understand usage. You can manage your choices through the cookie banner and our{' '}
        <a href="/cookie-policy">Cookie Policy</a>. We honour Global Privacy Control signals where
        required.
      </p>

      <h2>Sharing and disclosure</h2>
      <p>
        We do not sell personal data. We share data only with vetted service providers (for example,
        hosting and analytics) under contract, with your direction, or where required by law.
        International transfers are protected by appropriate safeguards such as Standard Contractual
        Clauses.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, delete, port, or
        restrict the processing of your personal data, to object to processing, and to withdraw
        consent. California residents may exercise rights to know, delete, correct and opt out of
        sale or sharing. Indian residents may exercise rights under the DPDPA, including grievance
        redressal.
      </p>
      <p>
        To exercise any right, contact us at{' '}
        <a href={`mailto:${siteConfig.contact.salesEmail}`}>{siteConfig.contact.salesEmail}</a>. We
        respond within the timeframes required by applicable law and will not discriminate against
        you for exercising your rights.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We retain personal data only as long as necessary for the purposes described or as required
        by law, then delete or anonymize it. We apply administrative, technical and organizational
        safeguards  -  including encryption in transit, access controls and least-privilege  -  to
        protect personal data.
      </p>

      <h2>Children</h2>
      <p>This site is intended for business users and is not directed to children under 16.</p>

      <h2>Changes and contact</h2>
      <p>
        We may update this policy and will revise the “last updated” date above. Questions or
        requests can be sent to{' '}
        <a href={`mailto:${siteConfig.contact.salesEmail}`}>{siteConfig.contact.salesEmail}</a> or to{' '}
        {siteConfig.legalName}, {siteConfig.contact.addressLine}.
      </p>
    </LegalPage>
  );
}
