import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, AlertTriangle, FileText, Gavel, Clock, CreditCard, ArrowRight, Phone, Calendar } from "lucide-react"

const timeline = [
  { icon: Car, title: "Traffic Stop & Field Tests", description: "The officer conducts field sobriety tests and may request a preliminary breath test. You can refuse field tests, but this may lead to arrest based on other observations." },
  { icon: AlertTriangle, title: "Arrest & Chemical Test", description: "If arrested, you'll be taken to the station for a chemical test (breath, blood, or urine). Refusing this test triggers automatic license suspension under New York's implied consent law." },
  { icon: FileText, title: "Booking & Release", description: "You'll be fingerprinted, photographed, and typically released with an appearance ticket for arraignment. In some cases, you may be held until arraignment." },
  { icon: Gavel, title: "Arraignment", description: "Your first court appearance where charges are read and bail may be set. The court will also schedule a DMV hearing if you refused the chemical test or failed with a BAC of 0.08% or higher." },
  { icon: Clock, title: "DMV Hearing", description: "Separate from your criminal case, the DMV will hold an administrative hearing about your driving privileges. You have only 15 days from arrest to request this hearing." },
  { icon: CreditCard, title: "Case Resolution", description: "Your case may be resolved through plea negotiation or trial. Outcomes range from dismissal to conviction with penalties including fines, license suspension, and possible jail time." }
]

const penalties = [
  { offense: "First DUI/DWI", fines: "$500 - $1,000", license: "6-month suspension", jail: "Up to 1 year" },
  { offense: "Second DUI/DWI (within 10 years)", fines: "$1,000 - $5,000", license: "1-year revocation", jail: "Up to 4 years" },
  { offense: "Third DUI/DWI (within 10 years)", fines: "$2,000 - $10,000", license: "1-year revocation", jail: "Up to 7 years" },
  { offense: "DWAI (Alcohol)", fines: "$300 - $500", license: "90-day suspension", jail: "Up to 15 days" }
]

export default function DUIArrestGuidePage() {
  return (
    <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-16 pt-32 md:pb-20 md:pt-40">
          <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-transparent blur-3xl" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
              <a href="/" className="transition-colors hover:text-white">Home</a>
              <span>/</span>
              <span className="text-slate-300">Legal Guides</span>
              <span>/</span>
              <span className="text-slate-300">DUI Arrest Guide</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">Legal Guide</div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">What Happens After a DUI Arrest in New York</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">A step-by-step guide to the DUI arrest process in New York State, from traffic stop to case resolution.</p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-lg leading-relaxed text-muted-foreground">Being arrested for DUI (Driving Under the Influence) or DWI (Driving While Intoxicated) in New York can be frightening and confusing. Understanding what happens next can help you make informed decisions about your case.</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">New York takes drunk driving seriously. The consequences include both criminal penalties and administrative actions against your driver's license. Acting quickly - especially regarding your DMV hearing - is critical.</p>
            <Card className="mt-8 border-amber-200 bg-amber-50">
              <CardContent className="flex gap-4 p-4">
                <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600" />
                <div>
                  <p className="font-semibold text-amber-900">Important: 15-Day Deadline</p>
                  <p className="mt-1 text-sm text-amber-800">If you refused a chemical test or failed with a BAC of 0.08% or higher, you have only 15 days from your arrest to request a DMV hearing. Missing this deadline can result in automatic license suspension.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">The DUI Process Step by Step</h2>
            <p className="mt-3 text-muted-foreground">Here's what typically happens after a DUI arrest in New York.</p>
            <div className="mt-10 space-y-6">
              {timeline.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    {index < timeline.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Potential Penalties</h2>
            <p className="mt-3 text-muted-foreground">DUI penalties in New York vary based on your BAC level, prior offenses, and other factors.</p>
            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Offense</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Fines</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">License</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Jail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {penalties.map((row) => (
                    <tr key={row.offense}>
                      <td className="px-4 py-3 text-sm font-medium text-foreground">{row.offense}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{row.fines}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{row.license}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{row.jail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">* Penalties may vary. Additional consequences may include ignition interlock device requirements, alcohol assessment, and increased insurance rates.</p>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">What You Should Do Now</h2>
            <div className="mt-8 space-y-4">
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">1. Contact an Attorney Immediately</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">An experienced DUI attorney can protect your rights, help you understand your options, and represent you at both your criminal case and DMV hearing.</p></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">2. Request Your DMV Hearing Within 15 Days</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">This is critical. If you don't request a hearing within 15 days of your arrest, your license may be automatically suspended without any opportunity to contest it.</p></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">3. Document Everything</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Write down everything you remember about your arrest while it's fresh in your mind. This information can be valuable for your defense.</p></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">4. Don't Discuss Your Case</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Avoid discussing your case with anyone except your attorney. Don't post about it on social media or talk to police without your lawyer present.</p></CardContent></Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Related Information</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/jamestown-criminal-defense-lawyer"><Button variant="outline" className="gap-2">Criminal Defense Services <ArrowRight className="h-4 w-4" /></Button></a>
              <a href="/guides/criminal-case-process-new-york"><Button variant="outline" className="gap-2">Criminal Case Process <ArrowRight className="h-4 w-4" /></Button></a>
              <a href="/courts/jamestown-city-court"><Button variant="outline" className="gap-2">Jamestown City Court <ArrowRight className="h-4 w-4" /></Button></a>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white">Arrested for DUI in Jamestown?</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">Time is critical after a DUI arrest. Contact us today for a free consultation and to discuss your DMV hearing options.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100"><Calendar className="h-5 w-5" />Free Consultation</Button>
              <a href="tel:+17165550123"><Button size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10"><Phone className="h-5 w-5" />(716) 555-0123</Button></a>
            </div>
          </div>
        </section>
    </main>
  )
}
