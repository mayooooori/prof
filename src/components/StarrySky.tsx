'use client';

import { useMemo } from 'react';

type Star = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  isDot: boolean;
};

// deterministic-ish PRNG so server & client render the same layout
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const GOLD = '#F0B03E';

export default function StarrySky() {
  const stars = useMemo<Star[]>(() => {
    const rand = seeded(20260615);
    const list: Star[] = [];
    // 5-point gold stars
    for (let i = 0; i < 60; i++) {
      list.push({
        left: rand() * 100,
        top: rand() * 100,
        size: 10 + rand() * 18,
        delay: rand() * 5,
        duration: 3.6 + rand() * 3.2,
        isDot: false,
      });
    }
    // tiny specks
    for (let i = 0; i < 130; i++) {
      list.push({
        left: rand() * 100,
        top: rand() * 100,
        size: 2 + rand() * 3,
        delay: rand() * 5,
        duration: 3.2 + rand() * 2.8,
        isDot: true,
      });
    }
    return list;
  }, []);

  return (
    // Fixed full-page layer behind all content: paints the navy watercolour
    // texture and the twinkling stars site-wide. Being a real fixed element
    // (not background-attachment: fixed) keeps scrolling smooth.
    <div
      className='fixed inset-0 overflow-hidden pointer-events-none'
      style={{
        zIndex: -1,
        backgroundImage: "url('/night-texture.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className='star-twinkle'
          style={{
            position: 'absolute',
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          {s.isDot ? (
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                background: GOLD,
              }}
            />
          ) : (
            <svg viewBox='0 0 24 24' width='100%' height='100%'>
              <path
                d='M12 0 L14.6 8.4 L23.4 8.4 L16.3 13.6 L19 22 L12 16.8 L5 22 L7.7 13.6 L0.6 8.4 L9.4 8.4 Z'
                fill={GOLD}
              />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}
