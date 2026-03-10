import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, HeartPulse, Heart, Home, ArrowRight } from "lucide-react"
import Link from "next/link"

const practiceAreas = [
  {
    icon: Scale,
    title: "Criminal Defense",
    description: "Defense representation for DUI, assault, theft, and other criminal charges in Jamestown and Chautauqua County.",
    href: "/jamestown-criminal-defense-lawyer"
  },
  {
    icon: HeartPulse,
    title: "Personal Injury",
    description: "Legal representation for injury victims involved in car accidents, slip and fall cases, and other negligence claims.",
    href: "/jamestown-personal-injury-lawyer"
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Guidance and representation for divorce, custody, and other family law matters.",
    href: "/jamestown-family-lawyer"
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Legal assistance with residential and commercial real estate transactions and property matters.",
    href: "/jamestown-real-estate-lawyer"
  }
]

export function PracticeAreas() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Practice Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive legal services tailored to protect your rights and achieve the best possible outcome for your case.
          </p>
        </div>
        
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link key={area.title} href={area.href} className="group">
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    {area.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
