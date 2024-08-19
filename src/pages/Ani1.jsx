import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import png1 from '../assets/png1.png';
import png2 from '../assets/png2.png';
import png3 from '../assets/png3.png';
import png4 from '../assets/png4.png';
import png5 from '../assets/png5.png';
import png6 from '../assets/png6.png';
import png7 from '../assets/png7.png';
import png8 from '../assets/png8.png';
import png9 from '../assets/png9.png';
import png10 from '../assets/png10.png';

const logos = [
  png6,
  png7,
  png8,
  png9,
  png10,
  png6,
  png7,
  png8,
  png9,
  png10
 
];
const logos2 = [
  png1,
  png2,
  png3,
  png4,
  png5,
  png1,
  png2,
  png3,
  png4,
  png5
];

const Ani1 = () => {
  const carouselRefLeft = useRef(null);
  const carouselRefRight = useRef(null);

  useEffect(() => {
    const carouselLeft = carouselRefLeft.current;
    const carouselRight = carouselRefRight.current;
    const logoHeight = 80; // Height of each logo
    const gap = 16; // Space between logos
    const totalHeight = (logoHeight + gap) * logos.length; // Total height of the carousel

    // Create an infinite loop for the left column (moving up)
    gsap.fromTo(
      carouselLeft.children,
      { y: 0 },
      {
        y: `-${totalHeight}px`,
        ease: 'none',
        duration: 10,
        repeat: -1,
        stagger: 0, // Ensures all children move together
      }
    );

    // Create an infinite loop for the right column (moving down)
    gsap.fromTo(
      carouselRight.children,
      { y: `-${totalHeight}px` },
      {
        y: 0,
        ease: 'none',
        duration: 10,
        repeat: -1,
        stagger: 0, // Ensures all children move together
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-300">
      <div className="relative overflow-hidden min-h-screen w-[calc(80px*2+2px)]">
        <div
          className="absolute top-0 left-0 flex flex-col"
          style={{ width: '80px', height: '100%' }}
          ref={carouselRefLeft}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ height: '80px', marginBottom: '16px' }}
            >
              <img src={logo} alt={`logo-${index}`} className="w-20 h-20" />
            </div>
          ))}
          {/* Duplicate logos to ensure seamless scrolling */}
          {logos.map((logo, index) => (
            <div
              key={index + logos.length}
              className="flex-shrink-0"
              style={{ height: '80px', marginBottom: '16px' }}
            >
              <img src={logo} alt={`logo-${index + logos.length}`} className="w-20 h-20" />
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 left-[82px] flex flex-col"
          style={{ width: '80px', height: '100%' }}
          ref={carouselRefRight}
        >
          {logos2.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ height: '80px', marginBottom: '16px' }}
            >
              <img src={logo} alt={`logo-${index}`} className="w-20 h-20" />
            </div>
          ))}
          {/* Duplicate logos2 to ensure seamless scrolling */}
          {logos2.map((logo, index) => (
            <div
              key={index + logos.length}
              className="flex-shrink-0"
              style={{ height: '80px', marginBottom: '16px' }}
            >
              <img src={logo} alt={`logo-${index + logos.length}`} className="w-20 h-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ani1;
