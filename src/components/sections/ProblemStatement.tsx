'use client';

import React from 'react';
import AnimatedSection from '../AnimatedSection';

const ProblemStatement = () => {
  const problems = [
    {
      title: '비효율적인 연료 소비',
      description: '표준 설정 농기계는 작업 환경에 최적화되지 않아 연료가 많이 소모됩니다.',
      icon: '💧'
    },
    {
      title: '낮은 작업 효율성',
      description: '출력 제한으로 무거운 작업이나 경사지에서 작업 효율이 크게 떨어집니다.',
      icon: '⏱️'
    },
    {
      title: '높은 유지 비용',
      description: '비효율 운영은 부품 수명을 단축시키고 유지 비용을 증가시킵니다.',
      icon: '💰'
    },
    {
      title: '속도제한으로 인한 이동 지연',
      description: '속도제한으로 인해 작업지 이동 시간이 오래 걸려 작업 효율성이 떨어집니다.',
      icon: '🚜'
    },
    {
      title: 'DPF/요소수 관련 문제',
      description: 'DPF와 요소수로 인한 잦은 고장과 막힘 문제로 작업 중단이 발생합니다.',
      icon: '🔧'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl font-bold text-center mb-6">
            농기계 성능에 대한 고민이 있으신가요?
          </h2>
          <p className="text-2xl text-gray-600 text-center mb-16">
            많은 농업인들이 경험하는 일반적인 문제들입니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-12">
          <AnimatedSection delay={0.2} className="md:col-span-5">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="/images/problem-statement/cost-saving.jpg.jpg"
                alt="ECU 진단 및 분석"
                className="w-full h-full object-cover"
                style={{ minHeight: '550px' }}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:col-span-7">
            {problems.map((problem, index) => (
              <AnimatedSection key={index} delay={0.4 + (index * 0.2)}>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center h-full">
                  <div className="bg-blue-100 rounded-full p-4 text-4xl mr-5 flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-xl text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={1.2}>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              TracForce(트랙포스)의 ECU 맵핑 서비스로 이러한 문제들을 해결하실 수 있습니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemStatement; 