"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CriminalDefenseHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-20 pt-32 md:pb-24 md:pt-40">
      {/* Refined gradient orbs */}
      <div 
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-transparent blur-3xl" 
      />
      <div 
        aria-hidden="true"
        className="absolute -bottom-20 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl" 
      />
      
      {/* Subtle grid pattern */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" 
      />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-slate-300">Criminal Defense</span>
        </nav>
        
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Jamestown{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Criminal Defense Lawyers
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400">
            Facing criminal charges can be overwhelming. Our experienced defense attorneys in 
            Jamestown and Chautauqua County fight to protect your rights, your freedom, and your future.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <Button 
              size="lg" 
              className="group h-12 gap-2 bg-gradient-to-r from-blue-600 to-blue-500 px-6 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <Calendar className="h-5 w-5" />
              Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 gap-2 border-white/15 bg-white/5 px-6 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              (716) 555-0123
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
