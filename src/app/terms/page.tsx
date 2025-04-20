'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';

export default function Terms() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <button
        onClick={() => router.back()}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="닫기"
      >
        <IoClose className="w-8 h-8 text-gray-600" />
      </button>

      <h1 className="text-4xl font-bold mb-8">서비스 이용약관</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">제1조 (목적)</h2>
          <p className="text-gray-600 leading-relaxed">
            이 약관은 트랙포스(이하 "회사")가 제공하는 ECU 맵핑 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">제2조 (용어의 정의)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>"서비스"란 회사가 제공하는 ECU 맵핑 및 관련 서비스를 의미합니다.</li>
            <li>"이용자"란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
            <li>"ECU 맵핑"이란 차량의 전자제어장치(ECU)의 프로그래밍을 최적화하는 것을 의미합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">제3조 (약관의 효력과 변경)</h2>
          <p className="text-gray-600 leading-relaxed">
            1. 이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.<br />
            2. 회사는 약관의 규제에 관한 법률 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br />
            3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 회사의 서비스 초기화면에 그 적용일자 7일 이전부터 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">제4조 (서비스의 제공)</h2>
          <p className="text-gray-600 leading-relaxed">
            1. 회사는 다음과 같은 서비스를 제공합니다:<br />
            - ECU 맵핑 서비스<br />
            - 성능 최적화 서비스<br />
            - 관련 상담 및 기술지원<br /><br />
            2. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 이러한 경우 사전에 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">제5조 (서비스 이용시간)</h2>
          <p className="text-gray-600 leading-relaxed">
            1. 서비스 이용시간은 평일(월~금) 오전 8시부터 오후 6시까지입니다.<br />
            2. 토요일, 일요일 및 공휴일은 휴무입니다.<br />
            3. 회사는 업무상 또는 기술상의 이유로 서비스 이용시간을 제한하거나 변경할 수 있으며, 이 경우 사전에 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">제6조 (이용자의 의무)</h2>
          <p className="text-gray-600 leading-relaxed">
            이용자는 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다:<br />
            1. 서비스 신청 또는 변경 시 허위내용의 등록<br />
            2. 회사가 제공하는 서비스에 대한 허가되지 않은 변경<br />
            3. 회사의 서비스 운영을 방해하는 행위<br />
            4. 기타 관련 법령에 위배되는 행위
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">제7조 (보증 및 책임)</h2>
          <p className="text-gray-600 leading-relaxed">
            1. 회사는 서비스 이용과 관련하여 이용자에게 발생한 손해에 대해 책임을 부담합니다.<br />
            2. 단, 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => router.back()}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
} 