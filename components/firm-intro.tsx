import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FirmIntro() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          About Anderson Law
        </h2>
        
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Anderson Law represents clients throughout Jamestown and Chautauqua County in criminal 
          defense, personal injury, family law, and real estate matters. Attorney Michael J. Anderson 
          has more than 20 years of legal experience helping individuals navigate complex legal 
          issues in local courts.
        </p>
        
        <Link href="/about">
          <Button variant="outline" className="mt-6 gap-2">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
