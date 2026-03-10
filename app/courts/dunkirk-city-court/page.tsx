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
  title: "Dunkirk City Court | Criminal & Traffic Court Information",
  description: "Information about Dunkirk City Court in Chautauqua County, NY. Learn about case types, court procedures, and what to expect at your court appearance.",
}

const courtData = {
  name: "Dunkirk City Court",
  description: "Information about criminal and civil cases handled in Dunkirk City Court in Chautauqua County, New York.",
  aboutParagraphs: [
    "Dunkirk City Court serves the City of Dunkirk in northern Chautauqua County, New York. The court handles misdemeanor criminal cases, traffic violations, and civil matters including small claims and landlord-tenant disputes.",
    "Similar to other city courts in New York, Dunkirk City Court conducts preliminary hearings for felony cases before they are transferred to Chautauqua County Court in Mayville. The court also handles arraignments and bail hearings.",
    "If you have been charged with a crime or traffic offense in Dunkirk, your case will be heard at Dunkirk City Court. Our attorneys are familiar with the court's procedures and regularly represent clients in this jurisdiction."
  ],
  location: {
    name: "Dunkirk City Court",
    address: "342 Central Avenue",
    city: "Dunkirk, NY 14048",
    phone: "(716) 366-2055",
    hours: {
      days: "Monday - Friday",
      times: "9:00 AM - 4:00 PM"
    }
  },
  caseTypes: [
    {
      icon: Scale,
      title: "Misdemeanor Criminal Charges",
      description: "Class A and B misdemeanors including theft, assault, and drug possession."
    },
    {
      icon: Car,
      title: "Traffic Violations",
      description: "Speeding tickets, DUI/DWI charges, and vehicle and traffic law violations."
    },
    {
      icon: FileText,
      title: "Preliminary Felony Hearings",
      description: "Initial hearings for felony charges before transfer to County Court."
    },
    {
      icon: Users,
      title: "Small Claims Cases",
      description: "Civil disputes involving claims up to $5,000."
    },
    {
      icon: Home,
      title: "Landlord-Tenant Disputes",
      description: "Eviction proceedings and housing-related legal matters."
    }
  ],
  beforeAppearance: [
    { text: "Arrive at least 15 minutes before your scheduled time" },
    { text: "Bring your court paperwork and photo identification" },
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

export default function DunkirkCityCourtPage() {
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
