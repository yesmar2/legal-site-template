import { AlertTriangle, DollarSign, Clock, Car, Lock } from "lucide-react"

const penalties = [
  {
    icon: DollarSign,
    title: "Fines",
    description: "Criminal convictions can result in fines ranging from hundreds to tens of thousands of dollars depending on the severity of the charge."
  },
  {
    icon: Clock,
    title: "Probation",
    description: "Courts may impose supervised or unsupervised probation, requiring regular check-ins, drug testing, and compliance with specific conditions."
  },
  {
    icon: Car,
    title: "License Suspension",
    description: "DUI and certain other offenses can result in temporary or permanent suspension of your driver's license, affecting your ability to work and travel."
  },
  {
    icon: Lock,
    title: "Jail or Prison Time",
    description: "Misdemeanors can carry up to one year in county jail, while felonies may result in state prison sentences of several years or more."
  }
]

export function CriminalDefensePenalties() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive">
            <AlertTriangle className="h-4 w-4" />
            Important Information
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Penalties for Criminal Charges in New York
          </h2>
          <p className="mt-4 text-muted-foreground">
            Criminal convictions in New York carry serious consequences that can affect your 
            freedom, finances, and future opportunities. Penalties vary significantly based on 
            the type of offense, your prior record, and the circumstances of the case.
          </p>
        </div>
        
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {penalties.map((penalty) => (
            <div 
              key={penalty.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <penalty.icon className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{penalty.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {penalty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Understanding your exposure is critical.</strong> The specific 
            penalties you face depend on many factors. An experienced criminal defense attorney can help 
            you understand the charges against you and work to minimize potential consequences.
          </p>
        </div>
      </div>
    </section>
  )
}
