'use client';

import React from 'react';
import AnimatedSection from '../AnimatedSection';

const Solution = () => {
  const benefits = [
    {
      title: '출력 향상',
      description: '엔진 출력과 토크를 최적화하여\n작업 효율성을 높입니다.',
      percentage: '15-30%',
      image: '/images/benefits/power-boost.jpg.jpg'
    },
    {
      title: '연비 개선',
      description: '연료 소비를 최적화하여\n운영 비용을 절감합니다.',
      percentage: '5-10%',
      image: '/images/benefits/fuel-efficiency.jpg.jpg'
    },
    {
      title: '맞춤 설정',
      description: '트랙터 경운작업, 베일작업, 콤바인작업 등\n개인별 맞춤',
      percentage: '15-30% 향상',
      image: '/images/benefits/cost-saving.jpg.jpg'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="text-primary">TracForce(트랙포스)</span>의 해결책
          </h2>
          <p className="text-2xl text-gray-600 text-center mb-16">
            맞춤형 ECU 매핑 기술로 농기계의 성능을 최적화하고 효율성을 높이세요
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8 order-2 md:order-1">
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-3xl font-semibold mb-5">ECU 맵핑이란?</h3>
                <p className="text-xl text-gray-600">
                  ECU(Engine Control Unit)는 엔진의 성능을 제어하는 컴퓨터입니다. 
                  맵핑은 이 ECU의 설정을 최적화하여 엔진의 출력, 토크, 연비 등을  
                  개선하는 기술입니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.2} className="order-1 md:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/ecu-mapping/engine-tuning.jpg.jpg"
                alt="ECU 맵핑 프로세스"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={0.6 + (index * 0.2)}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-semibold mb-3">{benefit.title}</h4>
                  {benefit.title === '맞춤 설정' ? (
                    <div className="text-xl text-gray-600 mb-4">
                      <p>트랙터 경운작업, 베일작업, 콤바인작업 등</p>
                      <p>개인별 맞춤</p>
                    </div>
                  ) : (
                    <p className="text-xl text-gray-600 mb-4 whitespace-pre-line">{benefit.description}</p>
                  )}
                  <p className="text-3xl font-bold text-blue-600">{benefit.percentage}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1.2}>
          <div className="text-center">
            <div className="mb-10 max-w-4xl mx-auto">
              <img
                src="/images/benefits/performance-graph.jpg.jpg"
                alt="성능 그래프"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              TracForce의 ECU 맵핑은 안전하고 검증된 기술로 진행됩니다.
              각 농기계의 특성을 고려한 맞춤형 튜닝으로 최적의 결과를 제공합니다.
            </p>
            <a href="#process" className="btn-primary text-xl px-10 py-5">
              자세한 과정 알아보기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Solution; 