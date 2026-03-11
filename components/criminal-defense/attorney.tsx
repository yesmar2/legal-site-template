import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, Award, Briefcase } from "lucide-react"
export function CriminalDefenseAttorney() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Small photo placeholder */}
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <Briefcase className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          {/* Compact bio */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-semibold text-foreground">
              Attorney <span className="text-primary">Michael J. Anderson</span>
            </h2>
            
            <p className="mt-3 text-muted-foreground">
              With over 20 years of criminal defense experience in Jamestown and Chautauqua County, 
              Attorney Anderson brings former prosecutor insight to every case. He understands the 
              local court system and is committed to protecting your rights.
            </p>
            
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
              <span className="flex items-center gap-1.5">
                <Scale className="h-4 w-4 text-primary" />
                Former Prosecutor
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                20+ Years Experience
              </span>
            </div>
            
            <a href="/attorney">
              <Button variant="outline" size="sm" className="mt-5 gap-2">
                View Full Profile
                <ArrowRight className="h-3 w-3" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
