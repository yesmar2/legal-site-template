import Link from "next/link"

interface CourtHeroProps {
  courtName: string
  description: string
}

export function CourtHero({ courtName, description }: CourtHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-16 pt-32 md:pb-20 md:pt-40">
      <div 
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-transparent blur-3xl" 
      />
      <div 
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" 
      />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-slate-400">Courts</span>
          <span>/</span>
          <span className="text-slate-300">{courtName}</span>
        </nav>
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {courtName}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          {description}
        </p>
      </div>
    </section>
  )
}
