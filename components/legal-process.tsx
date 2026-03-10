import { ShieldAlert, Gavel, FileSearch, Scale, type LucideIcon } from "lucide-react"

const steps: { step: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Arrest & Charges",
    description: "When arrested, you'll be read your rights and taken to the station for booking. Contact an attorney immediately to protect your rights from the start.",
    icon: ShieldAlert
  },
  {
    step: "02",
    title: "Arraignment",
    description: "Your first court appearance where charges are formally read and bail is set. We ensure you understand the charges and advocate for reasonable bail conditions.",
    icon: Gavel
  },
  {
    step: "03",
    title: "Pretrial Proceedings",
    description: "Discovery of evidence, motion filing, and negotiation with prosecutors. This is where strategic defense work happens to strengthen your case.",
    icon: FileSearch
  },
  {
    step: "04",
    title: "Case Resolution",
    description: "Your case may be resolved through negotiated plea, dismissal, or trial. We prepare for every possibility to achieve the best outcome for you.",
    icon: Scale
  }
]

export function LegalProcess() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Understanding the Legal Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Navigating the criminal justice system can be overwhelming. Here's what to expect 
            and how we guide you through each step.
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
