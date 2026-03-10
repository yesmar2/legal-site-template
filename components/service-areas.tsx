import { MapPin } from "lucide-react"

const locations = [
  "Jamestown",
  "Lakewood", 
  "Falconer",
  "Bemus Point",
  "Celoron",
  "Fredonia",
  "Dunkirk"
]

export function ServiceAreas() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Serving Jamestown & Chautauqua County
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We represent clients throughout Chautauqua County in criminal defense, DUI, 
            and traffic violation matters.
          </p>
        </div>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {locations.map((location) => (
            <div 
              key={location}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/50 hover:bg-primary/5"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {location}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
