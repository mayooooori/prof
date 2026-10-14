// Story pages (/work/<slug>): one per product. The write-ups are still to
// come, so every section is a placeholder until Mayuri fills it in. To add a
// story, replace a section's `body` with real text.

import { logos, type Logo } from './resume';

export type StorySection = {
  heading: string;
  /** Null while the write-up is still to come. */
  body: string | null;
};

export type Story = {
  slug: string;
  name: string;
  /** Cut-out letters for the page title: A–Z only. */
  word: string;
  logo: Logo;
  accent: string;
  tagline: string;
  role: string;
  dates?: string;
  /** The product's own website, if it has one. */
  landingUrl?: string;
  sections: StorySection[];
  /** Screenshots go here later. */
  screenshots: string[];
};

const placeholderSections = (): StorySection[] => [
  { heading: 'the problem', body: null },
  { heading: 'what I did', body: null },
  { heading: 'how it went', body: null },
];

export const stories: Story[] = [
  {
    slug: 'astralink',
    name: 'Astralink',
    word: 'ASTRALINK',
    logo: { src: '/logos/astralink.svg', alt: 'Astralink', width: 554, height: 191 },
    accent: '#2563eb',
    tagline: 'Stops sensitive company data from reaching ChatGPT and other AI tools.',
    role: 'Product Engineer I · NexTech',
    dates: 'Jun 2026 – Present',
    landingUrl: 'https://www.astralinkconnect.dev/products/ai-protect',
    sections: placeholderSections(),
    screenshots: [],
  },
  {
    slug: 'spindl',
    name: 'SpindL',
    word: 'SPINDL',
    logo: { src: '/logos/spindl.svg', alt: 'SpindL', width: 89, height: 32 },
    accent: '#8a5a14',
    tagline: 'Private-markets investment platform, taken from research to a working proof of concept.',
    role: 'Product Engineer I · NexTech',
    dates: 'Mar 2026 – May 2026',
    sections: placeholderSections(),
    screenshots: [],
  },
  {
    slug: 'offlyn',
    name: 'offlyn.love',
    word: 'OFFLYN',
    logo: { src: '/logos/offlyn.svg', alt: 'offlyn.love', width: 55, height: 44 },
    accent: '#c7245f',
    tagline: 'A consumer dating product in Bengaluru, built and launched by a two-person team.',
    role: 'Co-Founder, Product & Strategy',
    landingUrl: 'https://offlyn.love',
    sections: placeholderSections(),
    screenshots: [],
  },
  {
    slug: 'wave',
    name: 'Wave',
    word: 'WAVE',
    logo: logos.wave,
    accent: '#0e7490',
    tagline: 'An enterprise offering for an open-source AI-agent collaboration product.',
    role: 'Enterprise Product Strategy & Packaging',
    landingUrl: 'https://wave.davidsling.in',
    sections: placeholderSections(),
    screenshots: [],
  },
];

export const storyBySlug = (slug: string) => stories.find((s) => s.slug === slug);
