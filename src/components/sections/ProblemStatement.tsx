import React from 'react';
import Image from 'next/image';
import { FaExclamationTriangle, FaGasPump, FaTools, FaMoneyBillWave } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';

const problems = [
  {
    icon: <FaExclamationTriangle className="w-8 h-8 text-red-500" />,
    title: '출력 부족',
    description: '무거운 작업 시 힘이 부족하여 작업 효율이 떨어지는 문제'
  },
  {
    icon: <FaGasPump className="w-8 h-8 text-orange-500" />,
    title: '높은 연료 소비',
    description: '기본 세팅으로는 연료 효율이 최적화되어 있지 않아 불필요한 비용이 발생합니다.'
  },
  {
    icon: <FaTools className="w-8 h-8 text-yellow-500" />,
    title: '잦은 정비',
    description: '엔진 성능 저하로 인한 잦은 정비와 수리 비용 발생'
  },
  {
    icon: <FaMoneyBillWave className="w-8 h-8 text-green-500" />,
    title: '수익성 감소',
    description: '작업 효율 저하와 비용 증가로 인한 수익성 하락'
  },
  {
    title: '제한된 성능',
    description: '공장 출고 상태의 ECU 설정은 보수적이어서 기계의 실제 잠재력을 발휘하지 못합니다.'
  },
  {
    title: '작업 효율 저하',
    description: '출력과 토크가 최적화되지 않아 작업 속도와 생산성이 떨어집니다.'
  }
];

const ProblemStatement = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 문제 상황 이미지 */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/problem-statement/tractor-problem.jpg"
              alt="농기계 문제 상황"
              fill
              className="object-cover"
            />
          </div>

          {/* 문제 목록 */}
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            TracForce의 ECU 맵핑 서비스로 이러한 문제들을 해결하실 수 있습니다.
          </p>
          <a href="#solution" className="btn-primary">
            해결 방안 알아보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement; 