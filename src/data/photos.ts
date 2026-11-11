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

export type Img = {
  src: ImageMetadata;
  alt: string;
  /** object-position, used as the focal point at every breakpoint */
  pos?: string;
  /** largest generated width; keep it at or below the source width */
  max?: number;
};

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

/** Case-study gallery, in the order of the gallery captions. */
export const projectGallery: Record<string, (Img | null)[]> = {
  'icon-bay': [null, null, null, { src: iconBayExterior, alt: 'Icon Bay seen from the water at dusk, with its lit pool deck and palm-lined waterfront.', pos: '50% 60%', max: 1920 }, null],
  'gables-waterway-towers': [null, null, null, { src: gablesEntrance, alt: 'The covered entrance of Gables Waterway Towers behind a bed of red and white flowers.', pos: '50% 55%', max: 1536 }, null],
  'st-louis-condominium': [
    { src: slAffected, alt: 'Dark mold growth along the top of a baseboard and wall in a St. Louis Condominium unit.', pos: '50% 50%', max: 655 },
    { src: slHallway, alt: 'A St. Louis Condominium hallway with baseboards and flooring removed during remediation.', pos: '50% 50%', max: 655 },
    null,
    null,
    null,
  ],
  'south-point-condominium': [
    { src: spAffected, alt: 'Pieces of removed drywall with mold growth on a protected floor at South Point Condominium.', pos: '50% 50%', max: 655 },
    { src: spContainment, alt: 'Plastic containment and an air scrubber set up inside a South Point Condominium unit.', pos: '50% 50%', max: 655 },
    null,
    { src: spExterior, alt: 'View from a South Point Condominium balcony toward the building and the beach in Fort Lauderdale.', pos: '50% 50%', max: 655 },
    null,
  ],
};

/** Hero band of each service page. Illustrative images, not attributed to WRG jobs. */
export const serviceBand: Record<string, Img | null> = {
  'water-damage-restoration': { src: waterDrying, alt: 'An air mover and a dehumidifier drying an affected room.', pos: '55% 60%', max: 1920 },
  'fire-damage-restoration': null,
  'mold-remediation': null,
  'environmental-cleanup': { src: ppeCrew, alt: 'Two technicians in protective suits and gloves spraying a treatment inside a building.', pos: '60% 40%', max: 1920 },
  reconstruction: { src: drywall, alt: 'A hand applying joint compound to a ceiling repair with a putty knife.', pos: '55% 50%', max: 2400 },
};

export const aboutHero: Img = {
  src: inspection,
  alt: 'A WRG technician in a company T-shirt photographs a ceiling area with his phone during an inspection.',
  pos: '50% 35%',
  max: 1080,
};

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
