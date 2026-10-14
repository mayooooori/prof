import Image from 'next/image';
import { Paper } from './paper';
import { resume, type Entry } from '@/content/resume';

// Collage placement for each experience card. On phones the cards keep a
// small zigzag and tilt so the text stays easy to read; from `lg` up they are
// narrower, scattered left and right, tilted more, and tuck slightly under
// each other at the corners.
const scatter = [
  'self-start -rotate-[0.8deg] lg:w-[60%] lg:ml-[2%] lg:-rotate-[2deg]',
  'self-end rotate-[0.8deg] lg:w-[60%] lg:mr-[3%] lg:rotate-[1.6deg] lg:-mt-3',
  'self-start -rotate-[0.5deg] lg:w-[58%] lg:ml-[15%] lg:-rotate-[1.2deg] lg:-mt-3',
  'self-end rotate-[0.6deg] lg:w-[60%] lg:mr-[9%] lg:rotate-[2.2deg] lg:-mt-3',
];

function Heading({
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

function Chip({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className='inline-block rounded-full px-3 py-1 text-xs sm:text-sm font-bold text-white tracking-wide'
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}

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
        {entry.logo ? (
          <Image
            src={entry.logo.src}
            alt={entry.logo.alt}
            width={entry.logo.width}
            height={entry.logo.height}
            className='h-8 sm:h-10 w-auto'
          />
        ) : (
          <span />
        )}
        <Chip color={entry.accent}>{entry.org}</Chip>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4'>
        <p className='font-bold text-base sm:text-lg'>{entry.product ?? entry.org}</p>
        {entry.location && <p className='text-sm shrink-0'>{entry.location}</p>}
      </div>
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 mt-1'>
        <p className='italic text-sm sm:text-base'>{entry.role}</p>
        {entry.dates && <p className='italic text-sm shrink-0'>{entry.dates}</p>}
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
    </Paper>
  );
}

// Skill tags: one colour family per group.
const skillColors: Record<string, { bg: string; fg: string }> = {
  Product: { bg: '#f8d3df', fg: '#7a1f3d' },
  Technical: { bg: '#d4e3fb', fg: '#1e3a8a' },
};

export default function Resume() {
  return (
    <section aria-label='Resume' className='relative px-4 sm:px-6 pt-8 pb-8'>
      <div className='mx-auto max-w-3xl lg:max-w-6xl flex flex-col gap-14 sm:gap-16'>
        <div className='flex flex-col'>
          <Heading className='self-start lg:ml-[6%] -rotate-2'>experience</Heading>
          <div className='flex flex-col gap-8 lg:gap-0'>
            {resume.experience.map((e, i) => (
              <EntryCard
                key={`${e.org}-${e.product ?? ''}-${e.role}`}
                entry={e}
                className={scatter[i % scatter.length]}
                tape={i + 1}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <Heading className='self-end lg:mr-[20%] rotate-2'>skills</Heading>
          <Paper className='self-end w-[95%] lg:w-[64%] lg:mr-[5%] rotate-[0.6deg] lg:rotate-[1.4deg]' tape={2}>
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
        </div>
      </div>
    </section>
  );
}
