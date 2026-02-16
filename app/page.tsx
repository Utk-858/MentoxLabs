'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhyLexoraSection from '@/components/WhyLexoraSection'
import ERPProblemSection from '@/components/ERPProblemSection'
import IndustryProblemsSection from '@/components/IndustryProblemsSection'
import TheEquationSection from '@/components/TheEquationSection'
import IntroducingLexoraSection from '@/components/IntroducingLexoraSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import WhatMakesLexoraSpecialSection from '@/components/WhatMakesLexoraSpecialSection'
import FutureOfERPSection from '@/components/FutureOfERPSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <HeroSection />
      <ERPProblemSection />
      <IndustryProblemsSection />
      <TheEquationSection />
      <IntroducingLexoraSection />
      <ArchitectureSection />
      <WhatMakesLexoraSpecialSection />
      <FutureOfERPSection />
      <Footer />
    </main>
  )
}
