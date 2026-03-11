import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CourtHero } from "@/components/courts/court-hero"
import { CourtAbout } from "@/components/courts/court-about"
import { CourtCaseTypes } from "@/components/courts/court-case-types"
import { CourtWhatToExpect } from "@/components/courts/court-what-to-expect"
import { CourtRelatedAreas } from "@/components/courts/court-related-areas"
import { CourtCTA } from "@/components/courts/court-cta"
import { Scale, Gavel, FileText, AlertTriangle, Briefcase } from "lucide-react"

const courtData = {
  name: "Chautauqua County Court",
  description: "Information about felony criminal cases and appeals handled in Chautauqua County Court in Mayville, New York.",
  aboutParagraphs: [
    "Chautauqua County Court is the main trial court for felony criminal cases in Chautauqua County, New York. Located in the county seat of Mayville, this court handles serious criminal matters that exceed the jurisdiction of local city and town courts.",
    "Cases typically arrive at County Court after preliminary proceedings in local courts such as Jamestown City Court or Dunkirk City Court. The County Court has jurisdiction over all felony offenses, from Class E felonies to the most serious Class A felonies.",
    "If you are facing felony charges in Chautauqua County, your case will be prosecuted by the District Attorney's office and heard before a County Court judge. Having experienced defense counsel who understands the procedures and personnel at this court is essential."
  ],
  location: {
    name: "Chautauqua County Courthouse",
    address: "3 N. Erie Street",
    city: "Mayville, NY 14757",
    phone: "(716) 753-4331",
    hours: {
      days: "Monday - Friday",
      times: "9:00 AM - 5:00 PM"
    }
  },
  caseTypes: [
    { icon: Scale, title: "Felony Criminal Cases", description: "All felony offenses including violent crimes, drug felonies, and property crimes." },
    { icon: Gavel, title: "Grand Jury Proceedings", description: "Indictment proceedings for felony charges presented by the District Attorney." },
    { icon: FileText, title: "Appeals from Local Courts", description: "Appeals from city, town, and village court decisions within the county." },
    { icon: AlertTriangle, title: "Serious Drug Offenses", description: "Drug possession, sale, and trafficking charges at the felony level." },
    { icon: Briefcase, title: "Major Civil Matters", description: "Civil cases exceeding local court jurisdiction limits." }
  ],
  beforeAppearance: [
    { text: "Arrive at least 30 minutes early for security screening" },
    { text: "Bring all court documents, identification, and any required paperwork" },
    { text: "Dress in formal business attire appropriate for court" },
    { text: "Leave cell phones and electronic devices in your vehicle" }
  ],
  duringAppearance: [
    { text: "Rise when the judge enters and remain standing until instructed" },
    { text: "Address the judge as \"Your Honor\" at all times" },
    { text: "Do not speak unless directly addressed by the court" },
    { text: "Follow your attorney's guidance throughout the proceedings" }
  ],
  relatedAreas: [
    { title: "Criminal Defense", href: "/jamestown-criminal-defense-lawyer" },
    { title: "Felony Defense", href: "/jamestown-criminal-defense-lawyer" },
    { title: "Drug Charges", href: "/jamestown-criminal-defense-lawyer" }
  ]
}

export default function ChautauquaCountyCourtPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <CourtHero courtName={courtData.name} description={courtData.description} />
        <CourtAbout courtName={courtData.name} paragraphs={courtData.aboutParagraphs} location={courtData.location} />
        <CourtCaseTypes courtName={courtData.name} caseTypes={courtData.caseTypes} />
        <CourtWhatToExpect beforeAppearance={courtData.beforeAppearance} duringAppearance={courtData.duringAppearance} />
        <CourtRelatedAreas areas={courtData.relatedAreas} />
        <CourtCTA courtName={courtData.name} />
      </main>
      <SiteFooter />
    </div>
  )
}
