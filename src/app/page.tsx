import React from 'react';
import Header from '@/components/Header';
import MainVisual from '@/components/sections/MainVisual';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Solution from '@/components/sections/Solution';
import ServiceFeatures from '@/components/sections/ServiceFeatures';
import WorkProcess from '@/components/sections/WorkProcess';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import AnimatedSection from '@/components/AnimatedSection';

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

      <AnimatedSection delay={0.3}>
        <section id="features" className="section-padding">
          <ServiceFeatures />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <section id="process" className="section-padding bg-gray-50">
          <WorkProcess />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <section id="testimonials" className="section-padding">
          <Testimonials />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <section id="faq" className="section-padding bg-gray-50">
          <FAQ />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        <section id="contact" className="section-padding">
          <CTA />
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
} 