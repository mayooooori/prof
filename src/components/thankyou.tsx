'use client';

import Image from 'next/image';

export default function ThankYou() {
  return (
    <div className='relative flex flex-col items-center min-h-screen '>
      <div className='relative flex justify-center items-center mt-56'>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/T.svg' alt='T' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/H.svg' alt='H' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-3'>
          <Image src='/A.svg' alt='A' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/N.svg' alt='N' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/K.svg' alt='K' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/S.svg' alt='S' width={128} height={128} priority />
        </div>
      </div>
      <Image
        src={'/pearl-girl.png'}
        alt='pearl-girl'
        width={650}
        height={650}
        className='absolute top-14 right-80 transform -translate-x-1/2 h-auto z-10'
      />
    </div>
  );
}
