import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin } from "lucide-react"

const courts = [
  {
    name: "Jamestown City Court",
    location: "Jamestown, NY",
    description: "Handles criminal matters, traffic violations, and civil cases within the city. Our firm regularly appears before this court and understands its procedures."
  },
  {
    name: "Chautauqua County Court",
    location: "Mayville, NY",
    description: "The county's primary court for felony criminal cases and civil matters exceeding local court jurisdiction. We have extensive experience with county-level proceedings."
  },
  {
    name: "Dunkirk City Court",
    location: "Dunkirk, NY",
    description: "Serves the city of Dunkirk with jurisdiction over local criminal matters, small claims, and traffic cases. We represent clients throughout this court system."
  },
  {
    name: "Town & Village Courts",
    location: "Throughout Chautauqua County",
    description: "Local justice courts handling misdemeanors, traffic tickets, and small claims. We practice in town courts across the entire county."
  }
]

export function LocalCourts() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Local Courts We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our deep familiarity with Chautauqua County courts gives our clients a strategic advantage. 
            We know the judges, prosecutors, and procedures.
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {courts.map((court) => (
            <Card key={court.name} className="group transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{court.name}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
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
