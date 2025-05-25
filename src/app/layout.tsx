import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '트랙포스 - 농기계 파워튜닝 전문',
  description: '트랙포스의 전문 파워튜닝 서비스로 농기계의 잠재력을 극대화하세요.',
  keywords: '농기계 파워튜닝, 트랙터 튜닝, 농기계 성능 개선, 파워튜닝, 연비 개선, 트랙포스',
  authors: [{ name: '트랙포스' }],
  creator: '트랙포스',
  publisher: '트랙포스',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '트랙포스 - 농기계 파워튜닝 전문',
    description: '농기계의 성능과 연비를 최적화하는 파워튜닝 서비스',
    url: 'https://tracforce.co.kr',
    siteName: '트랙포스',
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
} 