import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Building2, Landmark, ArrowRight } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    icon: FileText,
    title: "Criminal Case Process in New York",
    description: "Learn what to expect at each stage of a criminal case in New York State.",
    href: "/guides/criminal-case-process-new-york"
  },
  {
    icon: Scale,
    title: "What Happens After a DUI Arrest",
    description: "Step-by-step guide to the DUI process in New York, from arrest to resolution.",
    href: "/guides/dui-arrest-new-york"
  },
  {
    icon: Building2,
    title: "Jamestown City Court",
    description: "Information about Jamestown City Court including location, hours, and case types.",
    href: "/courts/jamestown-city-court"
  },
  {
    icon: Landmark,
    title: "Chautauqua County Court",
    description: "Learn about felony cases and appeals at Chautauqua County Court in Mayville.",
    href: "/courts/chautauqua-county-court"
  }
]

export function CriminalDefenseResources() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Resources & Legal Guides
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Learn more about the criminal justice process in Jamestown and Chautauqua County.
        </p>
        
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.href}>
              <Card className="group h-full transition-all hover:border-primary/50 hover:shadow-md">
                <CardHeader className="flex flex-row items-start gap-4 pb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-base">
                      {resource.title}
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm">
                      {resource.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
