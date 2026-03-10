import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"

interface CourtLocation {
  name: string
  address: string
  city: string
  phone: string
  hours: {
    days: string
    times: string
  }
}

interface CourtAboutProps {
  courtName: string
  paragraphs: string[]
  location: CourtLocation
}

export function CourtAbout({ courtName, paragraphs, location }: CourtAboutProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              About {courtName}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-primary" />
                Court Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium text-foreground">{location.name}</p>
                <p className="text-sm text-muted-foreground">{location.address}</p>
                <p className="text-sm text-muted-foreground">{location.city}</p>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Hours</p>
                  <p className="text-muted-foreground">{location.hours.days}</p>
                  <p className="text-muted-foreground">{location.hours.times}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">{location.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
