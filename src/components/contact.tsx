'use client';

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='relative flex flex-col items-center min-h-screen gap-16'>
      <div className='relative flex justify-center items-center mt-56'>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/C.svg' alt='C' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/O.svg' alt='O' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-3'>
          <Image src='/N.svg' alt='N' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/T.svg' alt='T' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/A.svg' alt='A' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <Image src='/C.svg' alt='C' width={128} height={128} priority />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <Image src='/T.svg' alt='T' width={128} height={128} priority />
        </div>
      </div>
      <div className='flex flex-col items-center mt-10'>
        <p className='font-handwritten text-white text-2xl leading-relaxed '>
          I dont bite, I serve and eat <br />
          Hit me up 💋 <br />
          we can talk about anything, <br />
          from work to life :) <br />
        </p>
        <div className='flex flex-row gap-7 mt-10'>
          <LinkedinLogo size={32} weight='bold' />
          <GithubLogo size={32} weight='bold' />
          <EnvelopeSimple size={32} weight='bold' />
        </div>
      </div>
    </div>
  );
}
