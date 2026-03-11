import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, ArrowRight } from "lucide-react"
const courts = [
  {
    title: "Jamestown City Court",
    description: "Handles many misdemeanor criminal cases, traffic violations, and preliminary hearings for felony cases in Jamestown.",
    href: "/courts/jamestown-city-court"
  },
  {
    title: "Chautauqua County Court",
    description: "Handles felony criminal cases and higher-level matters for Chautauqua County.",
    href: "/courts/chautauqua-county-court"
  },
  {
    title: "Dunkirk City Court",
    description: "Local court serving Dunkirk handling criminal misdemeanors, traffic violations, and preliminary hearings.",
    href: "/courts/dunkirk-city-court"
  }
]

export function LocalCourtsHome() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Local Courts We Handle
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our attorneys regularly represent clients in courts throughout Jamestown and Chautauqua County. 
            Learn more about the courts where criminal and civil cases are handled.
          </p>
        </div>
        
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courts.map((court) => (
            <a key={court.title} href={court.href} className="group">
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    {court.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {court.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/guides/criminal-case-process-new-york" 
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            Learn more about how local courts handle criminal cases
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
