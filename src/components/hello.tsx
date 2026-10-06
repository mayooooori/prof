'use client';

import EvaporateImage from './evaporate';
import LetterWord from './letter-word';

export default function Hello() {
  return (
    <div className='relative flex justify-center items-center min-h-screen h-1/2'>
      {/* Word "HELLO" */}
      <div className='relative flex'>
        <LetterWord word='HELLO' evaporate priority={false} />

        {/* Star SVG in Top-Right Corner */}
        <div className='absolute -top-10 -right-6 w-14 h-14 sm:-top-16 sm:-right-16 sm:w-24 sm:h-24 float-animation float-delay-4'>
          <EvaporateImage
            src='/star.svg'
            alt='Star'
            width={96}
            height={96}
            className='w-full h-auto'
          />
        </div>
      </div>
    </div>
  );
}
