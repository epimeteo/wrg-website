// Approved photography by page. Sources live in src/assets/ and come from the
// image bank of WRG's previous site (see docs/fotos-sitio.md). Slots without an
// approved image are `null`; templates keep the PhotoSlot placeholder for them.
import type { ImageMetadata } from 'astro';

import iconBay from '../assets/home/icon-bay.jpg';
import gables from '../assets/home/gables-waterway-towers.jpg';
import stLouis from '../assets/home/st-louis-condominium.jpg';
import southPoint from '../assets/home/south-point-condominium.jpg';
import waterDrying from '../assets/services/water-drying-equipment.jpg';
import ppeCrew from '../assets/services/environmental-ppe-crew.jpg';
import drywall from '../assets/services/reconstruction-drywall-finishing.jpg';
import fireRoom from '../assets/services/fire-soot-damaged-room.jpg';
import spAffected from '../assets/projects/south-point-affected-drywall.jpg';
import spContainment from '../assets/projects/south-point-containment.jpg';
import spExterior from '../assets/projects/south-point-exterior.jpg';
import slAffected from '../assets/projects/st-louis-affected-trim.jpg';
import slHallway from '../assets/projects/st-louis-hallway-removal.jpg';
import gablesEntrance from '../assets/projects/gables-entrance.jpg';
import iconBayExterior from '../assets/projects/icon-bay-exterior.jpg';
import inspection from '../assets/about/wrg-technician-inspection.jpg';
import miamiDowntown from '../assets/locations/miami-downtown.jpg';
import hallwayDrying from '../assets/blog/condo-hallway-drying.jpg';
import moldContainment from '../assets/services/mold-containment.jpg';
import slExterior from '../assets/projects/st-louis-exterior.jpg';
import slRepaired from '../assets/projects/st-louis-repaired-ceiling.jpg';
import profile1 from '../assets/about/profile-1.jpg';
import profile2 from '../assets/about/profile-2.jpg';
// Provisional gallery images: similar situations, not the project site.
import pvWaterHallway from '../assets/projects/provisional/water-in-hallway.jpg';
import pvHallwayDrying from '../assets/projects/provisional/hallway-drying-equipment.jpg';
import pvDrywall from '../assets/projects/provisional/drywall-installation.jpg';
import pvDryingRoom from '../assets/projects/provisional/drying-opened-room.jpg';
import pvCrewVan from '../assets/projects/provisional/wrg-crew-van-high-rise.jpg';
import pvHallwayTech from '../assets/projects/provisional/technician-hallway-treatment.jpg';
import pvContainmentTech from '../assets/projects/provisional/technician-inside-containment.jpg';
import pvVacuum from '../assets/projects/provisional/cleanup-vacuum.jpg';

export type Img = {
  src: ImageMetadata;
  alt: string;
  /** object-position, used as the focal point at every breakpoint */
  pos?: string;
  /** largest generated width; keep it at or below the source width */
  max?: number;
  /** Stand-in from a similar situation, not the project site. Shown with a
      "Representative image" tag until WRG shares the project's own photo. */
  provisional?: boolean;
};

const pv = (src: ImageMetadata, alt: string, pos: string, max: number): Img => ({ src, alt, pos, max, provisional: true });

/** Main image of each case study: home, projects index, case hero, About, related cards. */
export const projectMain: Record<string, Img & { band: string; card: string; square: string }> = {
  'icon-bay': {
    src: iconBay,
    alt: 'The Icon Bay condominium tower in Edgewater, Miami, seen from its entrance drive.',
    max: 1707,
    band: '50% 92%',
    card: '50% 88%',
    square: '50% 80%',
  },
  'gables-waterway-towers': {
    src: gables,
    alt: 'Gables Waterway Towers in Coral Gables, with its entrance sign and landscaped front lawn.',
    max: 2048,
    band: '50% 80%',
    card: '45% 60%',
    square: '45% 50%',
  },
  'st-louis-condominium': {
    src: stLouis,
    alt: 'The St. Louis Condominium tower on Brickell Key, Miami, against a clear sky.',
    max: 1500,
    band: '30% 30%',
    card: '23% 40%',
    square: '23% 50%',
  },
  'south-point-condominium': {
    src: southPoint,
    alt: 'The South Point Condominium towers in Fort Lauderdale, framed by palm trees.',
    max: 2400,
    band: '70% 50%',
    card: '72% 50%',
    square: '75% 50%',
  },
};

/** Case-study gallery, in the order of the gallery captions:
    affected area · equipment or process · repaired area · building context · team at work.
    Entries built with pv() are provisional stand-ins (see docs/fotos-sitio.md). */
export const projectGallery: Record<string, (Img | null)[]> = {
  'icon-bay': [
    pv(pvWaterHallway, 'Standing water along the floor of a residential building hallway.', '50% 60%', 1080),
    pv(pvHallwayDrying, 'Dehumidifiers and air movers lined along a carpeted condominium hallway.', '50% 55%', 1080),
    pv(pvDrywall, 'A gloved hand fastening a new drywall panel with a screw gun.', '40% 50%', 1600),
    { src: iconBayExterior, alt: 'Icon Bay seen from the water at dusk, with its lit pool deck and palm-lined waterfront.', pos: '50% 60%', max: 1920 },
    pv(pvCrewVan, 'A WRG van parked at a high-rise entrance while the crew unloads equipment.', '50% 62%', 1080),
  ],
  'gables-waterway-towers': [
    pv(fireRoom, 'A soot-darkened bedroom after a fire, with part of the ceiling opened.', '50% 45%', 1600),
    pv(pvDryingRoom, 'An air mover and a dehumidifier drying a room opened down to its wood framing.', '50% 60%', 1080),
    pv(drywall, 'A hand applying joint compound to a ceiling repair with a putty knife.', '55% 50%', 1600),
    { src: gablesEntrance, alt: 'The covered entrance of Gables Waterway Towers behind a bed of red and white flowers.', pos: '50% 55%', max: 1536 },
    pv(pvVacuum, 'A worker in boots vacuuming a floor with an industrial wet-dry vacuum.', '50% 60%', 1600),
  ],
  'st-louis-condominium': [
    { src: slAffected, alt: 'Dark mold growth along the top of a baseboard and wall in a St. Louis Condominium unit.', pos: '50% 50%', max: 655 },
    { src: slHallway, alt: 'A St. Louis Condominium hallway with baseboards and flooring removed during remediation.', pos: '50% 50%', max: 655 },
    { src: slRepaired, alt: 'A clean, repainted wall and ceiling corner in a St. Louis Condominium unit.', pos: '50% 50%', max: 655 },
    { src: slExterior, alt: 'The St. Louis Condominium tower on Brickell Key seen from below against a blue sky.', pos: '50% 45%', max: 1310 },
    pv(pvHallwayTech, 'A technician in a protective suit applying a treatment along a building hallway.', '50% 40%', 1080),
  ],
  'south-point-condominium': [
    { src: spAffected, alt: 'Pieces of removed drywall with mold growth on a protected floor at South Point Condominium.', pos: '50% 50%', max: 655 },
    { src: spContainment, alt: 'Plastic containment and an air scrubber set up inside a South Point Condominium unit.', pos: '50% 50%', max: 655 },
    pv(pvDrywall, 'A gloved hand fastening a new drywall panel with a screw gun.', '40% 50%', 1600),
    { src: spExterior, alt: 'View from a South Point Condominium balcony toward the building and the beach in Fort Lauderdale.', pos: '50% 50%', max: 655 },
    pv(pvContainmentTech, 'A technician in a protective suit and respirator working on a ceiling inside a plastic containment.', '50% 30%', 1080),
  ],
};

/** Hero band of each service page. Illustrative images, not attributed to WRG jobs. */
export const serviceBand: Record<string, Img | null> = {
  'water-damage-restoration': { src: waterDrying, alt: 'An air mover and a dehumidifier drying an affected room.', pos: '55% 60%', max: 1920 },
  'fire-damage-restoration': { src: fireRoom, alt: 'A soot-darkened bedroom after a fire, with part of the ceiling opened during the removal of damaged materials.', pos: '50% 45%', max: 1600 },
  // WRG photo, 1080 px source enlarged 2x with Lanczos + light sharpening.
  'mold-remediation': { src: moldContainment, alt: 'A plastic containment barrier held by spring poles, with taped viewing panels, set up inside a building.', pos: '50% 60%', max: 2160 },
  'environmental-cleanup': { src: ppeCrew, alt: 'Two technicians in protective suits and gloves spraying a treatment inside a building.', pos: '60% 40%', max: 1920 },
  reconstruction: { src: drywall, alt: 'A hand applying joint compound to a ceiling repair with a putty knife.', pos: '55% 50%', max: 2400 },
};

export const aboutHero: Img = {
  src: inspection,
  alt: 'A WRG technician in a company T-shirt photographs a ceiling area with his phone during an inspection.',
  pos: '50% 35%',
  max: 1080,
};

/** About · Our Experts. Portraits approved for publication; names, roles and
    credentials are still pending, so none are shown. */
export const experts: Img[] = [
  { src: profile1, alt: 'Portrait of a member of the WRG team in a blue blazer and white shirt.', pos: '50% 30%', max: 800 },
  { src: profile2, alt: 'Portrait of a member of the WRG team in a black blazer and blue top.', pos: '50% 30%', max: 800 },
];

export const miamiContext: Img = {
  src: miamiDowntown,
  alt: 'Downtown Miami towers and condominiums along Biscayne Bay, seen from above.',
  pos: '62% 50%',
  max: 1920,
};

export const blogFeatured: Img = {
  src: hallwayDrying,
  alt: 'Air movers lined along a condominium hallway during drying work.',
  pos: '50% 50%',
  max: 1080,
};

/** Project slug from a /projects/{slug}/ link. */
export const projectSlugFromHref = (href: string) => href.match(/\/projects\/([^/]+)\//)?.[1];
