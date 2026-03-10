import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary via-accent to-primary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Ready to Discuss Your Case?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Don't face legal challenges alone. Contact us today for a free, confidential 
          consultation to discuss your situation and learn about your options.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="gap-2 text-base font-semibold">
            <Calendar className="h-5 w-5" />
            Schedule Free Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 border-primary-foreground/30 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Phone className="h-5 w-5" />
            (716) 555-0123
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-primary-foreground/70">
          Available 24/7 for emergencies. Evening and weekend appointments available.
        </p>
      </div>
    </section>
  )
}
