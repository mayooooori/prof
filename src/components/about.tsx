'use client';

import Image from 'next/image';
import LetterWord from './letter-word';

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
      <div className='relative w-full px-6 py-12 sm:px-16 lg:px-40 lg:py-0 lg:h-[500px]'>
        <div className='flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-x-12 h-full'>
          <Image
            src='/frog.png'
            alt='Frog'
            width={500}
            height={500}
            className='w-44 sm:w-56 lg:w-72 h-auto'
          />
          <p className='font-handwritten text-white text-xl sm:text-2xl leading-relaxed max-w-md text-center sm:text-left'>
            Panicking professionally. <br /> Very mindful, very demure. <br />
            But at the end of the day, I&apos;m just a girl 💋
          </p>
        </div>
      </div>
    </div>
  );
}
