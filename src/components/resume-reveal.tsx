'use client';

import Image from 'next/image';
import LetterWord from './letter-word';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


export default function ResumeReveal() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll through this tall section (start at top -> end at bottom).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Where the torn gap sits inside the pearl-lady box (measured from the
  // image's transparent hole, including the 7% downward nudge below).
  const GAP_X = '32%';
  const GAP_Y = '41%';

  // Pearl lady: sits still, then zooms into the torn gap and fades away.
  const pearlScale = useTransform(scrollYProgress, [0, 0.65], [1, 16]);
  const pearlOpacity = useTransform(scrollYProgress, [0, 0.4, 0.62], [1, 1, 0]);

  // Resume: hidden while the pearl lady sits still. Once the zoom is under
  // way and the hole has opened up, it fades in behind her, centred on the
  // gap, as a glimpse of what's coming. As she fades it grows and glides to
  // the middle of the screen; the subtitle only arrives at the end.
  const resumeScale = useTransform(scrollYProgress, [0, 0.15, 0.85], [0.35, 0.35, 1]);
  const resumeOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.5, 0.68], [0, 0.9, 0.9, 1]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.62, 0.78], [0, 1]);
  const resumeLeft = useTransform(scrollYProgress, [0.4, 0.75], [GAP_X, '50%']);
  const resumeTop = useTransform(scrollYProgress, [0.4, 0.75], [GAP_Y, '50%']);

  return (
    <section id='resume' ref={ref} className='relative h-[220vh]'>
      {/* Pinned viewport: the animation plays while this section scrolls past. */}
      <div className='sticky top-0 h-screen overflow-hidden flex items-center justify-center'>
        {/* Pearl lady — zoom origin sits on the centre of the torn gap. */}
        <motion.div
          style={{
            scale: pearlScale,
            opacity: pearlOpacity,
            transformOrigin: `${GAP_X} ${GAP_Y}`,
            willChange: 'transform, opacity',
          }}
          className='absolute z-10'
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

        {/* Resume — a box the same size as the pearl lady, so the resume can
            start exactly on the gap and then move to the screen centre. */}
        <div className='absolute z-0 aspect-[422/591] w-[min(80vw,422px)] sm:w-auto sm:h-[80vh]'>
          <motion.div
            style={{
              left: resumeLeft,
              top: resumeTop,
              x: '-50%',
              y: '-50%',
              scale: resumeScale,
              opacity: resumeOpacity,
              willChange: 'transform, opacity',
            }}
            className='absolute w-max flex flex-col items-center text-white'
          >
            <LetterWord word='RESUME' size='thanks' />
            <motion.p
              style={{ opacity: subtitleOpacity }}
              className='mt-10 sm:mt-16 text-lg sm:text-2xl text-center max-w-[80vw] sm:max-w-md'
            >
              scroll for the serious stuff ↓
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
