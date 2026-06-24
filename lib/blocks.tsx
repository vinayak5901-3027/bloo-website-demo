/**
 * Maps CMS block types (from pages.json) to the existing Next.js section components.
 * Add new block types here as the CMS grows  -  never change section components for CMS compatibility.
 */

import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { FaqSection } from '@/components/sections/FaqSection';
import { StatsBand, FeatureGrid, WorkflowSteps } from '@/components/sections/Blocks';
import type { CmsBlock } from '@/lib/cms';
import type { Feature, Stat, Step, FaqItem } from '@/data/types';

export function renderBlock(block: CmsBlock) {
  const { type, data } = block;

  switch (type) {
    case 'hero_section': {
      const d = data as {
        eyebrow: string;
        headline: string;
        emphasis?: string;
        sub: string;
        primaryCta?: { label: string; href: string };
        secondaryCta?: { label: string; href: string };
      };
      return (
        <Hero
          key={block.id}
          eyebrow={d.eyebrow}
          headline={d.headline}
          emphasis={d.emphasis}
          sub={d.sub}
          primaryCta={d.primaryCta}
          secondaryCta={d.secondaryCta}
        />
      );
    }

    case 'feature_grid': {
      const d = data as {
        eyebrow: string;
        heading: string;
        intro?: string;
        items: Feature[];
      };
      return (
        <FeatureGrid
          key={block.id}
          eyebrow={d.eyebrow}
          heading={d.heading}
          intro={d.intro}
          items={d.items}
        />
      );
    }

    case 'stats_band': {
      const d = data as {
        eyebrow?: string;
        heading?: string;
        items: Stat[];
      };
      return (
        <StatsBand
          key={block.id}
          eyebrow={d.eyebrow}
          heading={d.heading}
          items={d.items}
        />
      );
    }

    case 'workflow_steps': {
      const d = data as {
        eyebrow: string;
        heading: string;
        intro?: string;
        steps: Step[];
      };
      return (
        <WorkflowSteps
          key={block.id}
          eyebrow={d.eyebrow}
          heading={d.heading}
          intro={d.intro}
          steps={d.steps}
        />
      );
    }

    case 'faq_section': {
      const d = data as {
        eyebrow?: string;
        heading?: string;
        items: FaqItem[];
      };
      return (
        <FaqSection
          key={block.id}
          eyebrow={d.eyebrow}
          heading={d.heading}
          faqs={d.items}
        />
      );
    }

    case 'cta_band': {
      const d = data as {
        headline?: string;
        emphasis?: string;
        sub?: string;
        primaryLabel?: string;
        primaryHref?: string;
        secondaryLabel?: string;
        secondaryHref?: string;
      };
      return (
        <CtaBand
          key={block.id}
          headline={d.headline}
          emphasis={d.emphasis}
          sub={d.sub}
          primaryLabel={d.primaryLabel}
          primaryHref={d.primaryHref}
          secondaryLabel={d.secondaryLabel}
          secondaryHref={d.secondaryHref}
        />
      );
    }

    // trust_strip, two_column, testimonial, contact_section  -  rendered as-is
    // from hardcoded components on specific pages. CMS manages copy; layout stays TypeScript.
    default:
      return null;
  }
}

export function renderBlocks(blocks: CmsBlock[]) {
  return blocks.map(renderBlock);
}
