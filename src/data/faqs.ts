// /faqs/ — answers already used across the site. No new claims: every answer
// restates information published on a service, location or process page.
import { company } from './site';

export type FaqGroup = { id: string; title: string; items: { q: string; a: string }[] };

export const faqGroups: FaqGroup[] = [
  {
    id: 'calling',
    title: 'Before you call',
    items: [
      { q: 'What should I have ready when I call?', a: 'Share the property address, the type of damage you have observed and the best contact for access. Let the team know about any access restrictions.' },
      { q: 'Which number should I call?', a: `Call WRG’s 24/7 phone team at ${company.phone.display}, also listed as ${company.phone.vanity}. The same line serves every office.` },
      { q: 'Do I need to know which service I need?', a: 'No. Describe what you have observed and the team can help identify the starting point.' },
    ],
  },
  {
    id: 'process',
    title: 'The restoration process',
    items: [
      { q: 'Does drying mean the entire restoration is complete?', a: 'Not always. Drying and repairs are different stages. The assessment helps establish what work is needed after moisture conditions have been addressed.' },
      { q: 'Can a fire restoration project also involve water damage?', a: 'Yes. Water used during firefighting may require assessment and drying as part of the overall restoration scope.' },
      { q: 'Why does the moisture issue matter in a mold concern?', a: 'The remediation conversation should include the moisture conditions associated with the affected area, not only the visible material.' },
      { q: 'Is reconstruction included in every restoration project?', a: 'Not necessarily. The need for repairs and their scope depend on the damage and the work agreed for the property.' },
      { q: 'Can WRG help with damage affecting multiple condominium units?', a: 'Call the team to discuss the affected units, common areas and building access. The scope of work depends on the property assessment and coordination with the appropriate contacts.' },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance and documentation',
    items: [
      { q: 'What restoration information can WRG explain?', a: 'WRG can explain the restoration information associated with its work: the property assessment, the scope of work defined for the property and the project documentation connected to the work performed.' },
      { q: 'Who decides questions about my policy or claim?', a: 'For decisions about your policy or claim, speak directly with your insurer or the appropriate licensed professional.' },
    ],
  },
  {
    id: 'offices',
    title: 'Offices and coverage',
    items: [
      { q: 'Where are WRG’s offices?', a: 'Miami, FL (corporate headquarters, 555 NW 95th St, Miami, FL 33150); West Palm Beach, FL (1705 Donna Road, Unit #10, West Palm Beach, FL 33409); and Smyrna, GA (5028 S Atlanta Rd SE, Smyrna, GA 30080).' },
      { q: 'How do I know if my area is covered?', a: `Call ${company.phone.display} with the property address. The team will confirm service for your location.` },
      { q: 'Does 24/7 mean the offices are open around the clock?', a: '24/7 availability refers to phone support. Office visits are not implied.' },
    ],
  },
];
