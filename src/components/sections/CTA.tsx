'use client';

import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { FaPhone } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              전문가와 상담하세요
            </h2>
            <p className="text-2xl text-blue-100 mb-12">
              TracForce의 파워튜닝 전문가가 최적의 솔루션을 제안해드립니다
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-xl p-10 shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  무료 상담 신청
                </h3>
                <p className="text-xl text-gray-600">
                  아래 양식을 작성하시면 전문가가 빠르게 연락드립니다
                </p>
              </div>

              <div className="text-center space-y-6">
                <a 
                  href="https://forms.gle/t39yNVivLXSPnLUs8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-blue-600 text-white text-xl rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
                >
                  상담 신청하기
                </a>
                <p className="text-lg text-blue-600 font-semibold">
                  * 상담 신청 시 5만원 할인권을 드립니다
                </p>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg mb-6">
                  * 상담 신청 후 24시간 이내에 연락드립니다.<br />
                  * 문의사항이 있으시면 전화로도 연락 가능합니다.
                </p>
                <a 
                  href="tel:010-7465-5179"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white text-xl rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 duration-200"
                >
                  <FaPhone className="mr-3 text-2xl" />
                  <span>010-7465-5179</span>
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