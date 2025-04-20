import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaComments } from 'react-icons/fa';
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="text-sm text-blue-200">전화 상담</p>
                  <a
                    href="tel:010-7465-5179"
                    className="text-2xl font-semibold hover:text-blue-200 transition-colors"
                  >
                    010-7465-5179
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="text-sm text-blue-200">주소</p>
                  <p className="text-lg">
                    광주광역시 남구 회재로 15-1
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaComments className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="text-sm text-blue-200">카카오톡 상담</p>
                  <a
                    href="#"
                    className="text-lg hover:text-blue-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TracForce 카카오톡 채널
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <h3 className="text-gray-800 text-2xl font-semibold mb-2">
                  무료 상담 신청
                </h3>
                <p className="text-gray-600">
                  아래 양식을 작성하시면 전문가가 빠르게 연락드립니다
                </p>
              </div>

              <div className="relative">
                <iframe
                  src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
                  className="w-full h-[400px] border-0"
                  title="상담 신청 양식"
                >
                  로딩 중...
                </iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA; 