'use client';

import React from 'react';
import AnimatedSection from '../AnimatedSection';

const ProblemStatement = () => {
  const problems = [
    {
      title: '비효율적인 연료 소비',
      description: '표준 설정의 농기계는 실제 작업 환경에 최적화되어 있지 않아 연료 효율이 떨어집니다.',
      icon: '💧'
    },
    {
      title: '낮은 작업 효율성',
      description: '출력 제한으로 인해 무거운 작업이나 경사지에서 성능이 크게 저하됩니다.',
      icon: '⏱️'
    },
    {
      title: '높은 유지 비용',
      description: '비효율적인 운영은 장기적으로 부품 수명을 단축시키고 유지 비용을 증가시킵니다.',
      icon: '💰'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">
            농기계 성능에 대한 고민이 있으신가요?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            많은 농업인들이 경험하는 일반적인 문제들입니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <AnimatedSection delay={0.2}>
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="/images/problem-statement/cost-saving.jpg.jpg"
                alt="농기계 성능 문제"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6">
            {problems.map((problem, index) => (
              <AnimatedSection key={index} delay={0.4 + (index * 0.2)}>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start h-full">
                  <div className="bg-blue-100 rounded-full p-3 text-3xl mr-4 flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={1.2}>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              TracForce의 ECU 맵핑 서비스로 이러한 문제들을 해결하실 수 있습니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemStatement; 