import type { Metadata } from 'next';
import Link from 'next/link';
import LetterWord from '@/components/letter-word';
import { Sticker } from '@/components/stickers';
import { BowCard, Paper } from '@/components/paper';
import { Chip, DetailedCard, Heading, LogoImage, scatter, SkillsCard } from '@/components/resume-parts';
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

      {/* RESUME, framed by a bow and sparkles: above the word on narrow
          screens, beside it from md up. Anchored to the word, not the page. */}
      <div className='flex justify-center mt-20 md:mt-14'>
        <div className='relative'>
          <Sticker name='bow' className='w-12 -top-16 left-0 md:w-24 md:-top-6 md:-left-28 -rotate-12' />
          <Sticker name='sparkles' className='w-11 -top-16 right-0 md:w-24 md:-top-8 md:-right-28 rotate-6' />
          <LetterWord word='RESUME' size='thanks' />
        </div>
      </div>

      <div className='mx-auto max-w-3xl lg:max-w-6xl flex flex-col gap-16 mt-16 sm:mt-20'>
        {/* Summary */}
        <Sticker name='heart' className='hidden lg:block w-36 left-[2%] mt-6 -rotate-12' />
        <BowCard className='self-center w-[86%] lg:w-[68%] -rotate-[0.6deg] lg:-rotate-[1deg]'>
          <p className='text-sm sm:text-[15px] leading-relaxed'>{detailed.summary}</p>
        </BowCard>

        <div className='relative flex flex-col'>
          <Sticker name='starRing' className='w-14 -top-2 right-[4%] sm:w-20 lg:w-40 lg:top-6 lg:right-[6%] rotate-12' />
          <Sticker name='butterfly' className='hidden lg:block w-40 top-[38%] left-[1%] -rotate-12' />
          <Sticker name='stars' className='hidden lg:block w-28 top-[73%] right-[4%] rotate-6' />
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

        <div className='relative flex flex-col'>
          <Sticker name='stars' delay={1.5} className='w-10 -top-4 left-[6%] sm:w-14 lg:hidden rotate-6' />
          <Sticker name='sparkles' delay={0.9} className='hidden lg:block w-36 top-[8%] left-[6%] -rotate-6' />
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

        <div className='relative flex flex-col'>
          <Sticker name='heart' delay={0.6} className='w-12 -top-3 right-[6%] sm:w-16 lg:hidden rotate-12' />
          <Sticker name='butterfly' delay={2.4} className='hidden lg:block w-36 top-[18%] right-[6%] rotate-12' />
          <Heading className='self-start lg:ml-[8%] -rotate-2'>skills</Heading>
          <SkillsCard className='self-start w-[95%] lg:w-[64%] lg:ml-[4%] -rotate-[0.6deg] lg:-rotate-[1.2deg]' />
        </div>

        <div className='relative flex flex-col'>
          <Sticker name='bow' delay={1.8} className='w-14 -top-4 left-[4%] sm:w-20 lg:hidden -rotate-6' />
          <Sticker name='starRing' delay={3} className='hidden lg:block w-32 top-[10%] left-[10%] -rotate-12' />
          <Heading className='self-end lg:mr-[18%] rotate-2'>education</Heading>
          <Paper
            className='self-end w-[95%] lg:w-[58%] lg:mr-[6%] rotate-[0.6deg] lg:rotate-[1.6deg]'
            tape={3}
            accent={edu.accent}
          >
            <div className='flex items-center justify-between gap-3 mb-4'>
              <LogoImage logo={edu.logo} className='h-12 sm:h-14' />
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
