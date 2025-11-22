'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-yellow-500 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-white text-lg font-bold rounded-full hover:bg-yellow-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
          >
            <FaHome className="w-5 h-5" />
            홈으로 돌아가기
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-200 text-gray-800 text-lg font-bold rounded-full hover:bg-gray-300 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-offset-2"
          >
            <FaArrowLeft className="w-5 h-5" />
            이전 페이지로
          </button>
        </div>

        <div className="mt-12 text-gray-500">
          <p className="text-sm">
            문제가 지속되면 <a href="tel:010-7465-5179" className="text-yellow-500 hover:underline">010-7465-5179</a>로 문의해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}

