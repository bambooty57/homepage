'use client';

import React, { useState, useEffect } from 'react';
import AnimatedSection from '../AnimatedSection';

const MainVisual = () => {
  const images = [
    {
      src: '/images/main-visual/hero-tractor-sunset.jpg.jpg',
      alt: '트랙터 일몰'
    },
    {
      src: '/images/main-visual/hero-combine-work.jpg.jpg',
      alt: '콤바인 작업'
    },
    {
      src: '/images/main-visual/equipment.jpg.jpg',
      alt: 'ECU 장비'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentImageIndex ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            농기계 성능의 <span className="text-blue-400">새로운 기준</span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            TracForce의 전문 ECU 매핑 서비스로 농기계의 잠재력을 극대화하세요.
            더 강력한 성능, 더 효율적인 연비를 경험하실 수 있습니다.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <div className="flex justify-center mb-16">
            <a 
              href="https://forms.gle/YourGoogleFormLink" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              무료 상담 신청
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.9}>
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-blue-400' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MainVisual; 