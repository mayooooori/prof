import Link from 'next/link';
import { Paper } from './paper';
import { Heading, LogoImage, OrgBadge, scatter, SkillsCard } from './resume-parts';
import { resume, type Entry } from '@/content/resume';

function EntryCard({
  entry,
  className,
  tape,
}: {
  entry: Entry;
  className: string;
  tape: number;
}) {
  return (
    <Paper className={`w-[95%] ${className}`} tape={tape} accent={entry.accent}>
      {/* Logo + company chip */}
      <div className='flex items-center justify-between gap-3 mb-4'>
        <LogoImage logo={entry.logo} />
        <OrgBadge org={entry.org} color={entry.accent} logo={entry.orgLogo} />
      </div>

      {/* What it is */}
      <p className='font-bold text-base sm:text-lg leading-snug'>{entry.tagline}</p>

      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 mt-2 text-sm'>
        <p className='italic'>
          {entry.role} · {entry.location}
        </p>
        <p className='italic shrink-0'>{entry.dates}</p>
      </div>

      <ul className='mt-4 flex flex-col gap-2 text-sm sm:text-[15px] leading-relaxed'>
        {entry.highlights.map((h) => (
          <li key={h} className='flex gap-2.5'>
            <span aria-hidden className='shrink-0' style={{ color: entry.accent }}>
              ✦
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <ul className='mt-5 flex flex-wrap gap-2' aria-label='Areas'>
        {entry.tags.map((t) => (
          <li
            key={t}
            className='rounded-full px-3 py-0.5 text-xs sm:text-sm border-[1.5px]'
            style={{ borderColor: entry.accent }}
          >
            {t}
          </li>
        ))}
      </ul>
    </Paper>
  );
}

export default function Resume() {
  return (
    <section aria-label='Resume' className='relative px-4 sm:px-6 pt-8 pb-8'>
      <div className='mx-auto max-w-3xl lg:max-w-6xl flex flex-col gap-14 sm:gap-16'>
        <div className='flex flex-col'>
          <Heading className='self-start lg:ml-[6%] -rotate-2'>experience</Heading>
          <div className='flex flex-col gap-8 lg:gap-0'>
            {resume.experience.map((e, i) => (
              <EntryCard
                key={`${e.org}-${e.product}`}
                entry={e}
                className={scatter[i % scatter.length]}
                tape={i + 1}
              />
            ))}
          </div>
          <Link
            href='/resume'
            className='self-center mt-10 text-white text-xl sm:text-2xl hover:opacity-70 transition-opacity'
          >
            detailed resume →
          </Link>
        </div>

        <div className='flex flex-col'>
          <Heading className='self-end lg:mr-[20%] rotate-2'>skills</Heading>
          <SkillsCard className='self-end w-[95%] lg:w-[64%] lg:mr-[5%] rotate-[0.6deg] lg:rotate-[1.4deg]' />
        </div>
      </div>
    </section>
  );
}
