import Image from 'next/image';

export default function ScrSolutionSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-red-50 to-orange-50 text-center" id="scr-solution">
      {/* 메인 헤더 */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-red-700">
          🚨 농기계 요소수(SCR) 문제 🚨
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-green-700 mb-6">
          트랙포스가 확실하게 해결해드립니다!
        </h3>
        <p className="text-xl md:text-2xl text-gray-700 font-semibold">
          더 이상 요소수 때문에 농사일을 멈추지 마세요!
        </p>
      </div>

      {/* 문제 상황 이미지들 - 더 크게 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl p-8 border-4 border-red-200 hover:border-red-400 transition-all">
          <div className="relative mb-6">
            <Image 
              src="/images/service-features/SCR-HREDER.png" 
              alt="SCR 헤더 막힘" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
            <div className="absolute -top-4 -right-4 bg-red-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center animate-pulse">
              ⚠️
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-6 text-red-600 mb-4">요소수헤더조합</h3>
          <p className="text-base text-red-600 mt-2 font-semibold">→ 고가 막대한 수리비 발생!</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-2xl p-8 border-4 border-orange-200 hover:border-orange-400 transition-all flex items-center justify-center min-h-[400px] lg:col-span-2">
          <div className="relative w-full">
            <Image 
              src="/images/service-features/scr-2.png" 
              alt="SCR 문제" 
              width={500} 
              height={350} 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center animate-pulse">
              🔥
            </div>
          </div>
        </div>
      </div>



      {/* CTA 버튼 */}
      <div className="text-center">
        <a 
          href="#contact" 
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl lg:text-3xl font-bold px-8 py-4 md:px-12 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all animate-pulse focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 min-h-[44px] flex items-center justify-center"
          aria-label="상담 신청하기"
        >
          🚀 지금 바로 상담받기 🚀
        </a>
        <p className="text-base md:text-lg text-gray-600 mt-4">
          농기계 운행에 불편을 겪는 분들을 위해 트랙포스가 항상 함께합니다.
        </p>
      </div>
    </section>
  );
} 