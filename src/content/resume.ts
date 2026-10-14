// Resume content, transcribed from mayuri_pm_resume_ats.pdf.
// IntelXLabs is now NexTech; SpindL sits under it as Product Engineer I
// (per Mayuri, 2026-10-14).
// The phone number is left out on purpose: this site is public.

export type Logo = { src: string; alt: string; width: number; height: number };

export type Entry = {
  org: string;
  /** Product name; the logo shows it visually. */
  product: string;
  /** Product logo shown at the top of the card. */
  logo: Logo;
  /** Brand colour for the card's tape, edge, company chip and tags. */
  accent: string;
  /** One line on what the product is. */
  tagline: string;
  role: string;
  location: string;
  dates: string;
  /** Two or three scannable highlights. */
  highlights: string[];
  tags: string[];
};

export const resume = {
  name: 'Mayuri K',
  location: 'Bangalore, India',
  email: 'mayuriok09@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mayuri-k-a53628261' },
    { label: 'GitHub', href: 'https://github.com/mayooooori' },
  ],

  // Short, scannable cards; the full detail lives on the separate detailed
  // resume page Mayuri is making.
  experience: [
    {
      org: 'NexTech',
      product: 'Astralink',
      logo: { src: '/logos/astralink.svg', alt: 'Astralink', width: 554, height: 191 },
      accent: '#2563eb',
      tagline: 'Stops sensitive company data from reaching ChatGPT and other AI tools.',
      role: 'Product Engineer I',
      location: 'Bangalore, India',
      dates: 'Jun 2026 – Present',
      highlights: [
        'Led the Windows launch, from scope to install, updates and recovery',
        'Built the enterprise rollout kit for Intune, Jamf, Kandji and Hexnode',
        'Tested two detection engines and recommended against shipping one',
      ],
      tags: ['AI security', 'endpoint', 'enterprise rollout'],
    },
    {
      org: 'NexTech',
      product: 'SpindL',
      logo: { src: '/logos/spindl.svg', alt: 'SpindL', width: 89, height: 32 },
      accent: '#8a5a14',
      tagline: 'Private-markets investment platform, taken from research to a working proof of concept.',
      role: 'Product Engineer I',
      location: 'Bangalore, India',
      dates: 'Mar 2026 – May 2026',
      highlights: [
        'Turned 14 personas into journeys, wireframes and a prioritised backlog',
        'Designed explainable deal matching instead of a black-box LLM',
        'Planned three milestones and cut billing and e-signatures to stay focused',
      ],
      tags: ['fintech', '0-to-1', 'discovery'],
    },
  ] satisfies Entry[],

  skills: [
    {
      label: 'Product',
      text: '0-to-1 product development, discovery and problem framing, user research, personas and JTBD, user journeys, PRDs, UX and wireframing, MVP scoping, prioritization, roadmapping, product analytics and metrics, activation and retention, product launches, adoption and rollout, competitive research, GTM, program management, stakeholder management',
    },
    {
      label: 'Technical',
      text: 'SQL, PostgreSQL, data modeling, TypeScript, React, Next.js, Python, Supabase, APIs, web and iOS development, AI and LLM product concepts',
    },
  ],
};
