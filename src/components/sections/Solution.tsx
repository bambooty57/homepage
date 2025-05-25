'use client';

import React from 'react';
import AnimatedSection from '../AnimatedSection';

const Solution = () => {

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="text-primary">TracForce(트랙포스)</span>의 해결책
          </h2>
          <p className="text-2xl text-gray-600 text-center mb-16">
            맞춤형 파워튜닝 기술로 농기계의 성능을 최적화하고 효율성을 높이세요
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8 order-2 md:order-1">
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-3xl font-semibold mb-5">파워튜닝이란?</h3>
                <p className="text-xl text-gray-600">
                  ECU(Engine Control Unit)는 엔진의 성능을 제어하는 컴퓨터입니다. <br />
                  파워튜닝은 이 ECU의 설정을 최적화하여 엔진의 출력, 토크, 연비 등을 개선하는 기술입니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} className="order-1 md:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/ecu-mapping/engine-tuning.jpg.jpg"
                alt="파워튜닝 프로세스"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>



        <AnimatedSection delay={1.2}>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              TracForce의 파워튜닝은 안전하고 검증된 기술로 진행됩니다.
              각 농기계의 특성을 고려한 맞춤형 튜닝으로 출력을 20~30% 향상시킬 수 있으며, 최적의 결과를 제공합니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Solution; 