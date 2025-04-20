import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import mappingProcessImage from '@/images/ecu-mapping/mapping-process.jpg';

const Solution = () => {
  const benefits = [
    {
      title: '출력 향상',
      description: '엔진 출력과 토크를 최적화하여 작업 효율성을 높입니다.',
      percentage: '15-30%'
    },
    {
      title: '연비 개선',
      description: '연료 소비를 최적화하여 운영 비용을 절감합니다.',
      percentage: '5-15%'
    },
    {
      title: '맞춤 설정',
      description: '각 농기계의 특성과 작업 환경에 맞는 최적의 세팅을 제공합니다.',
      percentage: '100%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">
            ECU 맵핑으로 농기계의 잠재력을 끌어내세요
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            TracForce의 전문 ECU 맵핑 기술로 농기계의 성능을 최적화합니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={0.2}>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={mappingProcessImage}
                alt="ECU 맵핑 프로세스"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">ECU 맵핑이란?</h3>
                <p className="text-gray-600">
                  ECU(Engine Control Unit)는 엔진의 성능을 제어하는 컴퓨터입니다. 
                  맵핑은 이 ECU의 설정을 최적화하여 엔진의 출력, 토크, 연비 등을 
                  개선하는 기술입니다.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={0.6 + (index * 0.2)}>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 mb-2">{benefit.description}</p>
                    <p className="text-2xl font-bold text-blue-600">{benefit.percentage}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        <AnimatedSection delay={1.2}>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              TracForce의 ECU 맵핑은 안전하고 검증된 기술로 진행됩니다.
              각 농기계의 특성을 고려한 맞춤형 튜닝으로 최적의 결과를 제공합니다.
            </p>
            <a href="#process" className="btn-primary">
              자세한 과정 알아보기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Solution; 