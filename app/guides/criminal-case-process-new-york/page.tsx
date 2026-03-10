import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, Gavel, FileSearch, Scale, Users, AlertTriangle, ArrowRight, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Criminal Case Process in New York | Step-by-Step Guide",
  description: "Learn how criminal cases work in New York State. Understand each stage from arrest to resolution, including arraignment, discovery, and trial.",
}

const steps = [
  {
    number: "01",
    icon: ShieldAlert,
    title: "Arrest",
    content: [
      "A criminal case typically begins with an arrest. Police may arrest you if they witness a crime, have a warrant, or have probable cause to believe you committed an offense.",
      "At the time of arrest, you have constitutional rights including the right to remain silent and the right to an attorney. Exercise these rights. Do not answer questions or make statements without your lawyer present.",
      "After arrest, you will be taken to a police station for booking, which includes fingerprinting and photographing. You may be held until arraignment or released with an appearance ticket."
    ]
  },
  {
    number: "02",
    icon: Gavel,
    title: "Arraignment",
    content: [
      "Arraignment is your first court appearance, typically within 24 hours of arrest if you are held in custody. For appearance tickets, arraignment may be scheduled days or weeks later.",
      "At arraignment, the judge will read the charges against you, inform you of your rights, and ask how you plead. Most defendants plead not guilty at this stage.",
      "The judge will also consider bail. You may be released on your own recognizance, released on bail, or held without bail depending on the charges and your circumstances."
    ]
  },
  {
    number: "03",
    icon: FileSearch,
    title: "Discovery & Pretrial Motions",
    content: [
      "After arraignment, the prosecution must provide discovery - evidence they intend to use against you. New York's discovery laws require prosecutors to share evidence early in the process.",
      "Your attorney will review all evidence and may file pretrial motions to suppress illegally obtained evidence, dismiss charges, or address other legal issues.",
      "This stage involves investigation, evidence analysis, and legal research. It is often the most important phase for building your defense."
    ]
  },
  {
    number: "04",
    icon: Users,
    title: "Plea Negotiations",
    content: [
      "Most criminal cases are resolved through plea negotiations rather than trial. Your attorney will discuss potential plea offers with the prosecution.",
      "A plea bargain may involve pleading guilty to reduced charges or agreeing to a specific sentence recommendation. You always have the right to reject any offer and proceed to trial.",
      "Your attorney will advise you on the strengths and weaknesses of your case and whether a plea offer is in your best interest."
    ]
  },
  {
    number: "05",
    icon: Scale,
    title: "Trial",
    content: [
      "If your case proceeds to trial, the prosecution must prove your guilt beyond a reasonable doubt. You have the right to a jury trial for most criminal charges.",
      "At trial, both sides present evidence and witnesses. Your attorney will cross-examine prosecution witnesses and may present your own evidence and witnesses.",
      "After both sides rest, the jury deliberates and returns a verdict. If acquitted, you are free to go. If convicted, the case proceeds to sentencing."
    ]
  },
  {
    number: "06",
    icon: AlertTriangle,
    title: "Sentencing",
    content: [
      "If you plead guilty or are convicted at trial, the judge will impose a sentence. Sentencing may occur immediately or be scheduled for a later date.",
      "Sentences vary widely depending on the offense, your criminal history, and other factors. Options include fines, probation, community service, or incarceration.",
      "Your attorney can advocate for leniency and present mitigating factors to the court before sentencing."
    ]
  }
]

export default function CriminalCaseProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-16 pt-32 md:pb-20 md:pt-40">
          <div 
            aria-hidden="true"
            className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-transparent blur-3xl" 
          />
          <div 
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" 
          />
          
          <div className="relative mx-auto max-w-6xl px-6">
            <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-slate-300">Legal Guides</span>
              <span>/</span>
              <span className="text-slate-300">Criminal Case Process</span>
            </nav>
            
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
              Legal Guide
            </div>
            
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Criminal Case Process in New York
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Understanding how criminal cases proceed through the New York court system, 
              from arrest through resolution.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              If you or someone you know has been charged with a crime in New York, understanding 
              the criminal justice process can help you navigate what lies ahead. Every case is 
              different, but most criminal cases follow a similar path through the court system.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              This guide explains each stage of a criminal case in New York State. While it 
              provides general information, it is not a substitute for legal advice. If you 
              are facing criminal charges, consult with an experienced criminal defense attorney.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={step.title} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="flex w-16 shrink-0 flex-col items-center justify-start bg-primary/5 py-6">
                        <span className="text-sm font-medium text-primary">{step.number}</span>
                        <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <h2 className="text-xl font-semibold text-foreground">{step.title}</h2>
                        <div className="mt-4 space-y-3">
                          {step.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-muted-foreground">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Related Information
            </h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/jamestown-criminal-defense-lawyer">
                <Button variant="outline" className="gap-2">
                  Criminal Defense Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courts/jamestown-city-court">
                <Button variant="outline" className="gap-2">
                  Jamestown City Court
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courts/chautauqua-county-court">
                <Button variant="outline" className="gap-2">
                  Chautauqua County Court
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Facing Criminal Charges?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              If you have been charged with a crime in Jamestown or Chautauqua County, contact 
              us for a free consultation. We can explain your options and help protect your rights.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-5 w-5" />
                (716) 555-0123
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
