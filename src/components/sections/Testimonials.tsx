'use client';

import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: '김영호 님',
      location: '전라남도 나주시',
      content: '트랙터 성능이 눈에 띄게 좋아졌습니다. 연료 소비도 줄고 작업 효율도 높아져서 매우 만족스럽습니다.',
      image: '/images/testimonials/farmer1.jpg',
      rating: 5,
      machine: '존디어 6140M 트랙터'
    },
    {
      name: '이상철 님',
      location: '전라북도 김제시',
      content: 'ECU 맵핑 후 트랙터의 힘이 달라졌어요. 특히 경사지 작업이 한결 수월해졌습니다.',
      image: '/images/testimonials/ozz4u.jpg',
      rating: 5,
      machine: '뉴홀랜드 T6.180 트랙터'
    },
    {
      name: '박정훈 님',
      location: '충청남도 예산군',
      content: '전문적이고 친절한 상담부터 작업까지 모든 과정이 만족스러웠습니다. 확실한 성능 개선을 경험했습니다.',
      image: '/images/testimonials/5dijeca.jpg',
      rating: 5,
      machine: '펜트 724 Vario 트랙터'
    },
    {
      name: '정민수 님',
      location: '경상북도 상주시',
      content: '구보다 트랙터의 출력 향상에 매우 만족합니다. 이전보다 훨씬 더 강력한 힘으로 작업할 수 있어 작업 시간이 크게 단축되었습니다.',
      image: '/images/testimonials/jfnud003.jpg',
      rating: 5,
      machine: '구보다 MR737 트랙터'
    },
    {
      name: '윤재현 님',
      location: '전라남도 해남군',
      content: '콤바인 성능이 확실히 개선되었습니다. 수확 작업이 빨라졌고 연료 효율도 좋아져 경제적으로도 큰 도움이 됩니다.',
      image: '/images/testimonials/fgls3s.jpg',
      rating: 5,
      machine: '구보다 ZR_7130 콤바인'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">
            고객 후기
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            TracForce의 ECU 맵핑 서비스를 경험한 고객들의 이야기를 들어보세요
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="relative bg-white rounded-lg shadow-lg p-8">
              <div className="absolute top-8 left-8 text-blue-600 opacity-20">
                <FaQuoteLeft className="w-16 h-16" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative">
                  <div className="flex mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {testimonials[activeIndex].content}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-xl">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].location}
                    </p>
                    <p className="text-blue-600">
                      {testimonials[activeIndex].machine}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="이전 후기"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="다음 후기"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="absolute bottom-2 left-8">
                <p className="text-xs text-gray-400">* 개인정보 보호를 위해 이미지는 연출된 것입니다.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`${index + 1}번 후기로 이동`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 