'use client';

import React from 'react';
import Image from 'next/image';
import { FaShieldAlt, FaTools, FaUserCog, FaCheckCircle, FaComments, FaChartLine, FaClipboardCheck, FaHeadset } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaUserCog className="w-16 h-16 text-blue-600" />,
      title: '전문 기술력',
      description: '10년 이상의 ECU 맵핑 경험을\n보유한 전문가들이 안전하고\n효과적인 튜닝을 제공합니다.',
      image: '/images/service-features/expert.png'
    },
    {
      icon: <FaShieldAlt className="w-16 h-16 text-blue-600" />,
      title: '안전성 보장',
      description: '엔진의 수명과 내구성을\n고려한 안전한 튜닝으로,\n장기적인 신뢰성을 보장합니다.',
      image: '/images/service-features/safety.png'
    },
    {
      icon: <FaTools className="w-16 h-16 text-blue-600" />,
      title: '맞춤형 솔루션',
      description: '각 농기계의 특성과\n작업 환경을 고려한\n최적의 맞춤형 튜닝을 제공합니다.',
      image: '/images/service-features/custom.png'
    },
    {
      icon: <FaCheckCircle className="w-16 h-16 text-blue-600" />,
      title: '품질 보증',
      description: '모든 튜닝 작업에 대해\n품질 보증과 30일 AS 제공을 통해\n고객의 기계성능을 보장합니다.',
      image: '/images/service-features/quality.png'
    }
  ];

  const steps = [
    {
      icon: <FaComments className="w-16 h-16 text-blue-600" />,
      number: '01',
      title: '상담/진단',
      description: '현재 농기계의 상태와 성능을 진단하고, 고객님의 요구사항을 정확히 파악합니다.'
    },
    {
      icon: <FaChartLine className="w-16 h-16 text-blue-600" />,
      number: '02',
      title: '분석/맵핑',
      description: '농기계의 특성과 작업 환경을 고려한 최적의 맵핑 설계를 진행합니다.'
    },
    {
      icon: <FaClipboardCheck className="w-16 h-16 text-blue-600" />,
      number: '03',
      title: '테스트/검증',
      description: '현장 테스트를 통해 성능 향상과 안전성을 철저히 검증합니다.'
    },
    {
      icon: <FaHeadset className="w-16 h-16 text-blue-600" />,
      number: '04',
      title: '사후 관리',
      description: '지속적인 모니터링과 필요시 미세 조정을 통해 최적의 상태를 유지합니다.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-5xl font-bold text-center mb-6">
            TracForce(트랙포스)의 특별한 강점
          </h2>
          <p className="text-2xl text-gray-600 text-center mb-16">
            안전하고 검증된 ECU 맵핑 서비스를 제공합니다
          </p>
        </AnimatedSection>

        {/* 특징 카드 - 이미지와 텍스트를 좌우로 배치 */}
        <div className="space-y-16 mb-20">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}>
                <div className="md:w-1/2">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                    style={{ minHeight: "320px" }}
                  />
                </div>
                <div className="p-10 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-3xl font-semibold ml-5">{feature.title}</h3>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-600 whitespace-pre-line leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ECU 맵핑 과정 섹션 */}
        <div className="mt-24">
          <AnimatedSection>
            <h2 className="text-5xl font-bold text-center mb-6">
              체계적이고 안전한 ECU 맵핑 과정
            </h2>
            <p className="text-2xl text-gray-600 text-center mb-16">
              TracForce(트랙포스)는 철저한 프로세스로 안전하고 효과적인 ECU 맵핑 서비스를 제공합니다
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg relative h-[340px] flex flex-col justify-between">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-gray-200">
                    {step.number}
                  </div>
                  <div>
                    <div className="mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-xl text-gray-600">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={1.0}>
            <div className="text-center bg-white p-10 rounded-lg shadow-lg">
              <p className="text-xl md:text-2xl text-gray-600 mb-10">
                TracForce(트랙포스)의 전문가와 함께 농기계의 성능을 최적화하세요.<br />
                체계적인 과정을 통해 안전하고 효과적인 결과를 제공합니다.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                무료 상담 신청하기
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures; 