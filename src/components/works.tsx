'use client';

import Image from 'next/image';

export default function Works() {
  return (
    <div className='relative flex flex-col items-center min-h-screen '>
      <div className='relative flex right-52 my-16'>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/W.svg' alt='W' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/O.svg' alt='O' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-3'>
          <Image src='/R.svg' alt='R' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/K.svg' alt='K' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/S.svg' alt='S' width={128} height={128} priority />
        </div>

        <div className='absolute -top-16 -left-16 w-24 h-24 float-animation float-delay-4'>
          <Image src='/star.svg' alt='Star' width={96} height={96} priority />
        </div>
      </div>
      <Image
        src={'/paper-star.png'}
        alt='paper star'
        width={200}
        height={200}
        className='absolute top-14 -right-16 transform -translate-x-1/2 w-60 h-auto z-10'
      />
      <Image
        src={'/paper.png'}
        alt='paper star'
        width={200}
        height={200}
        className='absolute top-24 -right-32 transform -translate-x-1/2 w-60 h-auto rotate-10 '
      />
      <Image
        src={'/butter-paper.png'}
        alt='paper star'
        width={650}
        height={650}
        className='absolute bottom-0 left-64 transform -translate-x-1/2 h-auto'
      />
      <div className='flex flex-col items-center mt-24'>
        <h2 className='text-4xl'>my very serious set of works here</h2>
        <ul className='mt-12 text-2xl flex flex-col gap-5'>
          <li>my link one</li>
          <li>my link two</li>
          <li>my link three</li>
          <li>my link four</li>
        </ul>
      </div>
    </div>
  );
}
