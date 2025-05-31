'use client';

import { useEffect } from 'react';

const HeartRain = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.innerText = '❤';
      heart.style.position = 'fixed';
      heart.style.top = '-1vh';
      heart.style.fontSize = '20px';
      heart.style.color = '#FFB6C1';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default HeartRain;
