'use client';

import React from 'react';
import AnimatedSection from '../AnimatedSection';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">
            전문가와 상담하세요
          </h2>
          <p className="text-xl text-center mb-16 text-blue-100">
            TracForce의 ECU 맵핑 전문가가 최적의 솔루션을 제안해드립니다
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-gray-800 text-2xl font-semibold mb-2">
                  무료 상담 신청
                </h3>
                <p className="text-gray-600">
                  아래 양식을 작성하시면 전문가가 빠르게 연락드립니다
                </p>
              </div>

              <div className="relative">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfQFGZqZZPxe_QWvvZKvpYGVJ5Hy1_YPPVwqxHJGcQiR7qkQw/viewform?embedded=true"
                  className="w-full min-h-[800px] border-0"
                  title="상담 신청 양식"
                >
                  로딩 중...
                </iframe>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  * 상담 신청 후 24시간 이내에 연락드립니다.<br />
                  * 문의사항이 있으시면 전화로도 연락 가능합니다.
                </p>
                <a 
                  href="tel:010-7465-5179"
                  className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  전화 상담하기
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA; 