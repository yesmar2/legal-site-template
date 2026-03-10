import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CourtHero } from "@/components/courts/court-hero"
import { CourtAbout } from "@/components/courts/court-about"
import { CourtCaseTypes } from "@/components/courts/court-case-types"
import { CourtWhatToExpect } from "@/components/courts/court-what-to-expect"
import { CourtRelatedAreas } from "@/components/courts/court-related-areas"
import { CourtCTA } from "@/components/courts/court-cta"
import { Scale, Car, FileText, Users, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Jamestown City Court | Criminal & Traffic Court Information",
  description: "Information about Jamestown City Court in Chautauqua County, NY. Learn about case types, court procedures, and what to expect at your court appearance.",
}

const courtData = {
  name: "Jamestown City Court",
  description: "Information about criminal and civil cases handled in Jamestown City Court in Chautauqua County, New York.",
  aboutParagraphs: [
    "Jamestown City Court handles many local criminal and civil matters in Jamestown, New York. The court has jurisdiction over misdemeanor criminal offenses, traffic violations, small claims cases, and preliminary hearings for felony charges before cases move to county court.",
    "As a court of limited jurisdiction, Jamestown City Court handles the initial stages of felony cases, including arraignments and preliminary hearings, before transferring them to Chautauqua County Court for further proceedings.",
    "If you have been charged with a crime or traffic violation in Jamestown, your case will likely begin at Jamestown City Court. Having an experienced attorney who regularly practices in this court can make a significant difference in your case."
  ],
  location: {
    name: "Jamestown City Court",
    address: "200 E. Third Street",
    city: "Jamestown, NY 14701",
    phone: "(716) 483-7561",
    hours: {
      days: "Monday - Friday",
      times: "9:00 AM - 4:30 PM"
    }
  },
  caseTypes: [
    {
      icon: Scale,
      title: "Misdemeanor Criminal Charges",
      description: "Class A and B misdemeanors including petit larceny, assault, and criminal mischief."
    },
    {
      icon: Car,
      title: "Traffic Violations",
      description: "Speeding tickets, DUI/DWI charges, and other vehicle and traffic law violations."
    },
    {
      icon: FileText,
      title: "Preliminary Felony Hearings",
      description: "Initial hearings for felony charges before cases are transferred to County Court."
    },
    {
      icon: Users,
      title: "Small Claims Cases",
      description: "Civil disputes involving claims up to $5,000 between individuals or businesses."
    },
    {
      icon: Home,
      title: "Landlord-Tenant Disputes",
      description: "Housing court matters including evictions and lease disputes."
    }
  ],
  beforeAppearance: [
    { text: "Arrive at least 15 minutes before your scheduled time" },
    { text: "Bring your court paperwork and any required documents" },
    { text: "Dress appropriately in business or business casual attire" },
    { text: "Turn off cell phones before entering the courtroom" }
  ],
  duringAppearance: [
    { text: "Stand when the judge enters and when addressing the court" },
    { text: "Address the judge as \"Your Honor\"" },
    { text: "Speak clearly and only when asked to respond" },
    { text: "If you have an attorney, let them speak on your behalf" }
  ],
  relatedAreas: [
    { title: "Criminal Defense", href: "/jamestown-criminal-defense-lawyer" },
    { title: "DUI Defense", href: "/guides/dui-arrest-new-york" },
    { title: "Traffic Violations", href: "/jamestown-criminal-defense-lawyer" }
  ]
}

export default function JamestownCityCourtPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <CourtHero 
          courtName={courtData.name} 
          description={courtData.description} 
        />
        <CourtAbout 
          courtName={courtData.name}
          paragraphs={courtData.aboutParagraphs}
          location={courtData.location}
        />
        <CourtCaseTypes 
          courtName={courtData.name}
          caseTypes={courtData.caseTypes}
        />
        <CourtWhatToExpect 
          beforeAppearance={courtData.beforeAppearance}
          duringAppearance={courtData.duringAppearance}
        />
        <CourtRelatedAreas areas={courtData.relatedAreas} />
        <CourtCTA courtName={courtData.name} />
      </main>
      <SiteFooter />
    </div>
  )
}
