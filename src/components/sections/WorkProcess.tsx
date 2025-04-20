import React from 'react';
import { FaComments, FaChartLine, FaClipboardCheck, FaHeadset } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';

const WorkProcess = () => {
  const steps = [
    {
      icon: <FaComments className="w-12 h-12 text-blue-600" />,
      number: '01',
      title: '상담/진단',
      description: '현재 농기계의 상태와 성능을 진단하고, 고객님의 요구사항을 정확히 파악합니다.'
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-600" />,
      number: '02',
      title: '분석/맵핑',
      description: '농기계의 특성과 작업 환경을 고려한 최적의 맵핑 설계를 진행합니다.'
    },
    {
      icon: <FaClipboardCheck className="w-12 h-12 text-blue-600" />,
      number: '03',
      title: '테스트/검증',
      description: '현장 테스트를 통해 성능 향상과 안전성을 철저히 검증합니다.'
    },
    {
      icon: <FaHeadset className="w-12 h-12 text-blue-600" />,
      number: '04',
      title: '사후 관리',
      description: '지속적인 모니터링과 필요시 미세 조정을 통해 최적의 상태를 유지합니다.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">
            체계적이고 안전한 ECU 맵핑 과정
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            TracForce(트랙포스)는 철저한 프로세스로 안전하고 효과적인 ECU 맵핑 서비스를 제공합니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-gray-50 p-8 rounded-lg relative">
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-200">
                  {step.number}
                </div>
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1.0}>
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-600 mb-8">
              TracForce(트랙포스)의 전문가와 함께 농기계의 성능을 최적화하세요.<br />
              체계적인 과정을 통해 안전하고 효과적인 결과를 제공합니다.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              무료 상담 신청하기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorkProcess; 