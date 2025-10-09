'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPScrollAnimation() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    gsap.fromTo(
      boxRef.current,
      { 
        opacity: 0, 
        scale: 0.8,
        rotation: -10 
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div 
      ref={boxRef}
      className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-xl"
    >
      <h3 className="text-white text-2xl font-bold">GSAP Scroll Animation</h3>
      <p className="text-white/90 mt-2">This animates when you scroll to it!</p>
    </div>
  );
}
