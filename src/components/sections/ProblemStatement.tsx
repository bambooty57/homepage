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
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center mb-4">
          농기계 성능의 한계
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          제조사의 표준 설정은 모든 환경에 최적화되어 있지 않습니다
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedSection delay={0.2}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/problem-statement/cost-saving.jpg.jpg"
              alt="농기계 성능 문제"
              className="w-full h-auto"
            />
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={0.4 + (index * 0.2)}>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 text-3xl mr-4 flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement; 