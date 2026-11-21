// Case studies: /projects/{slug}/. Company and Florida policy: never name the
// building. Titles describe the property type and location instead. Summaries come from WRG's published
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
    slug: 'edgewater-bayfront-high-rise',
    name: 'Edgewater Bayfront High-Rise',
    geo: 'Edgewater, Miami, FL',
    type: 'High-rise condominium',
    photo: 'Edgewater tower, main photo',
    summary: 'A water supply line leak affected residences in a 40-story bayfront tower in Edgewater, Miami. WRG arrived on-site within 45 minutes, assessed the affected units, positioned drying equipment and rebuilt the damaged drywall.',
    challenge: 'Water damage extending beyond the unit where the leak originated.',
    challengeDetail: 'A water supply line failed inside one residence, and the leak reached other units in the building.',
    approach: 'Assessment of affected residences, drying work and subsequent drywall repairs.',
    approachDetail: 'WRG arrived on-site within 45 minutes, evaluated each affected unit and placed drying equipment where it was needed. By working directly with the insurance carrier, the building received immediate repairs with no funds needed from the association or its members.',
    work: ['On-site within 45 minutes of the call', 'Removal of 55 linear feet of baseboard in the source unit', '55 ventilation openings made to place dehumidifiers and air movers', 'Rebuild of all drywall affected by the water', 'Direct coordination with the insurance carrier'],
    services: [W, R],
    source: 'WRG’s project account published on its previous site',
    review: 'The source page heads the project “Fire + Smoke” while the narrative describes a water event, and the previous site’s featured list labels it “Water + Storm”; classification to confirm. Arrival time and insurance outcome are shown as published by WRG (claims validated by the client on Nov 12, 2026). Dates and detailed scope pending.',
  },
  {
    slug: 'coral-gables-mid-century-condominium',
    name: 'Coral Gables Mid-Century Condominium',
    geo: 'Coral Gables, FL',
    type: 'Occupied condominium',
    photo: 'Coral Gables condominium, main photo',
    summary: 'A large fire in one unit of a mid-century Coral Gables condominium caused severe fire, smoke and residual water damage. WRG completed mitigation in 30 days, with cleanup, drying, soot removal and documentation of every affected area.',
    challenge: 'Different types of damage across an occupied condominium property.',
    challengeDetail: 'A large fire in one of the units caused severe fire, smoke and residual water damage across the building. The unit where the fire originated had to be completely gutted.',
    approach: 'Coordinated mitigation, drying and cleaning work based on the affected areas.',
    approachDetail: 'WRG mobilized technicians with 320 air movers, 120 dehumidifiers, 35 air scrubbers and 35 generators. After the initial cleanup, equipment was placed to dry the affected areas while a dedicated crew removed soot from every surface. Mitigation was completed in 30 days.',
    work: ['Debris removal and cleanup of affected areas', 'Drying with 320 air movers and 120 dehumidifiers', 'Soot removal from every surface with specialized sponges and cleaning agents', 'Odor control with carbon-filter air scrubbers and removal of carpet on several floors', 'Detailed documentation of each unit for the insurance company'],
    services: [F, W],
    source: 'WRG’s project account published on its previous site',
    review: 'Figures and the 30-day mitigation period are shown as published by WRG (claims validated by the client on Nov 12, 2026). Dates and authorized images of the site pending.',
  },
  {
    slug: 'brickell-key-island-tower',
    name: 'Brickell Key Island Tower',
    geo: 'Brickell Key, Miami, FL',
    type: 'Multi-floor condominium',
    photo: 'Brickell Key tower, main photo',
    summary: 'WRG’s project in a Brickell Key residential tower involved mold remediation across multiple floors. The published scope describes containment, removal of affected materials and professional cleaning.',
    challenge: 'Organizing remediation work across multiple building levels.',
    challengeDetail: 'Mold remediation needed to be carried out on more than one floor of an occupied building.',
    approach: 'Defined work areas and a coordinated remediation scope.',
    approachDetail: 'Work areas were defined so the remediation could move through the building in an organized way.',
    work: ['Containment of work areas', 'Removal of affected materials', 'Professional cleaning'],
    services: [M],
    source: 'WRG’s project account published on its previous site',
    review: 'Summary drawn from WRG’s published account. The detailed scope, dates and authorized images need confirmation.',
  },
  {
    slug: 'fort-lauderdale-beachfront-towers',
    name: 'Fort Lauderdale Beachfront Towers',
    geo: 'Fort Lauderdale, FL',
    type: 'Condominium',
    photo: 'Fort Lauderdale towers, main photo',
    summary: 'Water intrusion and mold concerns led to remediation and reconstruction. WRG’s account emphasizes coordination with management, the association and residents throughout the work.',
    challenge: 'Addressing affected units while keeping multiple stakeholder groups informed.',
    challengeDetail: 'Management, the association and residents each needed to understand the work and its stages.',
    approach: 'Remediation, documented testing coordination and subsequent rebuild work.',
    approachDetail: 'Remediation was followed by rebuild work, with testing coordinated and documented along the way.',
    work: ['Remediation in affected units', 'Coordination of documented testing', 'Rebuild work after remediation', 'Communication with management, the association and residents'],
    services: [M, R],
    source: 'WRG’s project account published on its previous site',
    review: 'Fort Lauderdale is in Broward County. Do not attribute this project to the Miami or West Palm Beach office without confirmation.',
  },
];

export const projectHref = (slug: string) => `/projects/${slug}/`;
