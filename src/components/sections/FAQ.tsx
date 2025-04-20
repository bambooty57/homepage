'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'ECU 맵핑이 농기계에 안전한가요?',
      answer: '네, 안전합니다. TracForce(트랙포스)의 ECU 맵핑은 제조사가 설정한 안전 한계 내에서 이루어지며, 수년간의 연구와 테스트를 통해 검증된 방식을 사용합니다. 또한 모든 맵핑에는 품질 보증이 제공됩니다.'
    },
    {
      question: '어떤 농기계에 ECU 맵핑이 가능한가요?',
      answer: '대부분의 현대식 디젤 엔진을 탑재한 농기계(트랙터, 콤바인 등)에 ECU 맵핑이 가능합니다. 구체적인 모델 적용 가능 여부는 상담을 통해 확인해 드립니다.'
    },
    {
      question: '성능이 얼마나 향상되나요?',
      answer: '일반적으로 출력은 15-30%, 연비는 5-15% 정도 개선됩니다. 단, 구체적인 향상 정도는 농기계의 모델, 상태, 사용 환경 등에 따라 차이가 있을 수 있습니다.'
    },
    {
      question: '맵핑 작업은 얼마나 걸리나요?',
      answer: '일반적으로 2-3시간 정도 소요됩니다. 작업 전 진단과 맵핑 후 테스트 시간을 포함한 시간입니다.'
    },
    {
      question: '맵핑 후 사후 관리는 어떻게 되나요?',
      answer: '맵핑 후 30일간 무상 점검 및 미세 조정을 제공합니다.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">자주 묻는 질문</h2>
      <p className="text-gray-600 text-center mb-12">
        TracForce(트랙포스) ECU 맵핑 서비스에 대해 자주 묻는 질문들을 모았습니다.
      </p>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all ${
                activeIndex === index ? 'bg-primary-50' : ''
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className={`transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </p>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          더 자세한 내용은 유튜브 채널에서 확인하세요
        </p>
        <a
          href="https://youtube.com/tracforce"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <div className="relative w-96 h-54 mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/youtube-thumbnail.jpg"
              alt="TracForce(트랙포스) 유튜브 채널"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                영상으로 보기
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
} 