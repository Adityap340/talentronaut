import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import png6 from '../assets/png6.png';
import png7 from '../assets/png7.png';
import png8 from '../assets/png8.png';
import png9 from '../assets/png9.png';
import png10 from '../assets/png10.png';

const Ani2 = () => {
  const containerRef = useRef(null);
  const logos = [png10, png6, png7, png8, png9];

  useEffect(() => {
    const container = containerRef.current;
    const logoElements = container.querySelectorAll('.logo');
    const shadowElements = container.querySelectorAll('.shadow');

    gsap.set(logoElements, { autoAlpha: 0, scale: 0.8, y: 10 });
    gsap.set(shadowElements, { autoAlpha: 0, scale: 0.8, y: 10 });

    const tl = gsap.timeline({ repeat: -1 });

    logoElements.forEach((logo, index) => {
      const shadow = shadowElements[index];
      tl.to([shadow, logo], {
        duration: 0.5,
        autoAlpha: 1,
        scale: 1,
        y: 0,
        ease: 'power3.out',
        stagger: 0.1
      })
      .to([logo, shadow], {
        duration: 0.5,
        autoAlpha: 0,
        scale: 0.8,
        y: 10,
        ease: 'power3.in',
        delay: 1.5,
        stagger: 0.1
      });
    });

  }, []);

  return (
    <div ref={containerRef} className="relative w-64 h-64 mx-auto mt-20">
      {logos.map((logo, index) => (
        <div key={index} className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="shadow absolute top-0 left-0 w-full h-full rounded-3xl"
            style={{
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // Shadow effect
              transform: 'translateY(-5px)', // Slightly lift the shadow
            }}
          ></div>
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Ani2;
