import React from 'react';
import Image from 'next/image';

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
        
        {/* FAQ 아코디언 */}
        <div className="max-w-3xl mx-auto mb-16">
          {/* ... 기존 FAQ 아코디언 컴포넌트 ... */}
        </div>

        {/* 유튜브 영상 섹션 */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            실제 작업 영상으로 확인하세요
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 영상 썸네일 1 */}
            <a 
              href="https://www.youtube.com/watch?v=FiCDF4_LeS8" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src="/images/youtube/video-tractor-tuning.jpg"
                alt="트랙터 ECU 튜닝 효과 영상"
                width={640}
                height={360}
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">영상 보러가기</span>
              </div>
            </a>

            {/* 영상 썸네일 2 */}
            <a 
              href="https://www.youtube.com/watch?v=Tja6-uboTyw" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src="/images/youtube/video-mapping-process.jpg"
                alt="ECU 맵핑 과정 영상"
                width={640}
                height={360}
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">영상 보러가기</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 