'use client';

import Image from 'next/image';
import EvaporateImage from './evaporate';

// One cut-out word. Letter boxes scale with the viewport so the whole word
// fits a phone, and reach the original desktop sizes from `lg` upward.
type Size = 'hero' | 'wide' | 'thanks' | 'long' | 'nav';

const boxBySize: Record<Size, string> = {
  // 5-letter words: 128px on desktop (HELLO / ABOUT / WORKS).
  hero: 'w-14 h-14 mx-1 sm:w-20 sm:h-20 sm:mx-2 lg:w-32 lg:h-32 lg:mx-3',
  // 7-letter CONTACT: needs a smaller step at md/lg, full size from xl.
  wide: 'w-10 h-10 mx-0.5 sm:w-16 sm:h-16 sm:mx-2 lg:w-24 lg:h-24 xl:w-32 xl:h-32 xl:mx-3',
  // THANKS: 96px on desktop.
  thanks: 'w-12 h-12 mx-1 sm:w-16 sm:h-16 sm:mx-2 lg:w-24 lg:h-24',
  // Long words up to ~9 letters (story titles like ASTRALINK): fits a phone,
  // 80px on desktop.
  long: 'w-8 h-8 mx-0.5 sm:w-12 sm:h-12 sm:mx-1 lg:w-20 lg:h-20 lg:mx-2',
  // The WORKS / RESUME / CONTACT buttons in the hero: 32px on desktop,
  // 16px on phones so all three words fit on one line.
  nav: 'w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8',
};

const pxBySize: Record<Size, number> = {
  hero: 128,
  wide: 128,
  thanks: 96,
  long: 80,
  nav: 32,
};

const defaultDelays = [1, 2, 3, 2, 1];

type Props = {
  word: string;
  size?: Size;
  /** float-delay index (1-4) per letter; defaults to the 1-2-3-2-1 pattern. */
  delays?: number[];
  /** Use the scroll-evaporating <img> instead of next/image. */
  evaporate?: boolean;
  float?: boolean;
  priority?: boolean;
  className?: string;
};

export default function LetterWord({
  word,
  size = 'hero',
  delays,
  evaporate = false,
  float = true,
  priority = true,
  className = '',
}: Props) {
  const px = pxBySize[size];
  return (
    <div className={`flex ${className}`}>
      {word.split('').map((letter, i) => {
        const delay = delays?.[i] ?? defaultDelays[i % defaultDelays.length];
        const floatClass = float ? `float-animation float-delay-${delay}` : '';
        return (
          <div
            key={`${letter}-${i}`}
            className={`${boxBySize[size]} ${floatClass}`}
          >
            {evaporate ? (
              <EvaporateImage
                src={`/${letter}.png`}
                alt={letter}
                width={px}
                height={px}
                className='w-full h-auto'
              />
            ) : (
              <Image
                src={`/${letter}.png`}
                alt={letter}
                width={px}
                height={px}
                priority={priority}
                className='w-full h-auto'
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
