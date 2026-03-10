"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

interface CourtCTAProps {
  courtName: string
}

export function CourtCTA({ courtName }: CourtCTAProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Facing Charges at {courtName}?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Our attorneys regularly appear at {courtName} and understand the local 
          procedures. Contact us for a free consultation about your case.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
            <Calendar className="h-5 w-5" />
            Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
            <Phone className="h-5 w-5" />
            (716) 555-0123
          </Button>
        </div>
      </div>
    </section>
  )
}
