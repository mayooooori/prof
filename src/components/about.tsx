'use client';

import Image from 'next/image';
import LetterWord from './letter-word';
import { BowCard } from './paper';

export default function About() {
  return (
    <div className='relative flex flex-col justify-end items-center min-h-screen '>
      <div className='relative flex lg:left-52'>
        <LetterWord word='ABOUT' />

        <div className='absolute -top-10 -left-6 w-14 h-14 sm:-top-16 sm:-left-16 sm:w-24 sm:h-24 float-animation float-delay-4'>
          <Image
            src='/star.svg'
            alt='Star'
            width={96}
            height={96}
            priority
            className='w-full h-auto'
          />
        </div>
      </div>
      <div className='relative w-full px-4 py-12 sm:px-16 lg:px-40 lg:py-0 lg:h-[500px]'>
        <div className='flex flex-row items-start sm:items-center justify-between gap-x-4 sm:gap-x-12 h-full'>
          <Image
            src='/frog.png'
            alt='Frog'
            width={500}
            height={500}
            className='w-32 shrink-0 sm:w-56 lg:w-72 h-auto'
          />
          <BowCard size='snug' className='min-w-0 max-w-md lg:max-w-xl mt-32 sm:mt-0 -rotate-[1deg]'>
            <p className='text-xs sm:text-sm lg:text-[15px] leading-relaxed'>
              Product manager who used to be a software engineer. I helped build an AI tool that
              catches company secrets before they get pasted into ChatGPT, then led its Windows
              launch. I also took an investment platform from &ldquo;what if&rdquo; to a working
              proof of concept. Big fan of messy problems, tidy roadmaps, and stakeholders who
              reply to emails.
            </p>
          </BowCard>
        </div>
      </div>
    </div>
  );
}
