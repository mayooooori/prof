'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div
        className='fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900 z-50'
        style={{
          transition: 'opacity 2s ease-out',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className='flex items-center justify-center w-full h-full'>
          <Image
            src='/cat.gif'
            alt='Welcome!'
            width={200}
            height={200}
            className='rounded-full'
            unoptimized
            priority
          />
        </div>
      </div>
    )
  );
};

export default Popup;
