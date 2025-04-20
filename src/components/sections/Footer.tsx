import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Link from 'next/link';
import AnimatedSection from '../AnimatedSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    { icon: FaPhone, text: '1544-1234', href: 'tel:1544-1234' },
    { icon: FaMapMarkerAlt, text: '경기도 수원시 영통구 광교로 107', href: 'https://maps.google.com/?q=경기도+수원시+영통구+광교로+107' },
    { icon: FaEnvelope, text: 'contact@tracforce.co.kr', href: 'mailto:contact@tracforce.co.kr' },
    { icon: RiKakaoTalkFill, text: 'TracForce 카카오톡', href: 'https://pf.kakao.com/_tracforce' }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/tracforce' },
    { icon: FaInstagram, href: 'https://instagram.com/tracforce' },
    { icon: FaYoutube, href: 'https://youtube.com/tracforce' },
    { icon: RiKakaoTalkFill, href: 'https://pf.kakao.com/_tracforce' }
  ];

  const footerLinks = [
    { title: '회사 소개', href: '/about' },
    { title: '서비스 이용약관', href: '/terms' },
    { title: '개인정보 처리방침', href: '/privacy' },
    { title: '제휴 문의', href: '/partnership' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">TracForce</h3>
              <p className="text-gray-400 mb-4">
                농기계 ECU 맵핑 전문 기업<br />
                안전하고 효율적인 성능 최적화
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">연락처</h3>
              <ul className="space-y-2">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <item.icon className="w-5 h-5 mr-2" />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">빠른 메뉴</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} TracForce. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer; 