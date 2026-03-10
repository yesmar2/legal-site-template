import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowRight } from "lucide-react"

export function CriminalDefenseCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28">
      {/* Gradient orbs */}
      <div 
        aria-hidden="true"
        className="absolute -top-20 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-transparent blur-3xl" 
      />
      <div 
        aria-hidden="true"
        className="absolute -bottom-20 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-cyan-500/15 to-transparent blur-3xl" 
      />
      
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Facing Criminal Charges?
          <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Get the Defense You Deserve
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Don't face the criminal justice system alone. Contact us today for a free, 
          confidential consultation. We'll review your case, explain your options, and 
          fight to protect your rights and freedom.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Button 
            size="lg" 
            className="group h-14 gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-8 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <Calendar className="h-5 w-5" />
            Schedule Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 gap-3 border-white/15 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            (716) 555-0123
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-slate-500">
          Available 24/7 for emergencies. Evening and weekend appointments available.
        </p>
      </div>
    </section>
  )
}
