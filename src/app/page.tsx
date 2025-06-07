'use client';
import About from '@/components/about';
import Contact from '@/components/contact';
import EvaporateImage from '@/components/evaporate';
import Hearts from '@/components/Hearts';
import Hello from '@/components/hello';
import Popup from '@/components/Popup';
import ThankYou from '@/components/thankyou';
import Works from '@/components/works';
import ZoomFadeImage from '@/components/zoomFade';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative'>
      {/* First Section */}
      <div className='relative min-h-screen overflow-hidden'>
        <Popup />
        <EvaporateImage
          src='/sun.svg'
          alt='Sun'
          width={500}
          height={400}
          className='absolute top-0 right-0'
        />
        <EvaporateImage
          src='/discoball.png'
          alt='Disco Ball'
          width={300}
          height={300}
          className='absolute top-0 left-0 z-10'
        />
        <EvaporateImage
          src='/clouds.png'
          alt='Clouds'
          width={400}
          height={400}
          className='absolute top-0 left-10 z-0'
        />
        <ZoomFadeImage
          src='/shrek.png'
          alt='Shrek'
          width={200}
          height={200}
          className='absolute bottom-24 left-1/2 w-48 h-auto '
        />

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-12'>
          {/* Works Button */}
          <button className='flex items-center'>
            <EvaporateImage src='/W.svg' alt='W' width={32} height={32} />
            <EvaporateImage src='/O.svg' alt='O' width={32} height={32} />
            <EvaporateImage src='/R.svg' alt='R' width={32} height={32} />
            <EvaporateImage src='/K.svg' alt='K' width={32} height={32} />
            <EvaporateImage src='/S.svg' alt='S' width={32} height={32} />
          </button>

          {/* Contact Button */}
          <button className='flex items-center'>
            <EvaporateImage src='/C.svg' alt='C' width={32} height={32} />
            <EvaporateImage src='/O.svg' alt='O' width={32} height={32} />
            <EvaporateImage src='/N.svg' alt='N' width={32} height={32} />
            <EvaporateImage src='/T.svg' alt='T' width={32} height={32} />
            <EvaporateImage src='/A.svg' alt='A' width={32} height={32} />
            <EvaporateImage src='/C.svg' alt='C' width={32} height={32} />
            <EvaporateImage src='/T.svg' alt='T' width={32} height={32} />
          </button>
        </div>

        <div className='flex justify-center items-center min-h-[80vh]'>
          <Hello />
        </div>

        <Hearts />
      </div>

      {/* Second Section */}

      <div className='relative min-h-screen overflow-hidden'>
        <Image
          src='/lips.svg'
          alt='Lips'
          width={250}
          height={250}
          className='absolute top-10 left-40 transform -translate-x-1/2 w-60 h-auto rotate-12'
        />

        <div className='relative'>
          <Image
            src='/butterfly.png'
            alt='Butterfly'
            width={80}
            height={80}
            className='absolute top-32 right-48 transform -translate-x-1/2 w-60 h-auto rotate-12 float-animation float-delay-4'
          />
          <About />
        </div>
      </div>

      {/* Third Section */}

      <div className='relative min-h-screen overflow-hidden'>
        <div className='relative'>
          <Works />
        </div>
      </div>

      {/* Thankyou Section */}
      <div className='relative min-h-screen overflow-hidden'>
        <div className='relative'>
          <ThankYou />
        </div>
      </div>

      {/* Contact Section */}
      <div className='relative min-h-screen overflow-hidden'>
        <div className='relative'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
