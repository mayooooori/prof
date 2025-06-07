'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

export default function EvaporateImage({
  src,
  style,
  className = '',
  ...rest
}: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setOpacity(ratio);

        const offset = (1 - ratio) * 70;
        setTranslateY(-offset);
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      style={{
        ...style,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      className={`transition-opacity transition-transform duration-700 ease-out ${className}`}
      {...rest}
    />
  );
}
