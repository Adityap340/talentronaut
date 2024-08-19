import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import png1 from '../assets/png1.png';
import png2 from '../assets/png2.png';
import png3 from '../assets/png3.png';

const Ani2 = () => {
  const containerRef = useRef(null);
  const images = [png1, png2, png3];
  const imageCount = images.length;

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.querySelectorAll('.image');

    gsap.set(imageElements, { opacity: 0, scale: 0.9 });

    const tl = gsap.timeline({ repeat: -1 });

    images.forEach((image, index) => {
      const imageElement = imageElements[index];

      tl.to(imageElement, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      })
      .to(imageElement, {
        duration: 1,
        opacity: 0,
        scale: 0.9,
        ease: 'power3.in',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-auto h-screen mx-auto flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute flex items-center justify-center"
          style={{ zIndex: imageCount - index }}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="image w-full h-full object-cover"
            style={{ zIndex: 1 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Ani2;