import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FirmIntro } from "@/components/firm-intro"
import { PracticeAreas } from "@/components/practice-areas"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AttorneySection } from "@/components/attorney-section"
import { ServiceAreas } from "@/components/service-areas"
import { LocalCourtsHome } from "@/components/local-courts-home"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <FirmIntro />
        <section id="practice-areas">
          <PracticeAreas />
        </section>
        <WhyChooseUs />
        <section id="attorney">
          <AttorneySection />
        </section>
        <ServiceAreas />
        <LocalCourtsHome />
        <Testimonials />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
