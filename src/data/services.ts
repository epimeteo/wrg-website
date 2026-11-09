// Service pages: /services/{slug}/ (WRG_Sitemap_Review-3).
// Asbestos Abatement is not in the reviewed sitemap and is not published.

export type Related = { kind: string; title: string; meta: string; href: string; cta: string; photo: boolean };

export type Service = {
  slug: string;
  key: string;
  no: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  short: string;
  intro: string;
  icon: 'water' | 'fire' | 'mold' | 'environmental' | 'reconstruction';
  photoFile: string;
  photo: string;
  whenIntro: string;
  when: string[];
  scope: string[];
  flow: string;
  steps: { t: string; d: string }[];
  res: string;
  com: string;
  faq: { q: string; a: string }[];
  related: Related[];
  reviewNote?: string;
  ctaTitle: string;
};

const ready = {
  q: 'What should I have ready when I call?',
  a: 'Share the property address, the type of damage you have observed and the best contact for access. Let the team know about any access restrictions.',
};

const st = (arr: [string, string][]) => arr.map(([t, d]) => ({ t, d }));

export const services: Service[] = [
  {
    slug: 'water-damage-restoration',
    key: 'water',
    no: '01',
    name: 'Water Damage Restoration',
    h1: 'Water Damage Restoration',
    title: 'Water Damage Restoration',
    description: 'Assessment, water removal, drying and repair planning for properties affected by leaks or water intrusion. Call WRG 24/7 at (844) 379-9283.',
    short: 'Assessment, water removal, drying and repair planning for the affected property.',
    intro: 'A leak or water intrusion can affect more than the surface you can see. WRG’s water damage service brings assessment, water removal, drying and repair planning into a defined scope for the affected property.',
    icon: 'water',
    photoFile: 'Water-Damage-Restoration.jpg',
    photo: 'Drying work in an affected room, approved image pending',
    whenIntro: 'Water moves into materials and spaces that are not always visible. These are common starting points for the conversation.',
    when: ['A supply line, appliance or plumbing leak', 'Water intrusion after a storm', 'Moisture that may extend behind walls, floors or ceilings'],
    scope: ['Assessment of affected areas', 'Water extraction', 'Structural drying and dehumidification', 'Moisture monitoring and documentation', 'Repair planning where needed'],
    flow: 'Assess → Remove water → Monitor drying → Define repairs',
    steps: st([
      ['Assess the damage', 'Review the affected areas and materials to define the scope of work.'],
      ['Remove water', 'Extraction where water is present in the affected spaces.'],
      ['Monitor drying', 'Structural drying and dehumidification, with moisture readings documented.'],
      ['Define repairs', 'Establish the repairs needed once moisture conditions are addressed.'],
    ]),
    res: 'A leak at home can reach rooms, floors and belongings you may not see right away. The conversation starts with the affected spaces and the steps toward repairs.',
    com: 'In a condominium or managed building, water can travel between units and common areas. Access, occupants and communication become part of the scope.',
    faq: [
      { q: 'Does drying mean the entire restoration is complete?', a: 'Not always. Drying and repairs are different stages. The assessment helps establish what work is needed after moisture conditions have been addressed.' },
      ready,
    ],
    related: [
      { kind: 'Case study', title: 'Icon Bay', meta: 'Edgewater, Miami, FL', href: '/projects/icon-bay/', cta: 'Read the case study', photo: true },
      { kind: 'Insight', title: 'How Long Does Water Damage Restoration Take?', meta: 'Water damage', href: '/blog/humidity/how-long-does-water-damage-restoration-take/', cta: 'Read the insight', photo: false },
    ],
    ctaTitle: 'Discuss water damage restoration with WRG.',
  },
  {
    slug: 'fire-damage-restoration',
    key: 'fire',
    no: '02',
    name: 'Fire & Smoke Damage Restoration',
    h1: 'Fire & Smoke Damage Restoration',
    title: 'Fire & Smoke Damage Restoration',
    description: 'Restoration after fire and smoke damage, including residue, odors, affected materials and water used during firefighting. Call WRG 24/7.',
    short: 'Smoke residue, odors, damaged materials and the water used during firefighting.',
    intro: 'Fire recovery may involve smoke residue, odors, damaged materials and water used during firefighting. WRG helps define the restoration work around the conditions found at the property.',
    icon: 'fire',
    photoFile: 'fire-damage-restoration (pending)',
    photo: 'Cleanup after a fire in an interior space, approved image pending',
    whenIntro: 'A fire can leave several kinds of damage in the same property, including areas the flames never reached.',
    when: ['A fire inside a unit, home or business', 'Smoke residue or odor in surrounding areas', 'Water left behind by firefighting'],
    scope: ['Assessment of fire and smoke impact', 'Cleaning of affected surfaces', 'Odor treatment', 'Contents evaluation and cleaning where applicable', 'Repair planning'],
    flow: 'Assess conditions → Define cleanup → Address materials → Plan repairs',
    steps: st([
      ['Assess conditions', 'Review the fire, smoke and water impact across the affected spaces.'],
      ['Define cleanup', 'Establish the cleaning, odor and contents work required.'],
      ['Address affected materials', 'Clean or remove materials according to the defined scope.'],
      ['Plan repairs', 'Connect the restoration work with the repairs that follow.'],
    ]),
    res: 'After a fire at home, decisions about rooms, contents and repairs can arrive at once. A clear scope helps separate them.',
    com: 'In an occupied building, smoke and water can affect units and shared spaces beyond the fire’s origin. Coordination is part of the work.',
    faq: [
      { q: 'Can a fire restoration project also involve water damage?', a: 'Yes. Water used during firefighting may require assessment and drying as part of the overall restoration scope.' },
      ready,
    ],
    related: [
      { kind: 'Case study', title: 'Gables Waterway Towers', meta: 'Coral Gables, FL', href: '/projects/gables-waterway-towers/', cta: 'Read the case study', photo: true },
      { kind: 'Insight', title: 'The Fire Damage Restoration Process', meta: 'Fire damage', href: '/blog/fire-damage/fire-damage-restoration-process/', cta: 'Read the insight', photo: false },
    ],
    ctaTitle: 'Talk to WRG about fire and smoke restoration.',
  },
  {
    slug: 'mold-remediation',
    key: 'mold',
    no: '03',
    name: 'Mold Remediation',
    h1: 'Mold Remediation',
    title: 'Mold Remediation',
    description: 'Mold remediation that addresses affected materials and the moisture conditions involved, with a scope suited to each property. Call WRG 24/7.',
    short: 'A remediation scope for affected materials and the moisture conditions involved.',
    intro: 'Mold concerns require attention to both affected materials and the moisture conditions involved. WRG evaluates the property and develops a remediation scope suited to the situation.',
    icon: 'mold',
    photoFile: 'mold-remediation (pending)',
    photo: 'Containment set up for remediation work, approved image pending',
    whenIntro: 'The conversation should include the moisture conditions behind the concern, not only the visible material.',
    when: ['Visible growth on walls, ceilings or materials', 'A musty odor or a known moisture problem', 'A concern found during repairs or another inspection'],
    scope: ['Assessment of affected areas', 'Defined remediation scope', 'Containment and professional cleaning where appropriate', 'Removal of affected materials when required', 'Coordination of subsequent repairs'],
    flow: 'Evaluate → Establish the scope → Remediate → Coordinate next steps',
    steps: st([
      ['Evaluate the concern', 'Review the affected areas and the moisture conditions associated with them.'],
      ['Establish the scope', 'Define work areas, containment and the materials involved.'],
      ['Perform remediation', 'Professional cleaning and removal of affected materials when required.'],
      ['Coordinate next steps', 'Connect remediation with the repairs and moisture issues that follow.'],
    ]),
    res: 'At home, a mold concern often starts with a question. A defined assessment turns it into a scope you can understand.',
    com: 'In multi-unit buildings, remediation may need to be organized across floors, units and stakeholder groups.',
    faq: [
      { q: 'Why does the moisture issue matter?', a: 'The remediation conversation should include the moisture conditions associated with the affected area, not only the visible material.' },
      ready,
    ],
    related: [
      { kind: 'Case study', title: 'St. Louis Condominium', meta: 'Brickell Key, Miami, FL', href: '/projects/st-louis-condominium/', cta: 'Read the case study', photo: true },
      { kind: 'Insight', title: 'Mold Prevention in Humid Climates', meta: 'Mold damage', href: '/blog/mold-damage/mold-prevention-in-humid-climates/', cta: 'Read the insight', photo: false },
    ],
    ctaTitle: 'Talk to WRG about a mold concern.',
  },
  {
    slug: 'environmental-cleanup',
    key: 'environmental',
    no: '04',
    name: 'Environmental Cleanup',
    h1: 'Environmental Cleanup',
    title: 'Environmental Cleanup',
    description: 'Specialized cleanup when a property incident calls for more than routine cleaning. Talk to WRG about the conditions involved.',
    short: 'Specialized cleanup when an incident calls for more than routine cleaning.',
    intro: 'Some property incidents require specialized cleanup rather than routine cleaning. WRG can discuss the conditions involved and the professional assessment needed to establish an appropriate scope.',
    icon: 'environmental',
    photoFile: 'environmental-cleanup (pending)',
    photo: 'Specialized cleanup crew with protective equipment, approved image pending',
    whenIntro: 'Describe the incident, the affected spaces and any access restrictions. The team can clarify the information needed before an assessment.',
    when: ['An incident that calls for specialized cleanup', 'Affected areas that need more than routine cleaning', 'Materials that may require specific handling or disposal'],
    scope: ['Review of the incident and affected areas', 'Specialized cleanup planning', 'Cleaning and sanitation appropriate to the scope', 'Material handling and disposal where required'],
    flow: 'Understand the incident → Assess → Define cleanup → Review completion',
    steps: st([
      ['Understand the incident', 'Start with what happened and which spaces are affected.'],
      ['Assess the property', 'A professional assessment to establish the conditions involved.'],
      ['Define cleanup', 'Plan cleaning, sanitation and material handling for the scope.'],
      ['Review completion', 'Review the completed work against the defined scope.'],
    ]),
    res: 'At home, an unusual incident can leave you unsure what kind of cleanup is needed. The first call helps clarify it.',
    com: 'For businesses and managed properties, access restrictions and occupancy shape how the cleanup is organized.',
    faq: [
      { q: 'What should I explain during the first call?', a: 'Describe the incident, the affected spaces and any access restrictions. The team can clarify the information needed before an assessment.' },
      ready,
    ],
    related: [],
    reviewNote: 'Earlier claims about agency approvals, pathogen elimination or sanitary guarantees were not carried over. No related case or insight is available yet, so the related module is hidden.',
    ctaTitle: 'Talk to WRG about a specialized cleanup.',
  },
  {
    slug: 'reconstruction',
    key: 'reconstruction',
    no: '05',
    name: 'Reconstruction',
    h1: 'Reconstruction After Property Damage',
    title: 'Reconstruction',
    description: 'Repairs to rooms, finishes and building components once mitigation is addressed, connected to the restoration scope. Call WRG 24/7.',
    short: 'Repairs to rooms, finishes and building components once mitigation is addressed.',
    intro: 'Once mitigation work is addressed, the property may still need repairs. WRG’s reconstruction services help connect the restoration scope with the work required for affected rooms, finishes and building components.',
    icon: 'reconstruction',
    photoFile: 'reconstruction (pending)',
    photo: 'Interior repairs in progress, approved image pending',
    whenIntro: 'Reconstruction follows mitigation. Its scope depends on the damage and the work agreed for the property.',
    when: ['Mitigation is complete and rooms still need repairs', 'Damaged drywall, trim, paint or flooring', 'Finishes and building components affected by the incident'],
    scope: ['Drywall and interior repairs', 'Trim and painting', 'Flooring and finish replacement', 'Other reconstruction work defined in the approved scope'],
    flow: 'Review damage → Define repairs → Coordinate construction → Review work',
    steps: st([
      ['Review remaining damage', 'Look at what mitigation left to repair.'],
      ['Define repairs', 'Agree on the reconstruction scope for rooms and finishes.'],
      ['Coordinate construction', 'Organize the repair work around the property and its occupants.'],
      ['Review completed work', 'Walk through the finished repairs against the scope.'],
    ]),
    res: 'Returning a home to use means repairs to rooms and finishes. Connecting them to the restoration scope keeps decisions clear.',
    com: 'In managed buildings, rebuild work is coordinated with management, associations and residents.',
    faq: [
      { q: 'Is reconstruction included in every restoration project?', a: 'Not necessarily. The need for repairs and their scope depend on the damage and the work agreed for the property.' },
      ready,
    ],
    related: [
      { kind: 'Case study', title: 'Icon Bay', meta: 'Edgewater, Miami, FL', href: '/projects/icon-bay/', cta: 'Read the case study', photo: true },
      { kind: 'Case study', title: 'South Point Condominium', meta: 'Fort Lauderdale, FL', href: '/projects/south-point-condominium/', cta: 'Read the case study', photo: true },
    ],
    ctaTitle: 'Talk to WRG about repairs after damage.',
  },
];

export const serviceHref = (slug: string) => `/services/${slug}/`;
export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
