'use client';

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import LetterWord from './letter-word';
import { resume } from '@/content/resume';

const linkedin = resume.links.find((l) => l.label === 'LinkedIn')!.href;
const github = resume.links.find((l) => l.label === 'GitHub')!.href;

export default function Contact() {
  return (
    <div className='relative flex flex-col items-center min-h-screen gap-16'>
      <div className='relative flex justify-center items-center mt-12 sm:mt-20'>
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
          <a href={linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:opacity-70 transition-opacity'>
            <LinkedinLogo size={32} weight='bold' />
          </a>
          <a href={github} target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='hover:opacity-70 transition-opacity'>
            <GithubLogo size={32} weight='bold' />
          </a>
          <a href={`mailto:${resume.email}`} aria-label='Email' className='hover:opacity-70 transition-opacity'>
            <EnvelopeSimple size={32} weight='bold' />
          </a>
        </div>
      </div>
    </div>
  );
}
