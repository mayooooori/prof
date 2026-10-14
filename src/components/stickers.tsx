import Image from 'next/image';

// Chrome and pink stickers scattered in the gaps. Each sits before the cards
// in its section, so cards paint over it and a sticker never covers text.
// Each one moves in its own way (see the sticker-* animations in
// globals.css); `delay` staggers repeats of the same sticker.
const stickers = {
  starRing: { src: '/stickers/chrome-star-ring.png', w: 420, h: 594, motion: 'sticker-orbit' },
  sparkles: { src: '/stickers/chrome-sparkles.png', w: 500, h: 500, motion: 'sticker-twinkle' },
  stars: { src: '/stickers/chrome-stars.png', w: 375, h: 666, motion: 'sticker-float' },
  heart: { src: '/stickers/pink-heart.png', w: 500, h: 500, motion: 'sticker-heartbeat' },
  butterfly: { src: '/stickers/pink-butterfly.png', w: 500, h: 500, motion: 'sticker-flutter' },
  bow: { src: '/stickers/pink-bow.png', w: 500, h: 500, motion: 'sticker-sway' },
};

export function Sticker({
  name,
  className,
  delay = 0,
}: {
  name: keyof typeof stickers;
  className: string;
  delay?: number;
}) {
  const st = stickers[name];
  return (
    <Image
      src={st.src}
      alt=''
      aria-hidden
      width={st.w}
      height={st.h}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      className={`pointer-events-none absolute h-auto drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] ${st.motion} ${className}`}
    />
  );
}
