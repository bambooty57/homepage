'use client';

import React, { useState, useEffect } from 'react';
import AnimatedSection from '../AnimatedSection';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

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

  const scrollToNextSection = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 이미지 슬라이더 */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover scale-[1.02] transform-gpu"
            style={{
              animation: index === currentImageIndex ? 'slowZoom 5s ease-in-out forwards' : 'none'
            }}
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
              <span className="font-bold text-yellow-300">최대 성능</span>을 이끌어냅니다<br />
              <span className="font-bold text-green-400">요소수(SCR) 문제, 출력저하 고민도 트랙포스가 해결!</span>
            </p>
          </div>
        </AnimatedSection>

        {/* 요소수 관련 이미지 3개 - 메인 텍스트와 CTA 버튼 사이 */}
        <AnimatedSection delay={0.2}>
          <div className="w-full max-w-7xl mx-auto mt-16 mb-20">
            <div className="flex justify-center items-end gap-6 flex-wrap px-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/service-features/scr-warning.png"
                  alt="SCR 막힘 경고"
                  className="w-[340px] h-auto rounded-xl shadow-2xl border-4 border-red-500 bg-white hover:scale-105 transition-transform duration-300"
                />
                <p className="text-red-500 font-bold mt-3 text-lg">SCR 막힘 → 막대한 수리비!</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/service-features/dpf-warning.png"
                  alt="DPF 경고등"
                  className="w-[340px] h-auto rounded-xl shadow-2xl border-4 border-orange-500 bg-white hover:scale-105 transition-transform duration-300"
                />
                <p className="text-orange-500 font-bold mt-3 text-lg">DPF 경고등 → 출력저하!</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/service-features/system-diagram.png"
                  alt="요소수(SCR) 시스템 구조"
                  className="w-[340px] h-auto rounded-xl shadow-2xl border-4 border-green-500 bg-white hover:scale-105 transition-transform duration-300"
                />
                <p className="text-green-500 font-bold mt-3 text-lg">트랙포스 해결책!</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* 슬라이더 인디케이터 - 버튼 위로 이동 */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-gray-400/50 hover:bg-gray-300/70'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`이미지 ${index + 1}번으로 이동`}
            />
          ))}
        </div>

        {/* 버튼 - 최하단 중앙 고정 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <AnimatedSection delay={0.3}>
            <a 
              href="#contact" 
              className="btn-primary group text-lg px-8 py-4 bg-yellow-500 hover:bg-yellow-600 font-bold"
            >
              <span>무료 상담 신청하기</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* 필터 효과 - 더 밝게 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 z-[1]"></div>
    </section>
  );
};

export default MainVisual; 