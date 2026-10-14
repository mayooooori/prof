'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { stories } from '@/content/work';
import LetterWord from './letter-word';

// Where each sheet sits. Below `lg` they form a loose 2×2 with their own
// tilt; from `lg` up they are scattered across the section (left as a share
// of the section width, top in px below the heading), placed to stay clear
// of the collage on the left and the paper star on the right.
const placements: { tilt: string; left: string; top: string }[] = [
  { tilt: '-rotate-[7deg] translate-y-2 lg:translate-y-0', left: '29%', top: '50px' }, // Astralink: upper left
  { tilt: 'rotate-[5deg] translate-y-8 lg:translate-y-0', left: '42%', top: '320px' }, // SpindL: lower middle
  { tilt: '-rotate-[4deg] -translate-y-1 lg:translate-y-0', left: '57%', top: '0px' }, // offlyn.love: upper right
  { tilt: 'rotate-[8deg] translate-y-6 lg:translate-y-0', left: '68%', top: '340px' }, // Wave: lower far right
];

// three.js only loads in the browser, and only once the sheets come near the
// viewport (see `near` below): the section mounts with the page, two screens
// before anyone sees it.
const SheetSpace = () => <div className='aspect-square w-full' />;
const LogoSheet = dynamic(() => import('./logo-sheet'), {
  ssr: false,
  loading: SheetSpace,
});

export default function Works() {
  const list = useRef<HTMLUListElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: '600px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className='relative flex flex-col items-center min-h-screen '>
      {/* WORKS, with the heading right under it */}
      {/* Shifted left (and a touch smaller on laptops) so it clears the
          paper-star collage on the right at every width from md up. */}
      <div className='relative z-10 flex flex-col items-center my-10 md:right-12 lg:right-32 lg:scale-[0.85] xl:right-52 xl:scale-100 lg:my-16'>
        <div className='relative flex'>
          <LetterWord word='WORKS' />

          <div className='absolute -top-10 -left-6 w-14 h-14 sm:-top-16 sm:-left-16 sm:w-24 sm:h-24 float-animation float-delay-4'>
            <Image
              src='/star.webp'
              alt='Star'
              width={96}
              height={96}
              priority
              className='w-full h-auto'
            />
          </div>
        </div>
        <h2 className='mt-8 sm:mt-10 px-4 max-w-[440px] lg:max-w-none text-2xl sm:text-3xl lg:text-4xl text-center'>
          my very serious set of works here
        </h2>
      </div>
      <Image
        src={'/paper-star.png'}
        alt='paper star'
        width={200}
        height={200}
        className='absolute top-14 -right-8 w-32 sm:-right-16 sm:w-60 md:w-44 md:-right-20 lg:w-48 lg:-right-16 xl:w-60 transform -translate-x-1/2 h-auto z-10'
      />
      <Image
        src={'/paper.png'}
        alt='paper star'
        width={200}
        height={200}
        className='absolute top-24 -right-16 w-32 sm:-right-32 sm:w-60 md:w-44 lg:w-48 xl:w-60 transform -translate-x-1/2 h-auto rotate-10 '
      />
      <Image
        src={'/butter-paper.png'}
        alt='paper star'
        width={650}
        height={650}
        className='absolute bottom-0 left-24 w-72 sm:left-48 sm:w-[28rem] lg:left-40 lg:w-[26rem] xl:left-64 xl:w-[650px] transform -translate-x-1/2 h-auto'
      />

      {/* Each product: a logo popping out of a sheet you can swing around,
          and under it the name + arrow that opens the story. */}
      <ul
        ref={list}
        className='relative z-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-14 w-full max-w-[460px] px-4 mt-4 mb-16 lg:block lg:max-w-none lg:px-0 lg:mt-0 lg:mb-0 lg:h-[620px]'>
        {stories.map((s, i) => {
          const p = placements[i % placements.length];
          return (
            <li
              key={s.slug}
              style={{ ['--left' as string]: p.left, ['--top' as string]: p.top }}
              className={`flex flex-col items-center ${p.tilt} lg:absolute lg:w-[13%] lg:min-w-[150px] lg:max-w-[210px] lg:left-[var(--left)] lg:top-[var(--top)]`}
            >
              <div className='w-full max-w-[160px] sm:max-w-[175px] lg:max-w-none'>
                {near ? (
                  <LogoSheet
                    logo={s.logo}
                    accent={s.accent}
                    scale={s.slug === 'offlyn' ? 0.72 : 1}
                    href={`/work/${s.slug}`}
                  />
                ) : (
                  <SheetSpace />
                )}
              </div>
              <Link
                href={`/work/${s.slug}`}
                className='-mt-1 whitespace-nowrap text-xl sm:text-2xl text-center hover:opacity-70 hover:translate-x-1 transition [text-shadow:0_2px_6px_rgba(0,0,0,0.85),0_0_2px_rgba(0,0,0,0.9)]'
              >
                {s.name} →
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
