// Insights: /blog/{category}/{slug}/ (WRG_Sitemap_Review-3).
// All three are drafts pending professional and editorial review: no author,
// reviewer or date is shown until they are confirmed.

export type Article = {
  category: string;
  categoryLabel: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  summary: string;
  answer: string;
  sections: { id: string; h: string; p: string }[];
  cta: string;
  service: string;
  serviceHref: string;
  source: string;
};

const sec = (arr: [string, string][]) => arr.map(([h, p], i) => ({ id: `s${i + 1}`, h, p }));

export const articles: Article[] = [
  {
    category: 'humidity',
    categoryLabel: 'Water damage',
    slug: 'how-long-does-water-damage-restoration-take',
    title: 'How Long Does Water Damage Restoration Take?',
    short: 'Water damage timeline',
    description: 'Drying is one stage of water damage restoration. The full timeline also depends on the materials affected and the repairs that follow.',
    summary: 'Drying is one stage of restoration. The full timeline also depends on the materials affected and the repairs that follow.',
    answer: 'There is no universal timeline. It starts with an assessment, and drying and repairs are separate stages whose length depends on the water, the spaces and the materials involved.',
    sections: sec([
      ['Start with the scope', 'A useful timeline begins with an assessment of the property. The amount of water, the spaces affected and the materials involved can change the work required.'],
      ['Separate drying from repairs', 'Water removal and structural drying are not the same as replacing drywall, flooring or other finishes. Ask which stage the current estimate covers and what decisions may affect the next phase.'],
      ['Ask about progress', 'Useful questions include how drying will be monitored, what information will be documented and when the scope will be reviewed. A project-specific explanation is more useful than a universal promise.'],
    ]),
    cta: 'Discuss water damage restoration with WRG.',
    service: 'Water Damage Restoration',
    serviceHref: '/services/water-damage-restoration/',
    source: 'https://wrg-atlanta.com/blog/flood-damage/how-long-does-water-damage-restoration-take/',
  },
  {
    category: 'mold-damage',
    categoryLabel: 'Mold damage',
    slug: 'mold-prevention-in-humid-climates',
    title: 'Mold Prevention in Humid Climates',
    short: 'Mold prevention',
    description: 'In humid climates, preventing mold starts with managing moisture: finding leaks early, keeping air moving and knowing when to ask for an assessment.',
    summary: 'In humid climates, preventing mold starts with managing moisture: finding leaks early, keeping air moving and knowing when a concern needs an assessment.',
    answer: 'Mold prevention is mostly moisture management. Address leaks and water intrusion promptly, keep indoor areas ventilated and dry, and ask for a professional assessment when a moisture problem or visible growth persists.',
    sections: sec([
      ['Treat moisture as the starting point', 'Mold concerns are closely tied to moisture. Leaks, condensation and water that enters during storms deserve attention even when no growth is visible yet.'],
      ['Watch the places that stay damp', 'Areas with limited airflow, such as closets, spaces behind furniture or rooms that stay closed, can hold moisture longer. Keeping air moving and noticing musty odors early helps.'],
      ['Know when to ask for help', 'If a moisture problem keeps returning or growth appears on walls, ceilings or materials, a professional assessment can define the affected areas and the moisture conditions involved before any remediation is planned.'],
    ]),
    cta: 'Talk to WRG about a mold concern.',
    service: 'Mold Remediation',
    serviceHref: '/services/mold-remediation/',
    source: 'https://thewaterrestorationgroup.com/blog/mold-damage/mold-prevention-in-humid-climates/',
  },
  {
    category: 'fire-damage',
    categoryLabel: 'Fire damage',
    slug: 'fire-damage-restoration-process',
    title: 'The Fire Damage Restoration Process',
    short: 'Fire damage restoration process',
    description: 'Fire restoration can involve assessment, cleanup, drying and repairs. Understanding the stages helps clarify the conversation.',
    summary: 'Fire restoration can involve assessment, cleanup, drying and repairs. Understanding the stages helps clarify the conversation.',
    answer: 'After a fire, the work may include assessment, cleanup, odor treatment, water-related work and repairs. Knowing which tasks are included, and who decides what, keeps the process clear.',
    sections: sec([
      ['Understand what was affected', 'A fire can leave several kinds of damage in the same property. The restoration assessment considers the affected spaces, materials and contents.'],
      ['Clarify the work ahead', 'Cleanup, odor treatment, water-related work and repairs may require different activities. Ask the restoration team to explain which tasks are included and how they relate to one another.'],
      ['Keep decisions connected', 'Property access, contents handling and repair choices can involve different people. Establishing a primary contact helps keep the discussion organized as the project moves through its stages.'],
    ]),
    cta: 'Explore WRG’s fire and smoke damage restoration service.',
    service: 'Fire & Smoke Damage Restoration',
    serviceHref: '/services/fire-damage-restoration/',
    source: 'https://wrg-atlanta.com/blog/fire-damage/fire-damage-restoration-process/',
  },
];

export const articleHref = (a: Pick<Article, 'category' | 'slug'>) => `/blog/${a.category}/${a.slug}/`;
