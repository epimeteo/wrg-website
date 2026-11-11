// Case studies: /projects/{slug}/. Summaries come from WRG's published
// project accounts; review notes list what still needs confirmation.

type Svc = { name: string; href: string };
const W: Svc = { name: 'Water Damage Restoration', href: '/services/water-damage-restoration/' };
const F: Svc = { name: 'Fire & Smoke Damage Restoration', href: '/services/fire-damage-restoration/' };
const M: Svc = { name: 'Mold Remediation', href: '/services/mold-remediation/' };
const R: Svc = { name: 'Reconstruction', href: '/services/reconstruction/' };

export type Project = {
  slug: string;
  name: string;
  geo: string;
  type: string;
  photo: string;
  summary: string;
  challenge: string;
  challengeDetail: string;
  approach: string;
  approachDetail: string;
  work: string[];
  services: Svc[];
  source: string;
  review: string;
};

export const projects: Project[] = [
  {
    slug: 'icon-bay',
    name: 'Icon Bay',
    geo: 'Edgewater, Miami, FL',
    type: 'High-rise condominium',
    photo: 'Icon-Bay-Main-scaled.jpg',
    summary: 'A water supply line leak affected residences at Icon Bay in Miami. WRG’s published account describes assessing affected units, positioning drying equipment and repairing damaged drywall.',
    challenge: 'Water damage extending beyond the unit where the leak originated.',
    challengeDetail: 'A water supply line failed inside one residence, and the leak reached other units in the building.',
    approach: 'Assessment of affected residences, drying work and subsequent drywall repairs.',
    approachDetail: 'The account describes assessing each affected unit and placing drying equipment where it was needed.',
    work: ['Removal of 55 linear feet of baseboard in the source unit', 'Openings cut to place dehumidifiers and air movers', 'Rebuild of drywall damaged by the water'],
    services: [W, R],
    source: 'thewaterrestorationgroup.com/projects/icon-bay',
    review: 'The source page heads the project “Fire + Smoke” while the narrative and project list describe a water event; classification to confirm. The arrival time and insurance outcome mentioned in the source are not shown as general promises or results.',
  },
  {
    slug: 'gables-waterway-towers',
    name: 'Gables Waterway Towers',
    geo: 'Coral Gables, FL',
    type: 'Occupied condominium',
    photo: 'Gables-Waterway-Towers-Main',
    summary: 'A fire at Gables Waterway Towers caused fire, smoke and residual water damage. WRG’s account describes cleanup, drying, soot removal and documentation of affected areas.',
    challenge: 'Different types of damage across an occupied condominium property.',
    challengeDetail: 'Fire, smoke and water left behind after the fire affected different areas of the building.',
    approach: 'Coordinated mitigation, drying and cleaning work based on the affected areas.',
    approachDetail: 'The work was organized around the conditions found in each affected area.',
    work: ['Cleanup of affected areas', 'Drying', 'Soot removal', 'Documentation of affected areas'],
    services: [F, W],
    source: 'thewaterrestorationgroup.com/projects/gables-waterway-towers',
    review: 'Summary drawn from WRG’s published account. The detailed scope, dates and authorized images need confirmation.',
  },
  {
    slug: 'st-louis-condominium',
    name: 'St. Louis Condominium',
    geo: 'Brickell Key, Miami, FL',
    type: 'Multi-floor condominium',
    photo: 'St.-Louis-Condominium',
    summary: 'WRG’s St. Louis Condominium project involved mold remediation across multiple floors. The published scope describes containment, removal of affected materials and professional cleaning.',
    challenge: 'Organizing remediation work across multiple building levels.',
    challengeDetail: 'Mold remediation needed to be carried out on more than one floor of an occupied building.',
    approach: 'Defined work areas and a coordinated remediation scope.',
    approachDetail: 'Work areas were defined so the remediation could move through the building in an organized way.',
    work: ['Containment of work areas', 'Removal of affected materials', 'Professional cleaning'],
    services: [M],
    source: 'thewaterrestorationgroup.com/projects/st-louis-condominium',
    review: 'Summary drawn from WRG’s published account. The detailed scope, dates and authorized images need confirmation.',
  },
  {
    slug: 'south-point-condominium',
    name: 'South Point Condominium',
    geo: 'Fort Lauderdale, FL',
    type: 'Condominium',
    photo: 'South-Point-Condominium',
    summary: 'Water intrusion and mold concerns led to remediation and reconstruction at South Point Condominium. WRG’s account emphasizes coordination with management, the association and residents throughout the work.',
    challenge: 'Addressing affected units while keeping multiple stakeholder groups informed.',
    challengeDetail: 'Management, the association and residents each needed to understand the work and its stages.',
    approach: 'Remediation, documented testing coordination and subsequent rebuild work.',
    approachDetail: 'Remediation was followed by rebuild work, with testing coordinated and documented along the way.',
    work: ['Remediation in affected units', 'Coordination of documented testing', 'Rebuild work after remediation', 'Communication with management, the association and residents'],
    services: [M, R],
    source: 'thewaterrestorationgroup.com/projects/south-point-condominium',
    review: 'Fort Lauderdale is in Broward County. Do not attribute this project to the Miami or West Palm Beach office without confirmation.',
  },
];

export const projectHref = (slug: string) => `/projects/${slug}/`;
