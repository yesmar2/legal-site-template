import { ShieldAlert, Gavel, FileSearch, Scale, type LucideIcon } from "lucide-react"

const steps: { step: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Arrest or Investigation",
    description: "If you've been arrested or learn you're under investigation, contact us immediately. Early intervention allows us to protect your rights from the start and potentially prevent charges from being filed.",
    icon: ShieldAlert
  },
  {
    step: "02",
    title: "Arraignment",
    description: "Your first court appearance where charges are formally read and bail is determined. We advocate for your release and ensure you understand the charges against you and the potential consequences.",
    icon: Gavel
  },
  {
    step: "03",
    title: "Pretrial Hearings",
    description: "During this phase, we review all evidence, file motions to suppress illegally obtained evidence, negotiate with prosecutors, and prepare your defense strategy for trial if necessary.",
    icon: FileSearch
  },
  {
    step: "04",
    title: "Trial or Resolution",
    description: "Your case may be resolved through dismissal, plea negotiation, or trial. We prepare every case as if it's going to trial, ensuring we're ready to fight for the best possible outcome.",
    icon: Scale
  }
]

export function CriminalDefenseProcess() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Criminal Defense Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Understanding what to expect can help reduce anxiety during a difficult time. 
            Here's how we guide you through the criminal justice process.
          </p>
        </div>
        
        <div className="mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2 lg:block" />
            
            <div className="space-y-8 lg:space-y-12">
              {steps.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className={`flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="rounded-xl bg-card p-6 shadow-sm">
                        <span className="text-sm font-semibold text-primary">{item.step}</span>
                        <h3 className="mt-1 text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline icon */}
                    <div className="absolute left-8 top-6 hidden md:left-1/2 lg:relative lg:left-0 lg:top-0 lg:block">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary shadow-md">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="hidden flex-1 lg:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
