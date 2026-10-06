'use client';

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import LetterWord from './letter-word';

export default function Contact() {
  return (
    <div className='relative flex flex-col items-center min-h-screen gap-16'>
      <div className='relative flex justify-center items-center mt-32 sm:mt-56'>
        <LetterWord word='CONTACT' size='wide' delays={[1, 2, 3, 2, 2, 1, 2]} />
      </div>
      <div className='flex flex-col items-center mt-10 px-6'>
        <p className='font-handwritten text-white text-xl sm:text-2xl leading-relaxed text-center'>
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
