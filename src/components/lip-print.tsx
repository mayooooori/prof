'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const lipPrintsData = [
  { src: '/lip-print2.png', opacity: 'opacity-30' },
  { src: '/lip-print1.png', opacity: 'opacity-60' },
];

const randomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function LipPrints() {
  interface Print {
    id: number;
    src: string;
    size: number;
    rotate: number;
    opacity: string;
    top: number;
    left: number;
  }

  const [prints, setPrints] = useState<Print[]>([]);

  useEffect(() => {
    const newPrints = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      src: lipPrintsData[randomValue(0, lipPrintsData.length - 1)].src,
      size: randomValue(40, 120),
      rotate: randomValue(-30, 30),
      opacity: lipPrintsData[randomValue(0, lipPrintsData.length - 1)].opacity,
      top: randomValue(0, 100),
      left: randomValue(0, 100),
    }));
    setPrints(newPrints);
  }, []);

  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden'>
      {prints.map((print) => (
        <Image
          key={print.id}
          src={print.src}
          alt='Lip Print'
          width={print.size}
          height={print.size}
          className={`absolute ${print.opacity}`}
          style={{
            top: `${print.top}%`,
            left: `${print.left}%`,
            transform: `rotate(${print.rotate}deg)`,
          }}
        />
      ))}

      {/* Grunge Overlay */}
      {/* <div className='absolute inset-0 bg-[url(/grunge-texture.png)] bg-cover bg-center mix-blend-overlay opacity-20' /> */}
    </div>
  );
}
