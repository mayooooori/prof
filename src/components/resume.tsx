import { Courier_Prime } from 'next/font/google';
import { resume, type Entry } from '@/content/resume';

// Typewriter text on paper cards: fits the collage, and stays readable for
// long bullets where the handwriting font would not.
const typewriter = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'] });

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

// Tape strips, slightly different on every card.
const tapes = [
  'left-1/2 -translate-x-1/2 -rotate-3',
  'left-10 rotate-6',
  'right-12 -rotate-6',
  'left-1/3 rotate-2',
];

function Paper({
  children,
  className = '',
  tape = 0,
}: {
  children: React.ReactNode;
  className?: string;
  tape?: number;
}) {
  return (
    <div
      className={`${typewriter.className} ${className} relative bg-[#f4ecdc] text-[#1f1b16] rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.4)] px-5 py-6 sm:px-8 sm:py-7`}
    >
      {/* Tape */}
      <span
        aria-hidden
        className={`absolute -top-3 ${tapes[tape % tapes.length]} w-20 sm:w-24 h-6 bg-[#e9dcb8]/75 shadow-sm`}
      />
      {children}
    </div>
  );
}

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
    <Paper className={`w-[95%] ${className}`} tape={tape}>
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4'>
        <p className='font-bold text-base sm:text-lg'>
          {entry.orgUrl ? (
            <a href={entry.orgUrl} target='_blank' rel='noopener noreferrer' className='underline underline-offset-4'>
              {entry.org}
            </a>
          ) : (
            entry.org
          )}
          {entry.product && <span className='font-normal'> – {entry.product}</span>}
        </p>
        {entry.location && <p className='text-sm shrink-0'>{entry.location}</p>}
      </div>
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 mt-1'>
        <p className='italic text-sm sm:text-base'>{entry.role}</p>
        {entry.dates && <p className='italic text-sm shrink-0'>{entry.dates}</p>}
      </div>
      <ul className='mt-4 flex flex-col gap-2.5 text-sm sm:text-[15px] leading-relaxed'>
        {entry.bullets.map((b) => (
          <li key={b} className='flex gap-2.5'>
            <span aria-hidden className='shrink-0'>•</span>
            <span>{b}</span>
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
        {/* Summary */}
        <Paper className='self-center w-full lg:w-[68%] -rotate-[0.6deg] lg:-rotate-[1deg]' tape={0}>
          <p className='text-sm sm:text-[15px] leading-relaxed'>{resume.summary}</p>
        </Paper>

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
            <div className='flex flex-col gap-4 text-sm sm:text-[15px] leading-relaxed'>
              {resume.skills.map((s) => (
                <p key={s.label}>
                  <span className='font-bold'>{s.label}:</span> {s.text}
                </p>
              ))}
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
}
