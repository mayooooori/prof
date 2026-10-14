import { Courier_Prime } from 'next/font/google';
import { resume, type Entry } from '@/content/resume';

// Typewriter text on paper cards: fits the collage, and stays readable for
// long bullets where the handwriting font would not.
const typewriter = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'] });

const tilts = ['-rotate-[0.6deg]', 'rotate-[0.5deg]', '-rotate-[0.3deg]', 'rotate-[0.7deg]'];

function Paper({
  children,
  tilt = 0,
}: {
  children: React.ReactNode;
  tilt?: number;
}) {
  return (
    <div
      className={`${typewriter.className} ${tilts[tilt % tilts.length]} bg-[#f4ecdc] text-[#1f1b16] rounded-sm shadow-[0_6px_20px_rgba(0,0,0,0.35)] px-5 py-6 sm:px-8 sm:py-7`}
    >
      {children}
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className='text-white text-2xl sm:text-3xl mb-5 sm:mb-6'>
      {children} <span aria-hidden>✦</span>
    </h3>
  );
}

function EntryCard({ entry, tilt }: { entry: Entry; tilt: number }) {
  return (
    <Paper tilt={tilt}>
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
  let tilt = 0;
  return (
    <section aria-label='Resume' className='relative px-4 sm:px-6 pt-8 pb-24'>
      <div className='mx-auto max-w-3xl flex flex-col gap-14 sm:gap-16'>
        {/* Name + links */}
        <Paper tilt={tilt++}>
          <h2 className='text-3xl sm:text-4xl font-bold text-center'>{resume.name}</h2>
          <p className='mt-3 text-center text-sm sm:text-base'>
            {resume.location}
            <span className='px-2'>|</span>
            <a href={`mailto:${resume.email}`} className='underline underline-offset-4'>
              {resume.email}
            </a>
            {resume.links.map((l) => (
              <span key={l.label}>
                <span className='px-2'>|</span>
                <a href={l.href} target='_blank' rel='noopener noreferrer' className='underline underline-offset-4'>
                  {l.label}
                </a>
              </span>
            ))}
          </p>
          <p className='mt-6 text-sm sm:text-[15px] leading-relaxed'>{resume.summary}</p>
        </Paper>

        <div>
          <Heading>experience</Heading>
          <div className='flex flex-col gap-8'>
            {resume.experience.map((e) => (
              <EntryCard key={`${e.org}-${e.product ?? ""}-${e.role}`} entry={e} tilt={tilt++} />
            ))}
          </div>
        </div>

        <div>
          <Heading>selected projects</Heading>
          <div className='flex flex-col gap-8'>
            {resume.projects.map((e) => (
              <EntryCard key={e.org} entry={e} tilt={tilt++} />
            ))}
          </div>
        </div>

        <div>
          <Heading>skills</Heading>
          <Paper tilt={tilt++}>
            <div className='flex flex-col gap-4 text-sm sm:text-[15px] leading-relaxed'>
              {resume.skills.map((s) => (
                <p key={s.label}>
                  <span className='font-bold'>{s.label}:</span> {s.text}
                </p>
              ))}
            </div>
          </Paper>
        </div>

        <div>
          <Heading>education</Heading>
          <Paper tilt={tilt++}>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4'>
              <p className='font-bold text-base sm:text-lg'>{resume.education.school}</p>
              <p className='text-sm shrink-0'>{resume.education.location}</p>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 mt-1'>
              <p className='text-sm sm:text-base'>{resume.education.degree}</p>
              <p className='italic text-sm shrink-0'>{resume.education.dates}</p>
            </div>
            <p className='mt-3 text-sm sm:text-[15px] leading-relaxed'>{resume.education.publication}</p>
          </Paper>
        </div>
      </div>
    </section>
  );
}
