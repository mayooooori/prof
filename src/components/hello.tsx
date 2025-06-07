'use client';

// import Image from 'next/image';
import EvaporateImage from './evaporate';

export default function Hello() {
  return (
    <div className='relative flex justify-center items-center min-h-screen h-1/2'>
      {/* Word "HELLO" */}
      <div className='relative flex'>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <EvaporateImage
            src='/H.svg'
            alt='H'
            width={128}
            height={128}
            // priority
          />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <EvaporateImage
            src='/E.svg'
            alt='E'
            width={128}
            height={128}
            // priority
          />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-3'>
          <EvaporateImage
            src='/L.svg'
            alt='L'
            width={128}
            height={128}
            // priority
          />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-2'>
          <EvaporateImage
            src='/L.svg'
            alt='L'
            width={128}
            height={128}
            // priority
          />
        </div>
        <div className='w-32 h-32 mx-3 float-animation float-delay-1'>
          <EvaporateImage
            src='/O.svg'
            alt='O'
            width={128}
            height={128}
            // priority
          />
        </div>

        {/* Star SVG in Top-Right Corner */}
        <div className='absolute -top-16 -right-16 w-24 h-24 float-animation float-delay-4'>
          <EvaporateImage
            src='/star.svg'
            alt='Star'
            width={96}
            height={96}
            // priority
          />
        </div>
      </div>
    </div>
  );
}
