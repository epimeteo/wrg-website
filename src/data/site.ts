// Single source of truth for company facts, routes and navigation.
// Rule: only verified, approved information goes here. Anything pending is
// flagged in docs/pendientes.md and, while review mode is on, on the page.

export const reviewMode = import.meta.env.PUBLIC_REVIEW_MODE !== 'false';

export const company = {
  name: 'The Water Restoration Group',
  short: 'WRG',
  phone: {
    display: '(844) 379-9283',
    href: 'tel:+18443799283',
    vanity: '1 (844) DRY-WATER',
  },
  support: '24/7 Emergency Phone Support',
} as const;

export type Office = {
  key: 'miami' | 'wpb' | 'atlanta';
  name: string;
  short: string;
  role: string;
  street: string;
  cityLine: string;
  full: string;
  href: string;
  maps: string;
  region: 'South Florida' | 'Metro Atlanta';
};

export const offices: Office[] = [
  {
    key: 'miami',
    name: 'Miami, FL',
    short: 'Miami',
    role: 'Corporate headquarters',
    street: '555 NW 95th St',
    cityLine: 'Miami, FL 33150',
    full: '555 NW 95th St, Miami, FL 33150',
    href: '/locations/miami-fl/',
    maps: 'https://www.google.com/maps/search/?api=1&query=555+NW+95th+St+Miami+FL+33150',
    region: 'South Florida',
  },
  {
    key: 'wpb',
    name: 'West Palm Beach, FL',
    short: 'West Palm Beach',
    role: 'Palm Beach County',
    street: '1705 Donna Road, Unit #10',
    cityLine: 'West Palm Beach, FL 33409',
    full: '1705 Donna Road, Unit #10, West Palm Beach, FL 33409',
    href: '/locations/west-palm-beach-fl/',
    maps: 'https://www.google.com/maps/search/?api=1&query=1705+Donna+Road+Unit+10+West+Palm+Beach+FL+33409',
    region: 'South Florida',
  },
  {
    key: 'atlanta',
    name: 'Atlanta / Smyrna, GA',
    short: 'Smyrna',
    role: 'Metro Atlanta',
    street: '5028 S Atlanta Rd SE',
    cityLine: 'Smyrna, GA 30080',
    full: '5028 S Atlanta Rd SE, Smyrna, GA 30080',
    href: '/locations/atlanta-ga/',
    maps: 'https://www.google.com/maps/search/?api=1&query=5028+S+Atlanta+Rd+SE+Smyrna+GA+30080',
    region: 'Metro Atlanta',
  },
];

// Routes follow WRG_Sitemap_Review-3 (docs/sitemap.md).
export const routes = {
  home: '/',
  about: '/about/',
  reviews: '/reviews/',
  careers: '/careers/',
  services: '/services/',
  locations: '/locations/',
  projects: '/projects/',
  blog: '/blog/',
  faqs: '/faqs/',
  contact: '/contact/',
  privacy: '/privacy-policy/',
  terms: '/terms-and-conditions/',
  thankYou: '/thank-you/',
} as const;

export type NavKey = 'home' | 'services' | 'locations' | 'projects' | 'about' | 'blog' | 'faqs' | 'contact' | 'none';
