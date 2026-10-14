'use client';

import Image from 'next/image';
import LetterWord from './letter-word';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


export default function ThankYou() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll through this tall section (start at top -> end at bottom).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Pearl lady: sits still, then zooms into the torn gap and fades away.
  const pearlScale = useTransform(scrollYProgress, [0, 0.65], [1, 16]);
  const pearlOpacity = useTransform(scrollYProgress, [0, 0.4, 0.62], [1, 1, 0]);

  // Resume: hidden inside the gap, then pops out as we zoom through it.
  const resumeScale = useTransform(scrollYProgress, [0.45, 0.85], [0.35, 1]);
  const resumeOpacity = useTransform(scrollYProgress, [0.5, 0.68], [0, 1]);

  return (
    <section id='resume' ref={ref} className='relative h-[220vh]'>
      {/* Pinned viewport: the animation plays while this section scrolls past. */}
      <div className='sticky top-0 h-screen overflow-hidden flex items-center justify-center'>
        {/* Pearl lady — zoom origin sits on the torn white gap (~43% down). */}
        <motion.div
          style={{
            scale: pearlScale,
            opacity: pearlOpacity,
            transformOrigin: '50% 43%',
            willChange: 'transform, opacity',
          }}
          className='absolute'
        >
          {/* Nudge down so the torn gap lands at the screen centre. */}
          <div style={{ transform: 'translateY(7%)' }}>
            <Image
              src='/pearl-girl.png'
              alt='pearl-girl'
              width={422}
              height={591}
              priority
              className='w-[min(80vw,422px)] h-auto sm:w-auto sm:h-[80vh]'
            />
          </div>
        </motion.div>

        {/* Resume — emerges from the gap as the pearl lady fades. */}
        <motion.div
          style={{
            scale: resumeScale,
            opacity: resumeOpacity,
            willChange: 'transform, opacity',
          }}
          className='relative flex flex-col items-center px-6 text-white'
        >
          <LetterWord word='RESUME' size='thanks' />
          <p className='mt-10 sm:mt-16 text-lg sm:text-2xl text-center max-w-md'>
            the serious stuff is on its way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
