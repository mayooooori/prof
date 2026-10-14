import Image from 'next/image';
import { Courier_Prime } from 'next/font/google';

// Typewriter text on paper cards: fits the collage, and stays readable for
// longer text where the handwriting font would not.
export const typewriter = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'] });

// Tape strips, slightly different on every card.
const tapes = [
  'left-1/2 -translate-x-1/2 -rotate-3',
  'left-10 rotate-6',
  'right-12 -rotate-6',
  'left-1/3 rotate-2',
];

const PAPER_TAPE = '#e9dcb8';

export function Paper({
  children,
  className = '',
  tape = 0,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  tape?: number;
  /** Brand colour: tints the tape and draws a coloured left edge. */
  accent?: string;
}) {
  return (
    <div
      className={`${typewriter.className} ${className} relative bg-[#f4ecdc] text-[#1f1b16] rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.4)] px-5 py-6 sm:px-8 sm:py-7 ${accent ? 'border-l-[6px]' : ''}`}
      style={accent ? { borderLeftColor: accent } : undefined}
    >
      {/* Tape */}
      <span
        aria-hidden
        className={`absolute -top-3 ${tapes[tape % tapes.length]} w-20 sm:w-24 h-6 shadow-sm`}
        style={{ backgroundColor: `${accent ?? PAPER_TAPE}bb` }}
      />
      {children}
    </div>
  );
}

const bowClass =
  'pointer-events-none absolute h-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]';

// Padding and bow placement. `roomy` suits a card with the page to itself;
// `snug` suits a narrow column (beside the frog in About): tighter padding
// and smaller bows until the column widens at `lg`.
const sizes = {
  roomy: {
    pad: '!px-9 !py-10 sm:!px-14 sm:!py-12',
    topLeft: 'w-14 sm:w-24 -top-7 -left-7 sm:-top-10 sm:-left-10',
    bottomRight: 'w-14 sm:w-24 -bottom-7 -right-7 sm:-bottom-10 sm:-right-10',
  },
  snug: {
    pad: '!px-5 !py-8 sm:!px-7 sm:!py-9 lg:!px-14 lg:!py-10',
    topLeft: 'w-10 sm:w-14 lg:w-24 -top-5 -left-5 sm:-top-7 sm:-left-7 lg:-top-10 lg:-left-10',
    bottomRight: 'w-10 sm:w-14 lg:w-24 -bottom-5 -right-1 sm:-bottom-7 sm:-right-5 lg:-bottom-10 lg:-right-10',
  },
};

/** A paper card with a chrome bow tied on the top-left and bottom-right
 *  corners. Padding keeps the bows clear of the text. */
export function BowCard({
  children,
  className = '',
  size = 'roomy',
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof sizes;
}) {
  const z = sizes[size];
  return (
    <Paper className={`${className} ${z.pad}`} tape={0}>
      <Image
        src='/bow.png'
        alt=''
        aria-hidden
        width={499}
        height={499}
        className={`${bowClass} ${z.topLeft} -rotate-[18deg]`}
      />
      {children}
      <Image
        src='/bow.png'
        alt=''
        aria-hidden
        width={499}
        height={499}
        className={`${bowClass} ${z.bottomRight} rotate-[18deg]`}
      />
    </Paper>
  );
}
