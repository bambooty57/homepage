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
  title: 'TracForce - 농기계 ECU 맵핑 전문',
  description: '농기계의 성능과 연비를 최적화하는 ECU 맵핑 서비스. 전문가의 안전하고 검증된 튜닝으로 농기계의 잠재력을 끌어내세요.',
  keywords: '농기계 ECU 맵핑, 트랙터 튜닝, 농기계 성능 개선, ECU 튜닝, 연비 개선, TracForce',
  authors: [{ name: 'TracForce' }],
  creator: 'TracForce',
  publisher: 'TracForce',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    title: 'TracForce - 농기계 ECU 맵핑 전문',
    description: '농기계의 성능과 연비를 최적화하는 ECU 맵핑 서비스',
    url: 'https://tracforce.co.kr',
    siteName: 'TracForce',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TracForce ECU 맵핑 서비스',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
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