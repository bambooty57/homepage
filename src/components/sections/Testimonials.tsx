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
      content: '트랙터 조사료 작업 시 빠지는 구간에서 악셀 반응속도가 놀랍게 향상되었습니다. 이전엔 빠지기 직전에 악셀을 밟아도 반응이 늦어 출력이 떨어진 후 다시 가속이 되었는데, 이제는 즉각적인 반응으로 험지를 헤쳐나갈 수 있게 되었습니다. 저속에서의 토크도 훨씬 강력해져 진흙탕에서도 미끄러짐 없이 작업할 수 있어 작업 효율이 크게 향상되었습니다.',
      image: '/images/testimonials/farmer1.jpg',
      rating: 5,
      machine: '존디어 6140M 트랙터'
    },
    {
      name: '이상철 님',
      location: '전라북도 김제시',
      content: 'ECU 맵핑 후 트랙터의 힘이 완전히 달라졌습니다. 특히 경사지 작업이 한결 수월해졌고, 무거운 부착 작업기를 사용할 때도 출력 저하 없이 일정한 힘을 유지합니다. 이전에는 경사지에서 로터리 작업 시 엔진이 쉽게 부하를 받아 RPM이 떨어졌는데, 작업시간이 많이 단축되어 연료 소모량도 눈에 띄게 줄었습니다.',
      image: '/images/testimonials/ozz4u.jpg',
      rating: 5,
      machine: '뉴홀랜드 T6.180 트랙터'
    },
    {
      name: '박정훈 님',
      location: '충청남도 예산군',
      content: '맵핑 후 가장 눈에 띄는 변화는 저속 토크의 향상입니다. 밭갈이나 로터리 작업 시 엔진 RPM을 많이 올리지 않아도 충분한 힘을 내기 때문에 연료가 확실히 절약됩니다. 또한 험한 지형에서 빠질 때 즉각적인 토크 반응으로 빠져나오는 능력이 크게 향상되었습니다. 중부하 작업에서도 엔진 온도가 예전보다 안정적으로 유지되어 작업 신뢰성이 높아진 점도 큰 장점입니다.',
      image: '/images/testimonials/5dijeca.jpg',
      rating: 5,
      machine: '펜트 트랙터'
    },
    {
      name: '정민수 님',
      location: '경상북도 상주시',
      content: '신동진 벼처럼 낱알이 잘 떨어지는 벼 수확에는 원래도 문제가 없었지만, 영호진미처럼 쪽정이가 질긴 벼 품종 수확에는 튜닝 전에 힘이 딸렸었습니다. 맵핑 후에는 어떤 품종이든 힘이 넘쳐나 수확이 수월해졌고, 특히 젖은 논에서의 작업 능력이 크게 향상되었습니다. 벼 이외에도 밀, 보리 수확 시에도 막힘 없이 빠른 속도로 작업할 수 있어 수확 시즌 일정 관리에 큰 도움이 됩니다.',
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
            TracForce의 ECU 맵핑 서비스를 경험한 고객들의 생생한 이야기를 들어보세요
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