import { Hero } from '@/components/sections/Hero';
import { ProblemSection, StatsBand, FeatureGrid, WorkflowSteps } from '@/components/sections/Blocks';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { RelatedProducts } from '@/components/sections/Trust';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { SolutionContent } from '@/data/types';

export function SolutionPage({ solution }: { solution: SolutionContent }) {
  const path = `/solutions/${solution.slug}`;
  return (
    <>
      <Breadcrumbs items={[{ name: 'Solutions', path: '/solutions' }, { name: solution.name, path }]} />

      <Hero
        eyebrow={solution.eyebrow}
        headline={solution.hero.headline}
        emphasis={solution.hero.headlineEmphasis}
        sub={solution.hero.sub}
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Talk to an expert', href: '/contact' }}
      />

      <ProblemSection
        eyebrow="THE CHALLENGE"
        heading={solution.problem.heading}
        intro={solution.problem.intro}
        points={solution.problem.points}
      />

      {solution.stats && solution.stats.length > 0 && (
        <StatsBand heading="The measurable difference" items={solution.stats} />
      )}

      <FeatureGrid
        eyebrow={solution.outcomes.eyebrow}
        heading={solution.outcomes.heading}
        items={solution.outcomes.items}
      />

      {solution.steps && (
        <WorkflowSteps
          eyebrow={solution.steps.eyebrow}
          heading={solution.steps.heading}
          steps={solution.steps.steps}
        />
      )}

      <RelatedProducts slugs={solution.products} heading="Products that power this solution" />

      <FaqSection faqs={solution.faqs} heading={`${solution.name}  -  questions, answered`} alt />

      <CtaBand />
    </>
  );
}
