import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CriminalDefenseHero } from "@/components/criminal-defense/hero"
import { CriminalDefenseOverview } from "@/components/criminal-defense/overview"
import { CriminalCaseTypes } from "@/components/criminal-defense/case-types"
import { CriminalDefensePenalties } from "@/components/criminal-defense/penalties"
import { CriminalDefenseFAQ } from "@/components/criminal-defense/faq"
import { CriminalDefenseResources } from "@/components/criminal-defense/resources"
import { CriminalDefenseAttorney } from "@/components/criminal-defense/attorney"
import { CriminalDefenseCTA } from "@/components/criminal-defense/cta"

export const metadata: Metadata = {
  title: "Jamestown Criminal Defense Lawyer | DUI, Drug Charges & Assault Defense",
  description: "Experienced criminal defense attorneys in Jamestown, NY. We defend clients facing DUI, drug charges, assault, domestic violence, and theft crimes in Chautauqua County.",
}

export default function CriminalDefensePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <CriminalDefenseHero />
        <CriminalDefenseOverview />
        <CriminalCaseTypes />
        <CriminalDefensePenalties />
        <CriminalDefenseFAQ />
        <CriminalDefenseResources />
        <CriminalDefenseAttorney />
        <CriminalDefenseCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
