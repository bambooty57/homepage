'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            TracForce
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-primary-600"
            >
              서비스 특징
            </Link>
            <Link 
              href="#process" 
              className="text-gray-700 hover:text-primary-600"
            >
              작업 과정
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-600"
            >
              고객 후기
            </Link>
            <Link 
              href="#faq" 
              className="text-gray-700 hover:text-primary-600"
            >
              자주 묻는 질문
            </Link>
          </nav>

          {/* 연락처 */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:010-7465-5179"
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <FaPhone className="mr-2" />
              <span>010-7465-5179</span>
            </a>
            <Link 
              href="#contact"
              className={`btn-primary ${
                isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'
              }`}
            >
              상담 신청
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 