'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';

export default function Privacy() {
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

      <h1 className="text-4xl font-bold mb-8">개인정보 처리방침</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
          <p className="text-gray-600 leading-relaxed">
            트랙포스(이하 '회사')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>서비스 제공 및 계약의 이행</li>
            <li>고객 상담 및 불만 처리</li>
            <li>서비스 개선 및 신규 서비스 개발</li>
            <li>마케팅 및 광고 활용</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 개인정보의 처리 및 보유기간</h2>
          <p className="text-gray-600 leading-relaxed">
            회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>서비스 이용 기록: 3년</li>
            <li>상담 및 문의 기록: 1년</li>
            <li>마케팅 및 광고 활용 정보: 동의 철회 시까지</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 정보주체의 권리·의무 및 행사방법</h2>
          <p className="text-gray-600 leading-relaxed">
            정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리정지 요구</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 처리하는 개인정보 항목</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            회사는 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>필수항목: 이름, 연락처, 이메일</li>
            <li>선택항목: 차량정보, 주소</li>
            <li>자동수집항목: IP주소, 쿠키, 서비스 이용기록</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. 개인정보의 안전성 확보조치</h2>
          <p className="text-gray-600 leading-relaxed">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
            <li>관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육</li>
            <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
            <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ul>
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