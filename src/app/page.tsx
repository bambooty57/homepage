import React from 'react';
import Header from '@/components/Header';
import MainVisual from '@/components/sections/MainVisual';
import ProblemStatement from '@/components/sections/ProblemStatement';
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
      
      <section id="main-visual">
        <MainVisual />
      </section>

      <AnimatedSection>
        <section id="problem" className="section-padding">
          <ProblemStatement />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section id="solution" className="section-padding bg-gray-50">
          <Solution />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <section id="scr-solution" className="section-padding">
          <ScrSolutionSection />
        </section>
      </AnimatedSection>





      <AnimatedSection delay={0.5}>
        <section id="youtube" className="section-padding">
          <YouTubeSection />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <section id="testimonials" className="section-padding bg-gray-50">
          <Testimonials />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        <section id="faq" className="section-padding">
          <FAQ />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <section id="contact" className="section-padding bg-gray-50">
          <CTA />
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
} 