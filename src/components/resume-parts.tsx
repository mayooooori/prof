import Image from 'next/image';
import Link from 'next/link';
import { Paper } from './paper';
import { resume, type DetailedEntry, type Logo } from '@/content/resume';

// Collage placement for a column of cards. On phones the cards keep a small
// zigzag and tilt so the text stays easy to read; from `lg` up they are
// narrower, scattered left and right, tilted more, and tuck slightly under
// each other at the corners.
export const scatter = [
  'self-start -rotate-[0.8deg] lg:w-[60%] lg:ml-[2%] lg:-rotate-[2deg]',
  'self-end rotate-[0.8deg] lg:w-[60%] lg:mr-[3%] lg:rotate-[1.6deg] lg:-mt-3',
  'self-start -rotate-[0.5deg] lg:w-[58%] lg:ml-[15%] lg:-rotate-[1.2deg] lg:-mt-3',
  'self-end rotate-[0.6deg] lg:w-[60%] lg:mr-[9%] lg:rotate-[2.2deg] lg:-mt-3',
];

export function Heading({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-white text-2xl sm:text-3xl mb-6 sm:mb-8 ${className}`}>
      {children} <span aria-hidden>✦</span>
    </h3>
  );
}

/** A logo at card-header size. LinkedIn JPEGs sit on white, so they are
 *  multiply-blended into the paper colour. */
export function LogoImage({ logo, className = 'h-8 sm:h-10' }: { logo: Logo; className?: string }) {
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={`${className} w-auto ${logo.blend ? 'mix-blend-multiply' : ''}`}
    />
  );
}

/** The card's logo, linked to its landing page when known. */
export function ProductLogo({ logo, href }: { logo: Logo; href?: string }) {
  if (!href) return <LogoImage logo={logo} />;
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`${logo.alt} website`}
      className='group inline-flex items-start gap-1 hover:-translate-y-0.5 transition'
    >
      <LogoImage logo={logo} />
      {/* Arrow so it's clear the logo is a link. */}
      <span
        aria-hidden
        className='flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1f1b16] text-white text-xs sm:text-sm leading-none group-hover:scale-110 transition'
      >
        ↗
      </span>
    </a>
  );
}

/** "read the story →": the in-site link to a product's story page. A plain
 *  arrow (not ↗) so it reads as staying on this site. */
export function StoryLink({ slug, accent }: { slug: string; accent: string }) {
  return (
    <Link
      href={`/work/${slug}`}
      className='inline-block mt-5 font-bold text-sm sm:text-base underline underline-offset-4 decoration-2 hover:translate-x-1 transition'
      style={{ textDecorationColor: accent }}
    >
      read the story →
    </Link>
  );
}

/** The company chip, with the company's small mark beside it when known. */
export function OrgBadge({
  org,
  color,
  logo,
  href,
}: {
  org: string;
  color: string;
  logo?: Logo;
  href?: string;
}) {
  return (
    <span className='flex items-center gap-2 shrink-0'>
      {logo && <LogoImage logo={logo} className='h-7 sm:h-8' />}
      <Chip color={color} href={href}>
        {org}
      </Chip>
    </span>
  );
}

export function Chip({
  children,
  color,
  href,
}: {
  children: React.ReactNode;
  color: string;
  /** When set, the chip is a link to this page (opens in a new tab). */
  href?: string;
}) {
  const cls =
    'inline-block rounded-full px-3 py-1 text-xs sm:text-sm font-bold text-white tracking-wide';
  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={`${cls} hover:brightness-110 hover:-translate-y-0.5 transition`}
        style={{ backgroundColor: color }}
      >
        {children} <span aria-hidden>↗</span>
      </a>
    );
  }
  return (
    <span className={cls} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
}

// Skill tags: one colour family per group.
const skillColors: Record<string, { bg: string; fg: string }> = {
  Product: { bg: '#f8d3df', fg: '#7a1f3d' },
  Technical: { bg: '#d4e3fb', fg: '#1e3a8a' },
};

export function SkillsCard({ className = '' }: { className?: string }) {
  return (
    <Paper className={className} tape={2}>
      <div className='flex flex-col gap-5'>
        {resume.skills.map((s) => {
          const c = skillColors[s.label] ?? skillColors.Product;
          return (
            <div key={s.label}>
              <p className='font-bold text-sm sm:text-base mb-2.5'>{s.label}</p>
              <ul className='flex flex-wrap gap-2'>
                {s.text.split(', ').map((skill) => (
                  <li
                    key={skill}
                    className='rounded-full px-3 py-1 text-xs sm:text-sm'
                    style={{ backgroundColor: c.bg, color: c.fg }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Paper>
  );
}

/** A full resume card: logo (if any) and company chip, title, role and
 *  dates, and every bullet. Used on the /resume page. */
export function DetailedCard({
  entry,
  className = '',
  tape = 0,
}: {
  entry: DetailedEntry;
  className?: string;
  tape?: number;
}) {
  const title = entry.product ?? entry.org;
  return (
    <Paper className={`w-[95%] ${className}`} tape={tape} accent={entry.accent}>
      <div className='flex items-center justify-between gap-3 mb-4'>
        {entry.logo ? <ProductLogo logo={entry.logo} href={entry.productUrl ?? entry.url} /> : <span />}
        <OrgBadge org={entry.org} color={entry.accent} logo={entry.orgLogo} />
      </div>

      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4'>
        <p className='font-bold text-base sm:text-lg leading-snug'>
          {title}
        </p>
        {entry.location && <p className='text-sm shrink-0'>{entry.location}</p>}
      </div>
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 mt-1 text-sm'>
        <p className='italic sm:text-base'>{entry.role}</p>
        {entry.dates && <p className='italic shrink-0'>{entry.dates}</p>}
      </div>

      <ul className='mt-4 flex flex-col gap-2.5 text-sm sm:text-[15px] leading-relaxed'>
        {entry.bullets.map((b) => (
          <li key={b} className='flex gap-2.5'>
            <span aria-hidden className='shrink-0' style={{ color: entry.accent }}>
              ✦
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {entry.story && <StoryLink slug={entry.story} accent={entry.accent} />}
    </Paper>
  );
}
