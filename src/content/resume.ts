// Resume content, transcribed from mayuri_pm_resume_ats.pdf. Product skills
// trimmed on 2026-10-14 to the ones her work backs up (see the offlyn bullet
// for user research).
// IntelXLabs is now NexTech; SpindL sits under it as Product Engineer I
// (per Mayuri, 2026-10-14).
// The phone number is left out on purpose: this site is public.

export type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** For logos on a white square (the LinkedIn JPEGs): multiply-blend so the
   *  white takes on the paper colour instead of showing as a white tile. */
  blend?: boolean;
};

/** Company logos, from the companies' LinkedIn pages and Wave's site. */
export const logos = {
  nextech: { src: '/logos/nextech.jpg', alt: 'NexTech', width: 200, height: 200, blend: true },
  purview: { src: '/logos/purview.jpg', alt: 'Purview', width: 200, height: 200, blend: true },
  sjce: { src: '/logos/sjce.jpg', alt: "St. Joseph's College of Engineering", width: 200, height: 200, blend: true },
  wave: { src: '/logos/wave.png', alt: 'Wave', width: 180, height: 180, blend: true },
} satisfies Record<string, Logo>;

export type Entry = {
  org: string;
  /** Product name; the logo shows it visually. */
  product: string;
  /** Product logo shown at the top of the card. */
  logo: Logo;
  /** Small company mark shown beside the company chip. */
  orgLogo?: Logo;
  /** Product landing page; makes the product logo a link. */
  productUrl?: string;
  /** Slug of this product's story page (/work/<slug>). */
  story?: string;
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

  // Short, scannable cards for the home page; the full detail is in
  // `detailed` below and on the /resume page.
  experience: [
    {
      org: 'NexTech',
      product: 'Astralink',
      logo: { src: '/logos/astralink.svg', alt: 'Astralink', width: 554, height: 191 },
      orgLogo: logos.nextech,
      productUrl: 'https://www.astralinkconnect.dev/products/ai-protect',
      story: 'astralink',
      accent: '#2563eb',
      tagline: 'Stops sensitive company data from reaching ChatGPT and other AI tools.',
      role: 'Product Engineer I',
      location: 'Bangalore, India',
      dates: 'May 2026 – Present',
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
      orgLogo: logos.nextech,
      story: 'spindl',
      accent: '#8a5a14',
      tagline: 'Private-markets investment platform, taken from research to a working proof of concept.',
      role: 'Junior Frontend Engineer, product lead for SpindL',
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
      text: '0-to-1 product development, discovery and problem framing, user research, personas and JTBD, user journeys, PRDs, UX and wireframing, MVP scoping, prioritization, roadmapping, defining success metrics, product launches, adoption and rollout, competitive research, GTM, stakeholder management',
    },
    {
      label: 'Technical',
      text: 'SQL, PostgreSQL, data modeling, TypeScript, React, Next.js, Python, Supabase, APIs, web and iOS development, AI and LLM product concepts',
    },
  ],
};

// ---------------------------------------------------------------------------
// Detailed resume (the /resume page): the full PDF wording, with the same
// standing changes as above (NexTech, SpindL under NexTech, no phone number).

export type DetailedEntry = {
  org: string;
  /** Product or project name shown as the card title, after the org. */
  product?: string;
  logo?: Logo;
  /** Small company mark shown beside the company chip. */
  orgLogo?: Logo;
  /** Product landing page; makes the product logo a link. */
  productUrl?: string;
  /** Slug of this product's story page (/work/<slug>). */
  story?: string;
  /** Card colour: tape, left edge, company chip and bullet marks. */
  accent: string;
  role: string;
  location?: string;
  dates?: string;
  /** Landing page; makes the company chip a link. */
  url?: string;
  bullets: string[];
};

export const detailed = {
  summary:
    'Product engineer doing the product manager’s job: taking B2B security and fintech products from problem discovery to working software. Helped define and build an endpoint AI data-protection product and led its Windows launch; single-handedly took a private-markets investment platform from research to a working proof of concept. Strong on discovery, requirements, prioritization, and enterprise rollout with engineering, security, and business stakeholders.',

  experience: [
    {
      org: 'NexTech',
      product: 'Astralink, AI Data Protection for Endpoints',
      logo: { src: '/logos/astralink.svg', alt: 'Astralink', width: 554, height: 191 },
      orgLogo: logos.nextech,
      productUrl: 'https://www.astralinkconnect.dev/products/ai-protect',
      story: 'astralink',
      accent: '#2563eb',
      role: 'Product Engineer I',
      location: 'Bangalore, India',
      dates: 'May 2026 – Present',
      bullets: [
        'Helped define and build an endpoint security product that detects sensitive information before it is sent to AI tools such as ChatGPT, with controls across clipboard, browser, and network activity.',
        'Designed the endpoint agent flow: how the OS-level agent detects sensitive data headed to AI tools and decides whether to allow, mask or block it.',
        'Shaped policy-based protection workflows: allow and monitor activity, mask sensitive information before it is sent, or block the action entirely. Focused the product on protecting company data without unnecessarily disrupting employee workflows.',
        'Led the Windows product launch from an existing macOS implementation, defining scope, sequencing technical work, and driving installation, updates, deployment, and recovery workflows.',
        'Designed enterprise rollout capabilities, including unattended device enrollment, deployment playbooks for Intune, Jamf, Kandji, and Hexnode, and reporting to help security teams understand endpoint coverage and enforcement activity.',
        'Evaluated two detection engines against real product requirements, comparing precision, recall, latency, and regional coverage. Identified gaps in the alternative engine and recommended against shipping it.',
        'Delivered product capabilities including masked-content previews, custom data-classification lists, proxy-based enforcement, event workflows, and endpoint coverage visibility.',
      ],
    },
    {
      org: 'NexTech',
      product: 'SpindL, Private-Market Investment Platform',
      logo: { src: '/logos/spindl.svg', alt: 'SpindL', width: 89, height: 32 },
      orgLogo: logos.nextech,
      story: 'spindl',
      accent: '#8a5a14',
      role: 'Junior Frontend Engineer, product lead for SpindL',
      location: 'Bangalore, India',
      dates: 'Mar 2026 – May 2026',
      bullets: [
        'Single-handedly drove the product from initial problem discovery to a working proof of concept, working directly with the product stakeholder. Defined the product direction, user journeys, MVP scope, data model, and delivery roadmap.',
        'Researched cap-table, fundraising, financial-planning, and private-investment platforms to identify gaps and define a product opportunity around helping family offices discover and evaluate investment opportunities that match their investment criteria.',
        'Mapped 14 user personas across founders, sponsors, investors, family offices, and administrators. Translated their needs into end-to-end journeys, wireframes, product requirements, and a prioritized development backlog.',
        'Designed the core founder and investor workflows, including cap-table management, ownership and funding scenario modeling, financial information, investor profiles, deal discovery, NDA workflows, and data rooms.',
        'Designed an explainable investment-thesis matching system using hard filters and weighted criteria. Chose a deterministic scoring approach over an LLM-based approach to make matching faster, more transparent, and easier to understand.',
        'Prioritized delivery across three major milestones, making explicit scope trade-offs and deferring features such as billing, e-signatures, and third-party identity verification to keep the initial product focused.',
        'Built the working proof of concept across authentication, cap tables, pro forma modeling, financials, investor profiles, deal discovery, NDA workflows, data rooms, demo data, and investor-facing materials.',
      ],
    },
    {
      org: 'NexTech',
      logo: logos.nextech,
      accent: '#6844FF',
      role: 'Junior Frontend Engineer',
      location: 'Bangalore, India',
      dates: 'May 2025 – May 2026',
      bullets: [
        'Delivered the finance module for HoaShare, covering invoices, bills, budgets, payments, reconciliations, and reporting; also shipped the Leads and Requests modules.',
        'Investigated and prioritized customer-reported production bugs across three applications, balancing urgent fixes with ongoing feature delivery for an eight-engineer team.',
        'Rebuilt Astralink Superadmin using reusable components and v2 APIs, contributing to product and engineering decisions as the platform evolved.',
      ],
    },
    {
      org: 'Purview Services',
      logo: logos.purview,
      accent: '#15803d',
      role: 'Software Engineer Intern',
      location: 'Hyderabad, India',
      dates: 'Jul 2024 – Dec 2024',
      bullets: [
        'Identified an onboarding barrier in Seva Vision, a smart-glasses product: users needed sighted assistance to complete setup. Designed a revised setup flow that removed this dependency without changing the hardware packaging; the team adopted the approach.',
        'Led iOS development, built two responsive websites, and supported stakeholder discussions and client demonstrations.',
      ],
    },
  ] satisfies DetailedEntry[],

  projects: [
    {
      org: 'offlyn.love',
      logo: { src: '/logos/offlyn.svg', alt: 'offlyn.love', width: 55, height: 44 },
      accent: '#c7245f',
      role: 'Co-Founder, Product & Strategy',
      url: 'https://offlyn.love',
      story: 'offlyn',
      bullets: [
        'Co-built and launched a consumer dating product in Bengaluru as a two-person team, taking it from an initial waitlist with no backend to a public product launch.',
        'Owned product requirements, user flows, roadmap, go-to-market planning, and trust and safety considerations; defined activation, retention, and referral metrics.',
        'Talked to prospective users to understand how they would use the product; the conversations showed that some users could be problematic, which led to a dedicated use case for handling them.',
      ],
    },
    {
      org: 'Wave',
      logo: logos.wave,
      accent: '#0e7490',
      url: 'https://wave.davidsling.in',
      story: 'wave',
      role: 'Enterprise Product Strategy & Packaging',
      bullets: [
        'Developing an enterprise offering for an open-source AI-agent collaboration product, defining organization tiers, admin roles, pricing, access controls, and audit requirements.',
        'Structured the roadmap into three delivery milestones and prioritized requirements using MoSCoW.',
      ],
    },
  ] satisfies DetailedEntry[],

  education: {
    school: "St. Joseph's College of Engineering",
    location: 'Chennai, India',
    degree: 'B.E. Computer Science, GPA: 8.9/10',
    publication: 'Publication: Ensemble Stacking Methodology for Identifying Heart Disease, ICOSEC 2023',
    dates: '2020 – 2024',
    accent: '#334155',
    logo: logos.sjce,
  },
};
