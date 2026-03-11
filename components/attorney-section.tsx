import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, User } from "lucide-react"
const attorneys = [
  {
    name: "Michael J. Anderson",
    title: "Criminal Defense & Trial Attorney",
    description: "With over 20 years of experience, Michael focuses on criminal defense, DUI cases, and trial advocacy throughout Chautauqua County.",
    href: "/attorneys/michael-anderson"
  },
  {
    name: "Sarah Mitchell",
    title: "Family Law Attorney",
    description: "Sarah brings compassionate guidance to divorce, child custody, and family law matters, helping clients navigate difficult transitions.",
    href: "/attorneys/sarah-mitchell"
  },
  {
    name: "David Carter",
    title: "Personal Injury Attorney",
    description: "David is dedicated to representing injury victims, fighting for fair compensation in car accidents, slip and falls, and negligence cases.",
    href: "/attorneys/david-carter"
  }
]

export function AttorneySection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Attorneys
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Meet the attorneys representing clients throughout Jamestown and Chautauqua County.
          </p>
        </div>
        
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney) => (
            <a key={attorney.name} href={attorney.href} className="group">
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <CardHeader className="text-center">
                  {/* Photo placeholder */}
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{attorney.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{attorney.title}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    {attorney.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="mt-6 gap-2">
                    View Profile
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
