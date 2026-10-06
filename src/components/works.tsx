'use client';

import Image from 'next/image';
import LetterWord from './letter-word';

export default function Works() {
  return (
    <div className='relative flex flex-col items-center min-h-screen '>
      <div className='relative flex my-10 lg:right-52 lg:my-16'>
        <LetterWord word='WORKS' />

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
      <Image
        src={'/paper-star.png'}
        alt='paper star'
        width={200}
        height={200}
        className='absolute top-14 -right-8 w-32 sm:-right-16 sm:w-60 transform -translate-x-1/2 h-auto z-10'
      />
      <Image
        src={'/paper.png'}
        alt='paper star'
        width={200}
        height={200}
        className='absolute top-24 -right-16 w-32 sm:-right-32 sm:w-60 transform -translate-x-1/2 h-auto rotate-10 '
      />
      <Image
        src={'/butter-paper.png'}
        alt='paper star'
        width={650}
        height={650}
        className='absolute bottom-0 left-24 w-72 sm:left-48 sm:w-[28rem] lg:left-64 lg:w-[650px] transform -translate-x-1/2 h-auto'
      />
      <div className='relative z-10 flex flex-col items-center mt-16 lg:mt-24 px-4'>
        <h2 className='text-2xl sm:text-4xl text-center'>my very serious set of works here</h2>
        <ul className='mt-8 lg:mt-12 text-xl sm:text-2xl flex flex-col gap-5 text-center'>
          <li>my link one</li>
          <li>my link two</li>
          <li>my link three</li>
          <li>my link four</li>
        </ul>
      </div>
    </div>
  );
}
