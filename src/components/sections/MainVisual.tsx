import React from 'react';
import AnimatedSection from '../AnimatedSection';

const MainVisual = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <img
          src="/src/images/main-visual/hero-tractor-sunset.jpg.jpg"
          alt="농기계 ECU 매핑"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              무료 상담 신청
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              서비스 알아보기
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MainVisual; 