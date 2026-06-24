import { siteConfig } from './site';

/** JSON-LD builders. Each returns a plain object rendered by <JsonLd>. */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    email: siteConfig.contact.salesEmail,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '535 Mission Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteConfig.url}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function webPageSchema(opts: { title: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.title,
    description: opts.description,
    url: `${siteConfig.url}${opts.path === '/' ? '' : opts.path}`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    applicationCategory: opts.category || 'SecurityApplication',
    operatingSystem: 'Cloud, Linux, Kubernetes',
    brand: { '@type': 'Brand', name: siteConfig.name },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: 'Contact sales for enterprise pricing.',
      },
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  author: string;
  authorRole?: string;
  datePublished: string;
  type?: 'BlogPosting' | 'Article';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type || 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}${opts.path}` },
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    image: `${siteConfig.url}/opengraph-image`,
    author: { '@type': 'Person', name: opts.author, jobTitle: opts.authorRole },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}${siteConfig.logo}` },
    },
  };
}

export function jobPostingSchema(opts: {
  title: string;
  description: string;
  path: string;
  employmentType: string;
  location: string;
  remote?: boolean;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: opts.title,
    description: opts.description,
    employmentType: opts.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      sameAs: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo}`,
    },
    jobLocationType: opts.remote ? 'TELECOMMUTE' : undefined,
    applicantLocationRequirements: opts.remote ? { '@type': 'Country', name: 'Worldwide' } : undefined,
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: opts.location },
    },
  };
}

export function personSchema(opts: { name: string; jobTitle: string; bio: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.bio,
    worksFor: { '@id': `${siteConfig.url}/#organization` },
  };
}
