import React from 'react';
import Image from 'next/image';
import { FaShieldAlt, FaTools, FaUserCog, FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaUserCog className="w-12 h-12 text-blue-600" />,
      title: '전문 기술력',
      description: '10년 이상의 ECU 맵핑 경험을 보유한 전문가들이 안전하고 효과적인 튜닝을 제공합니다.'
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 text-blue-600" />,
      title: '안전성 보장',
      description: '엔진의 수명과 내구성을 고려한 안전한 튜닝으로, 장기적인 신뢰성을 보장합니다.'
    },
    {
      icon: <FaTools className="w-12 h-12 text-blue-600" />,
      title: '맞춤형 솔루션',
      description: '각 농기계의 특성과 작업 환경을 고려한 최적의 맞춤형 튜닝을 제공합니다.'
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-blue-600" />,
      title: '품질 보증',
      description: '모든 튜닝 작업에 대해 품질 보증을 제공하여 고객의 투자를 보호합니다.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">
            TracForce의 특별한 강점
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            안전하고 검증된 ECU 맵핑 서비스를 제공합니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.8}>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/service-features/ecu-testing.jpg"
                alt="ECU 맵핑 테스트 과정"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.0}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">
                신뢰할 수 있는 ECU 맵핑 서비스
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span>실시간 데이터 모니터링을 통한 안전한 튜닝</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span>현장 테스트를 통한 성능 검증</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span>전문 기술진의 체계적인 작업 과정</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <span>작업 후 지속적인 사후 관리 지원</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures; 