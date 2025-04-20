import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaLeaf, FaTools, FaChartLine } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Link from 'next/link';
import AnimatedSection from '../AnimatedSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    { icon: FaPhone, text: '010-7465-5179', href: 'tel:010-7465-5179' },
    { icon: FaMapMarkerAlt, text: '광주광역시 남구 회재로1200번길15-1\n15-1, Hoejae-ro 1200beon-gil, Nam-gu, Gwangju', href: 'https://maps.google.com/?q=광주광역시+남구+회재로1200번길15-1' },
    { icon: FaEnvelope, text: 'bambooty57@gmail.com', href: 'mailto:bambooty57@gmail.com' }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/tracforce', label: '페이스북' },
    { icon: FaInstagram, href: 'https://instagram.com/tracforce', label: '인스타그램' },
    { icon: FaYoutube, href: 'https://youtube.com/channel/tracforce', label: '유튜브' }
  ];

  const footerLinks = [
    { title: '서비스 이용약관', href: '/terms' },
    { title: '개인정보 처리방침', href: '/privacy' }
  ];

  const serviceFeatures = [
    { icon: FaLeaf, text: '친환경 최적화' },
    { icon: FaTools, text: '맞춤형 튜닝' },
    { icon: FaChartLine, text: '성능 향상 보장' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container">
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-6">
              <div className="mb-6">
                <span className="text-4xl font-bold text-gradient">
                  트랙포스
                  <span className="text-gray-400 text-sm ml-2 block mt-1">Power Tuning</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                농기계 ECU 맵핑 전문 기업으로, 안전하고 효율적인 성능 최적화를 통해 
                고객의 농기계가 최대 잠재력을 발휘할 수 있도록 돕습니다.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-gray-800/50 px-3 py-1 rounded-full text-sm">
                    <feature.icon className="w-4 h-4 mr-1 text-primary-400" />
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 md:ml-auto">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-800">연락처</h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="flex items-center text-gray-400 hover:text-white transition-colors group">
                      <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </span>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-800">바로가기</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors inline-block py-1">
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
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {currentYear} 트랙포스. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-center mt-6 text-gray-600 text-xs">
              농기계 ECU 튜닝 및 매핑 서비스 | 사업자등록번호: 123-45-67890 | 대표: 홍길동
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer; 