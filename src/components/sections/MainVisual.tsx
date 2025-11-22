'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

const MainVisual = () => {
  const images = [
    {
      src: '/images/main-visual/logo.png',
      alt: '트랙포스 로고'
    },
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
      alt: '파워튜닝 장비'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 이미지 슬라이더 타이머
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    // CSS 키프레임 추가
    const styles = document.createElement('style');
    styles.innerHTML = `
      @keyframes slowZoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.05); }
      }
    `;
    if (!document.getElementById('animation-styles')) {
      styles.id = 'animation-styles';
      document.head.appendChild(styles);
    }

    return () => {
      clearInterval(timer);
      // 클린업 시 스타일 제거
      const styleElement = document.getElementById('animation-styles');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20 bg-gray-800"
      style={{ 
        backgroundImage: `url(${images[currentImageIndex].src})`,
        backgroundSize: 'cover',
      }}
    >
      {/* 이미지 슬라이더 */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-gray-900 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={100}
            className={`${image.src.includes('logo.png') ? 'object-contain' : 'object-cover'} scale-[1.02] transform-gpu`}
            style={{
              animation: index === currentImageIndex ? 'slowZoom 5s ease-in-out forwards' : 'none'
            }}
            sizes="100vw"
          />
          {/* 이미지 위에 그라데이션 오버레이 추가 - 더 밝게 조정 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
      ))}
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center mt-32 md:mt-0 h-full">
        <AnimatedSection>
          <div className="max-w-3xl w-full mx-auto text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
              <div className="flex justify-center items-center mb-4 md:mb-5">
                <span className="text-yellow-400 text-5xl md:text-6xl lg:text-8xl drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">트랙포스</span>
              </div>
              <div className="mb-2">
                <span className="text-sm md:text-base text-gray-300">(TracForce Power Tuning)</span>
              </div>
              <span className="block mt-6 text-white text-3xl md:text-4xl lg:text-5xl">감춰진 마법의 힘을 찾으세요!</span>
            </h1>
            <p className="text-2xl text-white/95 mb-16 max-w-3xl mx-auto leading-loose bg-black/25 py-4 px-5 rounded-xl backdrop-blur-sm shadow-lg">
              전문 파워튜닝 기술로 농기계의 효율성과 출력을 최적화하여<br />
              <span className="font-bold text-yellow-300">최대 성능</span>을 이끌어냅니다
            </p>
          </div>
        </AnimatedSection>

        
        {/* 슬라이더 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20" role="tablist" aria-label="이미지 슬라이더">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
                index === currentImageIndex 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-gray-400/50 hover:bg-gray-300/70'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`이미지 ${index + 1}번으로 이동`}
              aria-selected={index === currentImageIndex}
              role="tab"
              tabIndex={index === currentImageIndex ? 0 : -1}
            />
          ))}
        </div>

      </div>

      {/* 필터 효과 - 더 밝게 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 z-[1]"></div>
    </section>
  );
};

export default MainVisual; 