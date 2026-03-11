import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Pill, Swords, Home, ShoppingBag, ArrowRight } from "lucide-react"
const caseTypes = [
  {
    icon: Car,
    title: "DUI / DWI Defense",
    description: "Aggressive defense against drunk driving charges. We challenge traffic stops, breathalyzer accuracy, and field sobriety tests to protect your license and freedom.",
    href: "/practice-areas/dui-defense"
  },
  {
    icon: Pill,
    title: "Drug Charges",
    description: "Strategic defense for drug possession, distribution, and trafficking charges. We explore diversion programs, challenge search and seizure procedures, and fight for reduced charges.",
    href: "/practice-areas/drug-charges"
  },
  {
    icon: Swords,
    title: "Assault Charges",
    description: "Dedicated representation for simple assault, aggravated assault, and other violent crime accusations. We investigate the circumstances and build strong defenses.",
    href: "/practice-areas/assault-charges"
  },
  {
    icon: Home,
    title: "Domestic Violence",
    description: "Confidential, compassionate defense for domestic violence allegations. We understand the sensitive nature of these cases and work to protect your rights and reputation.",
    href: "/practice-areas/domestic-violence"
  },
  {
    icon: ShoppingBag,
    title: "Theft Crimes",
    description: "Defense for shoplifting, larceny, burglary, and other theft-related charges. We work to minimize consequences and explore alternatives to conviction.",
    href: "/practice-areas/theft-crimes"
  }
]

export function CriminalCaseTypes() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Types of Criminal Cases We Handle
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our attorneys have extensive experience defending clients against a wide range of 
            criminal charges in Jamestown and throughout Chautauqua County.
          </p>
        </div>
        
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseTypes.map((caseType) => (
            <Card 
              key={caseType.title} 
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <caseType.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{caseType.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  {caseType.description}
                </CardDescription>
                <a 
                  href={caseType.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
