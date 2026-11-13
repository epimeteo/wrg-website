// Editorial insights written for the new site: /blog/{category}/{slug}/.
// Articles migrated from the previous site live in src/content/blog/ and are
// merged with these in src/data/insights.ts.
// Editorial drafts written for the new site while the articles of the previous
// site are migrated. They use general, publicly documented guidance (sources
// listed per article) and still need WRG's professional review: no author,
// reviewer or date is shown until they are confirmed.

import type { ImageMetadata } from 'astro';
import imgTimeline from '../assets/blog/condo-hallway-drying.jpg';
import imgMoldHumid from '../assets/blog/posts/mold-prevention-in-humid-climates.jpg';
import imgFireProcess from '../assets/blog/posts/fire-damage-restoration-process.jpg';
import imgEnvironmental from '../assets/blog/posts/what-is-environmental-cleanup.jpg';

export type Section = { id: string; h: string; p: string[]; list?: string[] };

export type Article = {
  category: string;
  categoryLabel: string;
  /** Topic pages the article is listed under; the first one is the URL category. */
  tags: string[];
  slug: string;
  title: string;
  short: string;
  description: string;
  summary: string;
  answer: string;
  image?: { src: ImageMetadata; alt: string };
  /** Key points shown before the body. */
  points: string[];
  sections: Section[];
  cta: string;
  service: string;
  serviceHref: string;
  /** Related case study, when one exists. */
  project?: { name: string; href: string };
  /** Public references behind the general guidance. */
  refs: { label: string; href?: string }[];
  /** Article of the previous site that covered the topic, if any. */
  source?: string;
};

type Raw = { h: string; p: string[]; list?: string[] };
const sec = (arr: Raw[]): Section[] => arr.map((s, i) => ({ id: `s${i + 1}`, ...s }));

const EPA_GUIDE = { label: 'U.S. EPA, “A Brief Guide to Mold, Moisture and Your Home”', href: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home' };
const S500 = { label: 'ANSI/IICRC S500, Standard for Professional Water Damage Restoration' };
const S520 = { label: 'ANSI/IICRC S520, Standard for Professional Mold Remediation' };

export const articles: Article[] = [
  {
    category: 'humidity',
    categoryLabel: 'Water damage',
    tags: ['humidity', 'water-damage', 'flood-damage', 'mold-damage'],
    slug: 'how-long-does-water-damage-restoration-take',
    image: { src: imgTimeline, alt: 'Air movers lined along a condominium hallway during drying work.' },
    title: 'How Long Does Water Damage Restoration Take?',
    short: 'Water damage timeline',
    description: 'Water damage restoration happens in stages: emergency mitigation, structural drying and repairs. Here is what shapes the timeline of each one.',
    summary: 'Restoration happens in stages: mitigation, drying and repairs. Each one has its own clock, and knowing what drives it makes the timeline easier to plan around.',
    answer: 'There is no single number. Mitigation starts within hours, structural drying is usually measured in days, and repairs can take from days to weeks depending on the materials removed. The category of water, the materials affected and how quickly drying begins change the answer for every property.',
    points: [
      'Mitigation, drying and repairs are separate stages with separate timelines.',
      'The EPA advises drying wet materials within 24 to 48 hours to help prevent mold growth.',
      'Drying ends when moisture readings say so, not when surfaces feel dry.',
      'Ask which stage an estimate covers before comparing timelines.',
    ],
    sections: sec([
      {
        h: 'Three stages, three clocks',
        p: [
          'When people ask how long restoration takes, they are usually asking about three different things at once. Treating them separately is the simplest way to get a realistic answer.',
        ],
        list: [
          'Mitigation: stopping the source, extracting standing water and protecting unaffected areas. This is the urgent part and it starts right away.',
          'Structural drying: air movers and dehumidifiers bring wet materials back to a dry standard while moisture readings are tracked.',
          'Repairs: replacing whatever could not be saved, such as drywall, baseboards, flooring or cabinetry, and finishing the space.',
        ],
      },
      {
        h: 'Why the first 48 hours matter',
        p: [
          'Water keeps moving after the leak stops. It wicks up drywall, travels under flooring and settles into wall cavities. The longer materials stay wet, the more of them need to be removed instead of dried.',
          'Time also matters because of mold. The U.S. Environmental Protection Agency advises drying water-damaged areas and items within 24 to 48 hours to help prevent mold growth. A fast start does not just shorten the job: it can change what kind of job it is.',
        ],
      },
      {
        h: 'What makes drying shorter or longer',
        p: [
          'Two properties with the same leak can dry on very different schedules. These are the factors a restoration team looks at when estimating the drying stage.',
        ],
        list: [
          'The category of water. The industry standard for water damage restoration, ANSI/IICRC S500, distinguishes clean water from contaminated water. Contaminated water means more materials are removed rather than dried.',
          'The materials involved. Carpet and drywall release moisture faster than hardwood, plaster or concrete.',
          'How far the water traveled. In multi-story buildings, water from one unit often reaches the units below and the common areas.',
          'Climate and airflow. In humid climates, dehumidification has to work against the outdoor air as well as the wet materials.',
          'Access. Occupied units, building rules and working hours affect how equipment can be placed and monitored.',
        ],
      },
      {
        h: 'How a team knows the structure is dry',
        p: [
          'A surface that feels dry can still hold moisture underneath. That is why professional drying is documented with moisture meters and readings taken throughout the job, comparing affected materials against unaffected ones in the same building.',
          'Equipment comes out when the readings reach the drying goal. Removing it early to save a day risks hidden moisture, odors and mold later. Ask to see the readings: they are the clearest evidence of progress you can get.',
        ],
      },
      {
        h: 'Repairs run on a different schedule',
        p: [
          'Once the structure is dry, the repair stage begins. Its length depends less on water and more on construction: how much material was removed, whether finishes need to be matched, permit requirements, and material lead times.',
          'If an insurance claim is involved, the approval of the repair scope can also add time. Clear documentation of the damage and of the drying work helps that conversation move along.',
        ],
      },
      {
        h: 'Questions that get you a real timeline',
        p: ['A project-specific explanation is worth more than a universal promise. These questions help you get one.'],
        list: [
          'Which stage does this estimate cover: mitigation, drying, repairs or all three?',
          'How will drying be monitored, and how often will readings be taken?',
          'Which materials do you expect to remove, and which can be dried in place?',
          'What could change the timeline once walls or floors are opened?',
          'Who is my point of contact, and how will I get updates?',
        ],
      },
    ]),
    cta: 'Discuss water damage restoration with WRG.',
    service: 'Water Damage Restoration',
    serviceHref: '/services/water-damage-restoration/',
    project: { name: 'Icon Bay', href: '/projects/icon-bay/' },
    refs: [EPA_GUIDE, S500],
    source: 'https://wrg-atlanta.com/blog/flood-damage/how-long-does-water-damage-restoration-take/',
  },
  {
    category: 'mold-damage',
    categoryLabel: 'Mold damage',
    tags: ['mold-damage', 'humidity'],
    slug: 'mold-prevention-in-humid-climates',
    image: { src: imgMoldHumid, alt: 'Dark mold and moisture stains spreading across a floor along the base of a wall.' },
    title: 'Mold Prevention in Humid Climates',
    short: 'Mold prevention',
    description: 'In humid climates, preventing mold is mostly moisture control: indoor humidity, air conditioning, leaks and knowing when a concern needs a professional assessment.',
    summary: 'In humid climates, preventing mold is mostly moisture control: keeping indoor humidity in check, fixing leaks early and knowing when a concern needs an assessment.',
    answer: 'Mold needs moisture, so prevention means controlling it. Keep indoor humidity below 60 percent, ideally between 30 and 50 percent, dry any water intrusion within 24 to 48 hours, keep the air conditioning maintained and running, and ask for a professional assessment when a moisture problem or visible growth keeps coming back.',
    points: [
      'Mold spores are everywhere; moisture is the part you can control.',
      'The EPA recommends indoor humidity below 60 percent, ideally 30 to 50 percent.',
      'Air conditioning is a dehumidifier as well as a cooling system.',
      'Recurring growth or a musty odor points to a moisture source that needs to be found.',
    ],
    sections: sec([
      {
        h: 'Why humid climates are different',
        p: [
          'Mold spores are a normal part of indoor and outdoor air. What they need to grow is moisture and something to grow on, and buildings are full of suitable materials: drywall paper, wood, carpet backing, dust.',
          'In places like South Florida or a Georgia summer, the outdoor air carries enough moisture to feed mold without any leak at all. A building that is closed up with the air conditioning off, or cooled unevenly, can develop growth on walls, furniture and inside closets within weeks.',
        ],
      },
      {
        h: 'Keep indoor humidity in range',
        p: [
          'The EPA recommends keeping indoor relative humidity below 60 percent, and ideally between 30 and 50 percent. An inexpensive hygrometer shows where a room stands, and it is worth checking more than one room.',
        ],
        list: [
          'Run the air conditioning consistently in humid months, including in vacant units and seasonal homes.',
          'Avoid setting the thermostat so high during absences that the system rarely runs.',
          'Use exhaust fans that vent outdoors in bathrooms, kitchens and laundry areas.',
          'Add a dehumidifier in spaces that stay damp despite air conditioning.',
        ],
      },
      {
        h: 'Maintain the air conditioning system',
        p: [
          'An air conditioner removes moisture as it cools, and that water has to leave the building. Clogged condensate lines and overflowing drain pans are among the most common sources of hidden water damage in condominiums.',
          'Regular maintenance, clean filters and a clear drain line protect both the unit and the walls and ceilings around it. An oversized system can also be a problem: it cools the air quickly and shuts off before it has removed enough moisture.',
        ],
      },
      {
        h: 'Act on water quickly',
        p: [
          'Leaks, roof and window intrusion during storms, and appliance failures all give mold the moisture it needs. The EPA’s guidance is to dry wet areas and materials within 24 to 48 hours to help prevent growth.',
          'After a storm, check the places water tends to reach unnoticed: around windows and sliding doors, under sinks, behind appliances, and ceilings below roofs, balconies or a neighbor’s unit.',
        ],
      },
      {
        h: 'Watch the places that stay damp',
        p: ['Mold tends to appear first where air does not move. A quick look at these spots every few weeks catches problems early.'],
        list: [
          'Closets on exterior walls and rooms that stay closed',
          'Behind furniture placed tight against walls',
          'Around air conditioning vents and returns',
          'Window sills, door frames and baseboards',
          'Storage rooms, garages and mechanical closets',
        ],
      },
      {
        h: 'When to ask for a professional assessment',
        p: [
          'Small spots on a hard surface are one thing. A professional assessment makes sense when the situation points to moisture you cannot see or to a larger affected area.',
          'Remediation is more than cleaning visible growth. It means finding and correcting the moisture source, containing the work area so spores do not spread, removing materials that cannot be cleaned and verifying the result. Disturbing a large area of growth without containment can make the problem worse.',
        ],
        list: [
          'Growth that returns after cleaning',
          'A persistent musty odor with no visible source',
          'Growth after a leak, flood or air conditioning failure',
          'Staining or growth across several rooms, or inside air conditioning components',
          'Occupants with asthma, allergies or other health concerns',
        ],
      },
    ]),
    cta: 'Talk to WRG about a mold concern.',
    service: 'Mold Remediation',
    serviceHref: '/services/mold-remediation/',
    project: { name: 'St. Louis Condominium', href: '/projects/st-louis-condominium/' },
    refs: [EPA_GUIDE, { label: 'U.S. EPA, “Mold Course Chapter 2: Why and Where Mold Grows”', href: 'https://www.epa.gov/mold/mold-course-chapter-2' }, S520],
    source: 'https://thewaterrestorationgroup.com/blog/mold-damage/mold-prevention-in-humid-climates/',
  },
  {
    category: 'fire-damage',
    categoryLabel: 'Fire damage',
    tags: ['fire-damage', 'smoke-damage'],
    slug: 'fire-damage-restoration-process',
    image: { src: imgFireProcess, alt: 'A house with its roof and attic burned through after a fire, with smoke rising.' },
    title: 'The Fire Damage Restoration Process',
    short: 'Fire damage restoration process',
    description: 'What happens after the fire is out: securing the property, assessing fire, smoke and water damage, cleaning soot, treating odor and rebuilding.',
    summary: 'After the fire is out, the damage keeps developing. Here is how restoration moves from securing the property to cleaning soot, treating odor and rebuilding.',
    answer: 'Fire restoration usually moves through six steps: confirming the property is safe to enter, securing it, assessing fire, smoke and water damage, removing water and debris, cleaning soot and treating odor, and rebuilding. Water from firefighting and soot residues continue to cause damage after the flames are out, so the early steps are time-sensitive.',
    points: [
      'A fire leaves three kinds of damage: fire, smoke and soot, and water.',
      'Do not re-enter until the fire department says it is safe.',
      'Soot is acidic and keeps damaging surfaces until it is removed.',
      'Odor is treated by removing its source, not by covering it.',
    ],
    sections: sec([
      {
        h: 'More than fire damage',
        p: [
          'The burned area is only part of the picture. Smoke carries soot into rooms the flames never reached, into ductwork and behind walls. The water used to put out the fire soaks floors, ceilings and the units below.',
          'That is why fire restoration combines several kinds of work, and why a room far from the fire can still need cleaning, drying or repairs.',
        ],
      },
      {
        h: 'Step 1: Safety and securing the property',
        p: [
          'Re-entry comes first, and it is the fire department’s call. Structural elements, electrical systems and air quality can all be compromised. Once access is allowed, the property is secured: openings are boarded, damaged roofs are covered and utilities are checked.',
          'This is also the moment to notify the insurance carrier and to start documenting. Photos of every affected room, taken before anything is moved, support the claim later.',
        ],
      },
      {
        h: 'Step 2: Assessment and scope',
        p: [
          'The restoration assessment maps what was affected and how: charred materials, smoke and soot residues, water, and contents. It separates what can be cleaned from what has to be removed, and it produces the scope of work that the rest of the project follows.',
          'In a multi-unit building, the assessment extends to neighboring units, hallways and shared systems, since smoke and water rarely stay in the unit of origin.',
        ],
      },
      {
        h: 'Step 3: Water removal and drying',
        p: [
          'Water from sprinklers and fire hoses is treated like any other water loss: extraction first, then structural drying with air movers and dehumidifiers, with moisture readings documented. Left alone, that water leads to swelling, delamination and mold within days.',
        ],
      },
      {
        h: 'Step 4: Soot and smoke cleaning',
        p: [
          'Soot is acidic. On metals, glass, stone and finishes it can etch and discolor permanently if it stays in place, so cleaning is time-sensitive. Different fires leave different residues, and dry soot, oily soot and protein residues each call for their own cleaning method.',
          'Wiping soot with household cleaners often smears it deeper into the surface. Professional cleaning uses dry sponges, specialized cleaning agents and HEPA-filtered vacuums, working from the ceiling down.',
        ],
      },
      {
        h: 'Step 5: Odor treatment',
        p: [
          'Smoke odor comes from residues that have settled into porous materials. The lasting fix is removing or cleaning the source: charred materials, soot films, affected insulation and carpet.',
          'Air scrubbers with activated carbon filters run during the work, and treatments such as thermal fogging or hydroxyl generators may follow where the scope calls for them. Fragrance alone does not solve a smoke odor.',
        ],
      },
      {
        h: 'Step 6: Contents and reconstruction',
        p: [
          'Furniture, textiles, electronics and documents are evaluated item by item: some are cleaned on site, some are packed out for cleaning, and some are documented as non-restorable for the claim.',
          'Reconstruction closes the project, from replacing drywall and flooring to rebuilding rooms that were opened down to the framing. Working with one team for mitigation and repairs keeps the scope and the documentation connected.',
        ],
      },
      {
        h: 'What you can do in the first days',
        p: ['Leave cleaning and demolition to professionals. These steps help without putting you at risk.'],
        list: [
          'Wait for clearance from the fire department before entering.',
          'Contact your insurance carrier and ask what documentation they need.',
          'Photograph the damage before moving or discarding anything.',
          'Keep receipts for lodging and other expenses caused by the fire.',
          'Do not turn on the air conditioning or appliances until they have been checked.',
          'Do not eat or use food, medicine or cosmetics exposed to heat, smoke or soot.',
        ],
      },
    ]),
    cta: 'Explore WRG’s fire and smoke damage restoration service.',
    service: 'Fire & Smoke Damage Restoration',
    serviceHref: '/services/fire-damage-restoration/',
    project: { name: 'Gables Waterway Towers', href: '/projects/gables-waterway-towers/' },
    refs: [
      { label: 'U.S. Fire Administration (FEMA), “After the Fire: Returning to Normal”', href: 'https://www.usfa.fema.gov/prevention/home-fires/after-a-fire/' },
      { label: 'ANSI/IICRC S700, Standard for Professional Fire and Smoke Damage Restoration' },
      S500,
    ],
    source: 'https://wrg-atlanta.com/blog/fire-damage/fire-damage-restoration-process/',
  },
  {
    category: 'environmental-cleanup',
    categoryLabel: 'Environmental cleanup',
    tags: ['environmental-cleanup'],
    slug: 'what-is-environmental-cleanup',
    image: { src: imgEnvironmental, alt: 'A technician in a protective suit and mask spraying a disinfectant between rows of gym treadmills.' },
    title: 'What Is Environmental Cleanup, and When Does a Property Need It?',
    short: 'Environmental cleanup',
    description: 'Environmental cleanup deals with contamination that routine cleaning is not designed for. Learn when it applies, how it differs from janitorial work and what the process involves.',
    summary: 'Some incidents leave contamination that routine cleaning is not designed for. Here is when environmental cleanup applies and what the process involves.',
    answer: 'Environmental cleanup is the professional cleaning, disinfection and disposal work that follows an incident involving biological or hazardous contamination, such as a sewage backup, bodily fluids or a pathogen exposure. A property needs it when the contamination poses a health risk, when porous materials are affected, or when cleaning it safely requires protective equipment, containment and regulated disposal.',
    points: [
      'Cleaning removes dirt; disinfecting kills germs on a surface. Contamination needs both, in that order.',
      'Disinfectants must be EPA-registered and used for their full labeled contact time.',
      'Porous materials that absorbed contamination are usually removed, not cleaned.',
      'Protective equipment, containment and proper disposal are what separate this work from janitorial cleaning.',
    ],
    sections: sec([
      {
        h: 'More than a deep clean',
        p: [
          'Routine cleaning is designed for everyday soil. Environmental cleanup starts from a different question: what is the contaminant, where did it reach, and what does it take to make the space safe to use again?',
          'That changes everything about the work, from who can be in the area to how waste leaves the building. The goal is not only a space that looks clean, but one where the contamination has been removed, the surfaces have been disinfected and the result can be documented.',
        ],
      },
      {
        h: 'Situations that call for it',
        p: ['These are the incidents where property owners and managers most often need more than a janitorial crew.'],
        list: [
          'Sewage backups and overflows, which carry bacteria and viruses into flooring, baseboards and drywall',
          'Blood and other bodily fluids after an accident or medical emergency',
          'A confirmed or suspected infectious disease exposure in a shared space',
          'Unattended deaths and other trauma scenes',
          'Heavy contamination from rodents, birds or hoarding conditions',
          'Floodwater that entered from outside and stayed in the building',
        ],
      },
      {
        h: 'Cleaning, sanitizing and disinfecting are not the same',
        p: [
          'The Centers for Disease Control and Prevention draws a clear line between these terms. Cleaning physically removes dirt and most germs with soap or detergent. Sanitizing reduces germs to levels considered safe. Disinfecting kills the remaining germs on a surface with a chemical product.',
          'The order matters. Disinfectants do not work well on dirty surfaces, so contamination is removed and surfaces are cleaned first. The disinfectant then has to stay wet on the surface for the contact time on its label. Products used for this purpose are registered with the U.S. Environmental Protection Agency, and the label states which organisms they are effective against.',
        ],
      },
      {
        h: 'What the process looks like',
        p: ['The details depend on the incident, but a professional cleanup generally follows the same sequence.'],
        list: [
          'Assessment: identifying the contaminant, the affected areas and the materials involved.',
          'Isolation: restricting access and, where needed, setting up containment so contamination does not spread through foot traffic or air movement.',
          'Protection: technicians work in personal protective equipment suited to the hazard, such as suits, gloves, eye protection and respirators.',
          'Removal: contaminated porous materials like carpet, padding, insulation or drywall are removed and bagged.',
          'Cleaning and disinfection: remaining surfaces are cleaned, then treated with an EPA-registered disinfectant for its labeled contact time.',
          'Disposal: waste is packaged, transported and disposed of according to the regulations that apply to it.',
          'Documentation: the affected areas, the work performed and the products used are recorded.',
        ],
      },
      {
        h: 'Why it should not be a do-it-yourself job',
        p: [
          'The risks are easy to underestimate. Contaminated water and bodily fluids can carry pathogens that enter through small cuts, the eyes or the air. Mixing cleaning chemicals can release toxic gases. Scrubbing or vacuuming contaminated material without containment spreads it to clean areas.',
          'There is also a responsibility side. Employers have obligations to protect workers from exposure to blood and other potentially infectious materials, and some waste cannot go in the regular trash. Assigning this work to maintenance staff without training or equipment creates exposure for them and for the property.',
        ],
      },
      {
        h: 'What to do while you wait for help',
        p: ['A few simple steps limit the spread until a professional team arrives.'],
        list: [
          'Keep people and pets out of the affected area.',
          'If it is safe to do so, stop the source, for example by shutting off water to an overflowing fixture.',
          'Turn off the air conditioning serving the area if contamination could be drawn into it.',
          'Do not try to save soaked porous items by drying them.',
          'Note what happened and when, and take photos from a safe distance for your records and your insurance carrier.',
        ],
      },
    ]),
    cta: 'Talk to WRG about a specialized cleanup.',
    service: 'Environmental Cleanup',
    serviceHref: '/services/environmental-cleanup/',
    refs: [
      { label: 'CDC, “When and How to Clean and Disinfect Your Home”', href: 'https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html' },
      { label: 'U.S. EPA, “Selected EPA-Registered Disinfectants”', href: 'https://www.epa.gov/pesticide-registration/selected-epa-registered-disinfectants' },
      { label: 'OSHA, Bloodborne Pathogens Standard (29 CFR 1910.1030)', href: 'https://www.osha.gov/bloodborne-pathogens' },
    ],
  },
];

export const articleHref = (a: Pick<Article, 'category' | 'slug'>) => `/blog/${a.category}/${a.slug}/`;
