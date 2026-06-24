import { Plus } from 'lucide-react';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/schema';
import type { FaqItem } from '@/data/types';

/**
 * Accordion FAQ using native <details>/<summary> (works without JS) plus
 * FAQPage JSON-LD. Note: for non-gov/health sites the value of FAQ schema is
 * AI-citation, not rich results.
 */
export function FaqSection({
  faqs,
  eyebrow = 'FAQ',
  heading = 'Questions, answered',
  alt = false,
}: {
  faqs: FaqItem[];
  eyebrow?: string;
  heading?: string;
  alt?: boolean;
}) {
  if (!faqs?.length) return null;
  return (
    <Section alt={alt}>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                <span className="text-base font-bold text-bright sm:text-lg">{f.q}</span>
                <Plus
                  size={20}
                  className="shrink-0 text-secondary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-6 text-body leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
