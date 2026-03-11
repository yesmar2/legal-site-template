import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
interface RelatedArea {
  title: string
  href: string
}

interface CourtRelatedAreasProps {
  areas: RelatedArea[]
}

export function CourtRelatedAreas({ areas }: CourtRelatedAreasProps) {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Related Practice Areas
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          If you are facing charges at this court, we can help.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4">
          {areas.map((area) => (
            <a key={area.href} href={area.href}>
              <Button variant="outline" className="gap-2">
                {area.title}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
