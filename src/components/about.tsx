'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className='relative flex flex-col justify-end items-center min-h-screen '>
      <div className='relative flex left-52'>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/A.svg' alt='A' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/B.svg' alt='B' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-3'>
          <Image src='/O.svg' alt='O' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/U.svg' alt='U' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/T.svg' alt='T' width={128} height={128} priority />
        </div>

        <div className='absolute -top-16 -left-16 w-24 h-24 float-animation float-delay-4'>
          <Image src='/star.svg' alt='Star' width={96} height={96} priority />
        </div>
      </div>
      <div className='relative w-full h-[500px] px-40'>
        <div className='flex items-center justify-between gap-x-12 h-full'>
          <Image
            src='/frog.png'
            alt='Frog'
            width={500}
            height={500}
            className='w-72 h-auto'
          />
          <p className='font-handwritten text-white text-2xl leading-relaxed max-w-md'>
            Panicking professionally. <br /> Very mindful, very demure. <br />
            But at the end of the day, I&apos;m just a girl 💋
          </p>
        </div>
      </div>
    </div>
  );
}
