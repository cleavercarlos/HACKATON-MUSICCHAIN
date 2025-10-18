import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { TechnologySection } from "@/components/technology-section"
import { BusinessSection } from "@/components/business-section"
import { CompetitionSection } from "@/components/competition-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <BusinessSection />
      <CompetitionSection />
      <CTASection />
    </main>
  )
}
