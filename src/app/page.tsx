import React from 'react';
import Header from '@/components/Header';
import MainVisual from '@/components/sections/MainVisual';
import Solution from '@/components/sections/Solution';

import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import YouTubeSection from '@/components/sections/YouTubeSection';

import ScrSolutionSection from '@/components/sections/ScrSolutionSection';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      
      <section id="main-visual" aria-label="메인 비주얼">
        <MainVisual />
      </section>

      <AnimatedSection delay={0.1}>
        <section id="testimonials" className="section-padding bg-gray-50" aria-label="고객 후기">
          <Testimonials />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section id="solution" className="section-padding bg-gray-50" aria-label="파워튜닝 해결책">
          <Solution />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section id="scr-solution" className="section-padding" aria-label="요소수 SCR 해결책">
          <ScrSolutionSection />
        </section>
      </AnimatedSection>





      <AnimatedSection delay={0.5}>
        <section id="youtube" className="section-padding" aria-label="파워튜닝 영상">
          <YouTubeSection />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <section id="faq" className="section-padding" aria-label="자주 묻는 질문">
          <FAQ />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        <section id="contact" className="section-padding bg-gray-50" aria-label="상담 신청">
          <CTA />
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
} 