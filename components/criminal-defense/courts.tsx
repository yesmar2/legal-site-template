import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin } from "lucide-react"

const courts = [
  {
    name: "Jamestown City Court",
    location: "200 E. Third Street, Jamestown, NY",
    description: "Most criminal cases in Jamestown begin here. This court handles misdemeanors, violations, and preliminary proceedings for felony cases. We appear in this court regularly and have strong working relationships with court personnel."
  },
  {
    name: "Chautauqua County Court",
    location: "1 N. Erie Street, Mayville, NY",
    description: "Felony cases and appeals from local courts are heard here. Our attorneys have extensive experience handling serious criminal matters in County Court, where the stakes are highest."
  }
]

export function CriminalDefenseCourts() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Local Court Information
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Understanding where your case will be heard is important. We practice regularly in 
            all Chautauqua County courts and know the local procedures inside and out.
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courts.map((court) => (
            <Card key={court.name} className="group transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{court.name}</CardTitle>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {court.location}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {court.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
