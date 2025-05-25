'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-gradient">
              트랙포스
              <span className="text-gray-600 text-sm ml-1 font-normal">Power Tuning</span>
            </span>
          </Link>

          {/* 모바일 메뉴 버튼 */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* 데스크탑 네비게이션 */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-8 mr-8">


              <Link 
                href="#testimonials" 
                className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b-2 border-transparent hover:border-primary-600"
              >
                고객 후기
              </Link>
              <Link 
                href="#faq" 
                className="text-gray-700 hover:text-primary-600 transition-colors py-2 border-b-2 border-transparent hover:border-primary-600"
              >
                자주 묻는 질문
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a 
                href="tel:010-7465-5179"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
              >
                <FaPhone className="mr-2" />
                <span>010-7465-5179</span>
              </a>
              <Link 
                href="#contact"
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-base font-semibold"
              >
                상담 신청
              </Link>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 pb-4">


            <Link 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              고객 후기
            </Link>
            <Link 
              href="#faq" 
              className="text-gray-700 hover:text-primary-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              자주 묻는 질문
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <a 
                href="tel:010-7465-5179"
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaPhone className="mr-2" />
                <span>010-7465-5179</span>
              </a>
              <Link 
                href="#contact"
                className="flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                상담 신청
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 