import Image from 'next/image';

export default function ScrSolutionSection() {
  return (
    <section className="py-12 px-4 bg-white text-center" id="scr-solution">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        농기계 요소수(SCR) 문제<br className="hidden md:block" />
        트랙포스가 확실하게 해결해드립니다!
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 mb-8">
        <Image src="/images/service-features/system-diagram.png" alt="SCR 시스템 구조" width={340} height={220} className="mx-auto rounded-lg shadow-lg" />
      </div>
      <p className="text-lg md:text-xl mb-4">
        작업 중 요소수(SCR) 경고등, 출력저하로 힘들어하지 마세요.<br />
        <span className="text-green-700 font-bold">트랙포스만의 특별한 기술과 노하우</span>로<br />
        농민 여러분의 소중한 농기계 운행을 빠르고 안전하게 지켜드립니다.
      </p>
      <p className="text-base text-gray-600">
        요소수 부족, SCR 경고등, 출력 저하 등<br />
        농기계 운행에 불편을 겪는 분들을 위해<br />
        트랙포스가 항상 함께합니다.
      </p>
    </section>
  );
} 