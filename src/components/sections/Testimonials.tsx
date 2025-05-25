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
      content: '트랙터 조사료 작업 시 빠지는 구간에서 악셀 반응속도가 놀랍게 향상되었습니다. 이전엔 빠지기 직전에 악셀을 밟아도 반응이 늦어 출력이 떨어진 후 다시 가속이 되었는데, 이제는 즉각적인 반응으로 험지를 헤쳐나갈 수 있게 되었습니다.',
      image: '/images/testimonials/farmer1.jpg',
      rating: 5,
      machine: '존디어 6140M 트랙터'
    },
    {
      name: '이상철 님',
      location: '전라북도 김제시',
      content: '파워튜닝 후 트랙터의 힘이 완전히 달라졌습니다. 로터리 작업시 조금 깊게 넣으면 출력이 죽어 자꾸 로터리를 올렸는데 이제 그럴필요없이 꾸준하게 힘이 차고 나갑니다. 작업시간이 많이 단축되어 연료 소모량도 눈에 띄게 줄었습니다.',
      image: '/images/testimonials/ozz4u.jpg',
      rating: 5,
      machine: '뉴홀랜드 T6.180 트랙터'
    },
    {
      name: '박정훈 님',
      location: '충청남도 예산군',
      content: '요소수(SCR) 경고등이 계속 켜져서 출력이 죽어 작업을 전혀 할 수 없는 상황이었습니다. 농기계 정비소에서는 수백만원의 수리비를 요구했는데, 트랙포스에서 저렴한 비용으로 완전히 해결해주었습니다. 이제 요소수 걱정 없이 정상적인 출력으로 농사일에 집중할 수 있게 되어 정말 만족합니다. 같은 문제로 고생하는 농민들에게 꼭 추천하고 싶습니다.',
      image: '/images/testimonials/5dijeca.jpg',
      rating: 5,
      machine: '펜트 트랙터'
    },
    {
      name: '정민수 님',
      location: '경상북도 상주시',
      content: '신동진 벼처럼 낱알이 잘 떨어지는 벼 수확에는 원래도 문제가 없었지만, 영호진미처럼 쪽정이가 질긴 벼 품종 수확에는 튜닝 전에 힘이 딸렸었습니다. 파워튜닝 후에는 어떤 품종이든 힘이 넘쳐나 수확이 수월해졌고, 특히 젖은 논에서의 작업 능력이 크게 향상되었습니다. 벼 이외에도 밀, 보리 수확 시에도 막힘 없이 빠른 속도로 작업할 수 있어 수확 시즌 일정 관리에 큰 도움이 됩니다.',
      image: '/images/testimonials/jfnud003.jpg',
      rating: 5,
      machine: '구보다 ZR7130 콤바인'
    },
    {
      name: '윤재현 님',
      location: '전라남도 해남군',
      content: '콤바인 작업 시 가장 큰 변화를 느꼈습니다. 아침 일찍 이슬이 많은 상태에서 작업하거나 조벼를 수확할 때 버벅거림이 있었는데, 이제는 힘이 넘쳐나서 출력이 저하되지 않고 수월하게 작업할 수 있습니다. 특히 벼가 쓰러진 논에서도 일정한 속도를 유지할 수 있게 되어 작업 효율이 크게 향상되었고, 연료 효율도 좋아져 하루 작업량이 확실히 늘었습니다.',
      image: '/images/testimonials/fgls3s.jpg',
      rating: 5,
      machine: '얀마 7조 콤바인'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-6xl font-bold text-center mb-8">
            고객 후기
          </h2>
          <p className="text-2xl text-gray-700 text-center mb-24 max-w-4xl mx-auto">
            TracForce의 파워튜닝 서비스를 경험한 고객들의 생생한 이야기를 들어보세요
          </p>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="relative bg-white rounded-xl shadow-xl p-12">
              <div className="absolute top-12 left-12 text-blue-600 opacity-20">
                <FaQuoteLeft className="w-24 h-24" />
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative">
                  <div className="flex mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="w-8 h-8 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-10 text-xl leading-relaxed">
                    {testimonials[activeIndex].content}
                  </p>
                  <div className="space-y-3">
                    <p className="font-semibold text-3xl">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-gray-600 text-xl">
                      {testimonials[activeIndex].location}
                    </p>
                    <p className="text-blue-600 font-medium text-xl">
                      {testimonials[activeIndex].machine}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <div className="absolute bottom-4 left-12">
                  <p className="text-sm text-gray-400">* 개인정보 보호를 위해 이미지는 연출된 것입니다.</p>
                </div>
                <div className="absolute bottom-12 right-12 space-x-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-4 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-colors"
                    aria-label="이전 후기"
                  >
                    <FaChevronLeft className="w-7 h-7" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-4 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-colors"
                    aria-label="다음 후기"
                  >
                    <FaChevronRight className="w-7 h-7" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex justify-center mt-12 space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-5 h-5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-600 w-12' : 'bg-gray-300'
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