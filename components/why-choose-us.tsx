import { Shield, Users, Clock, Award } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "20+ Years Experience",
    description: "Decades of dedicated legal experience protecting clients in Jamestown and throughout Chautauqua County."
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description: "Every case receives individual attention. You work directly with your attorney, not a paralegal."
  },
  {
    icon: Clock,
    title: "Available When You Need Us",
    description: "We understand legal emergencies don't wait. Reach us when you need help most."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "A history of favorable outcomes for clients facing criminal charges, injury claims, and family disputes."
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose Anderson Law
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            When your future is on the line, you need an attorney who will fight for you.
          </p>
        </div>
        
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
