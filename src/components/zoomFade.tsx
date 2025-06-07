'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'ref'>;

export default function ZoomFadeImage({
  className = '',
  style,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.7;
      const end = -rect.height;

      const rawProgress = 1 - (rect.top - end) / (start - end);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 1 - progress,
        transform: `scale(${1 + progress * 0.5}) translateY(${
          -progress * 30
        }px) translateX(-50%)`,
        transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      <Image {...props} />
    </div>
  );
}
