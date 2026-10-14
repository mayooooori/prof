import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LetterWord from '@/components/letter-word';
import { Paper } from '@/components/paper';
import { Heading, ProductLogo } from '@/components/resume-parts';
import { Sticker } from '@/components/stickers';
import { stories, storyBySlug } from '@/content/work';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const story = storyBySlug((await params).slug);
  return story
    ? { title: `mayooooo — ${story.name}`, description: story.tagline }
    : { title: 'mayooooo' };
}

const navLink = 'text-white text-lg sm:text-2xl hover:opacity-70 transition-opacity';

// Each section card leans a different way.
const tilts = [
  'self-start -rotate-[0.8deg] lg:w-[70%] lg:ml-[4%] lg:-rotate-[1.6deg]',
  'self-end rotate-[0.8deg] lg:w-[70%] lg:mr-[4%] lg:rotate-[1.4deg]',
  'self-start -rotate-[0.5deg] lg:w-[68%] lg:ml-[10%] lg:-rotate-[1deg]',
];

export default async function StoryPage({ params }: { params: Promise<Params> }) {
  const story = storyBySlug((await params).slug);
  if (!story) notFound();

  const i = stories.findIndex((s) => s.slug === story.slug);
  const next = stories[(i + 1) % stories.length];

  return (
    <main className='relative min-h-screen px-4 sm:px-6 pt-8 pb-24 overflow-x-hidden'>
      <div className='flex flex-wrap justify-between gap-4'>
        <Link href='/resume' className={navLink}>
          ← back to the resume
        </Link>
        <Link href='/' className={navLink}>
          home
        </Link>
      </div>

      {/* Title in cut-out letters, framed by stickers */}
      <div className='flex justify-center mt-20 md:mt-14'>
        <div className='relative'>
          <Sticker name='sparkles' className='w-11 -top-16 left-0 md:w-20 md:-top-8 md:-left-24 -rotate-6' />
          <Sticker name='heart' className='w-10 -top-14 right-0 md:w-16 md:-top-6 md:-right-20 rotate-12' />
          <LetterWord word={story.word} size='long' />
        </div>
      </div>

      <div className='mx-auto max-w-3xl lg:max-w-5xl flex flex-col gap-14 mt-16'>
        {/* Intro: logo (to the product's site), tagline, role */}
        <Paper
          className='self-center w-[95%] lg:w-[80%] -rotate-[0.6deg]'
          tape={0}
          accent={story.accent}
        >
          <div className='flex items-center gap-3 mb-4'>
            <ProductLogo logo={story.logo} href={story.landingUrl} />
          </div>
          <p className='font-bold text-base sm:text-lg leading-snug'>{story.tagline}</p>
          <p className='mt-2 italic text-sm sm:text-base'>
            {story.role}
            {story.dates ? ` · ${story.dates}` : ''}
          </p>
        </Paper>

        {/* The story, section by section */}
        <div className='relative flex flex-col gap-10'>
          <Sticker name='butterfly' className='hidden lg:block w-32 top-[30%] right-[2%] rotate-12' />
          <Sticker name='stars' className='hidden lg:block w-24 top-[70%] left-[1%] -rotate-6' delay={1.2} />
          {story.sections.map((sec, n) => (
            <Paper key={sec.heading} className={`w-[95%] ${tilts[n % tilts.length]}`} tape={n + 1} accent={story.accent}>
              <h3 className='font-bold text-base sm:text-lg mb-3'>{sec.heading}</h3>
              {sec.body ? (
                <p className='text-sm sm:text-[15px] leading-relaxed'>{sec.body}</p>
              ) : (
                <p className='text-sm sm:text-[15px] leading-relaxed italic opacity-70'>
                  still being written ✦ check back soon.
                </p>
              )}
            </Paper>
          ))}
        </div>

        {/* Screenshots */}
        <div className='flex flex-col'>
          <Heading className='self-start lg:ml-[6%] -rotate-2'>screenshots</Heading>
          <Paper className='w-[95%] self-center lg:w-[80%] rotate-[0.6deg]' tape={2}>
            {story.screenshots.length === 0 ? (
              <div className='rounded-sm border-2 border-dashed border-[#1f1b16]/30 py-12 text-center text-sm italic opacity-70'>
                screenshots coming soon
              </div>
            ) : null}
          </Paper>
        </div>

        {/* Next story */}
        <div className='flex flex-wrap justify-between gap-4 mt-4'>
          <Link href='/resume' className={navLink}>
            ← back to the resume
          </Link>
          <Link href={`/work/${next.slug}`} className={navLink}>
            next: {next.name} →
          </Link>
        </div>
      </div>
    </main>
  );
}
