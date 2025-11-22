# 트랙포스 (TracForce) - 농기계 파워튜닝 전문 랜딩 페이지

트랙포스의 농기계 파워튜닝 서비스를 소개하는 랜딩 페이지입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Firebase Hosting (권장)

## 📦 설치 및 실행

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

### 프로덕션 빌드

```bash
# 프로덕션 빌드 생성
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
homepage/
├── public/
│   └── images/          # 이미지 리소스
│       ├── main-visual/ # 메인 비주얼 이미지
│       ├── testimonials/# 고객 후기 이미지
│       ├── service-features/ # 서비스 특징 이미지
│       ├── ecu-mapping/ # ECU 맵핑 이미지
│       └── youtube/     # YouTube 썸네일
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # 루트 레이아웃
│   │   └── page.tsx    # 메인 페이지
│   └── components/     # React 컴포넌트
│       ├── sections/   # 섹션 컴포넌트
│       └── Header.tsx  # 헤더 컴포넌트
└── package.json
```

## 🎨 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 이미지 슬라이더 (메인 비주얼)
- ✅ 고객 후기 캐러셀
- ✅ FAQ 아코디언
- ✅ YouTube 영상 섹션
- ✅ 접근성 최적화 (ARIA, 키보드 네비게이션)
- ✅ SEO 최적화 (메타데이터, Open Graph)

## 🔧 환경 변수

현재 환경 변수는 필요하지 않습니다. 모든 설정이 코드에 포함되어 있습니다.

## 📱 배포

### Firebase Hosting 배포

```bash
# Firebase CLI 설치 (처음 한 번만)
npm install -g firebase-tools

# Firebase 로그인
firebase login

# Firebase 프로젝트 초기화
firebase init hosting

# 빌드 및 배포
npm run build
firebase deploy
```

### Vercel 배포

Vercel에 GitHub 저장소를 연결하면 자동으로 배포됩니다.

## 🌐 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 📝 라이선스

ISC

## 📞 문의

- **전화**: 010-7465-5179
- **이메일**: bambooty57@gmail.com
- **주소**: 15-1, Hoejae-ro 1200beon-gil, Nam-gu, Gwangju

---

© 2025 트랙포스. All rights reserved.

