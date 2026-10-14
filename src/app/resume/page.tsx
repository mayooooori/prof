import type { Metadata } from 'next';
import Link from 'next/link';
import LetterWord from '@/components/letter-word';
import { BowCard, Paper } from '@/components/paper';
import { Chip, DetailedCard, Heading, scatter, SkillsCard } from '@/components/resume-parts';
import { detailed } from '@/content/resume';

export const metadata: Metadata = {
  title: 'mayooooo — resume',
  description: 'Mayuri K — detailed resume',
};

const backLink =
  'text-white text-lg sm:text-2xl hover:opacity-70 transition-opacity';

export default function ResumePage() {
  const edu = detailed.education;
  return (
    <main className='relative min-h-screen px-4 sm:px-6 pt-8 pb-24 overflow-x-hidden'>
      <Link href='/' className={backLink}>
        ← back to the fun
      </Link>

      <div className='flex justify-center mt-10 sm:mt-14'>
        <LetterWord word='RESUME' size='thanks' />
      </div>

      <div className='mx-auto max-w-3xl lg:max-w-6xl flex flex-col gap-16 mt-16 sm:mt-20'>
        {/* Summary */}
        <BowCard className='self-center w-[86%] lg:w-[68%] -rotate-[0.6deg] lg:-rotate-[1deg]'>
          <p className='text-sm sm:text-[15px] leading-relaxed'>{detailed.summary}</p>
        </BowCard>

        <div className='flex flex-col'>
          <Heading className='self-start lg:ml-[6%] -rotate-2'>experience</Heading>
          <div className='flex flex-col gap-8 lg:gap-0'>
            {detailed.experience.map((e, i) => (
              <DetailedCard
                key={`${e.org}-${e.role}-${e.product ?? ''}`}
                entry={e}
                className={scatter[i % scatter.length]}
                tape={i + 1}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <Heading className='self-end lg:mr-[10%] rotate-2'>selected projects</Heading>
          <div className='flex flex-col gap-8 lg:gap-0'>
            {detailed.projects.map((e, i) => (
              <DetailedCard
                key={e.org}
                entry={e}
                className={scatter[(i + 1) % scatter.length]}
                tape={i + 2}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <Heading className='self-start lg:ml-[8%] -rotate-2'>skills</Heading>
          <SkillsCard className='self-start w-[95%] lg:w-[64%] lg:ml-[4%] -rotate-[0.6deg] lg:-rotate-[1.2deg]' />
        </div>

        <div className='flex flex-col'>
          <Heading className='self-end lg:mr-[18%] rotate-2'>education</Heading>
          <Paper
            className='self-end w-[95%] lg:w-[58%] lg:mr-[6%] rotate-[0.6deg] lg:rotate-[1.6deg]'
            tape={3}
            accent={edu.accent}
          >
            <div className='flex items-center justify-end mb-4'>
              <Chip color={edu.accent}>{edu.location}</Chip>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4'>
              <p className='font-bold text-base sm:text-lg'>{edu.school}</p>
              <p className='italic text-sm shrink-0'>{edu.dates}</p>
            </div>
            <p className='mt-1 text-sm sm:text-base'>{edu.degree}</p>
            <p className='mt-3 text-sm sm:text-[15px] leading-relaxed'>{edu.publication}</p>
          </Paper>
        </div>

        <Link href='/' className={`self-center ${backLink}`}>
          ← back to the fun
        </Link>
      </div>
    </main>
  );
}
