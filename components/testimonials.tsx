import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "James R.",
    role: "Criminal Defense Client",
    content: "When I was facing serious charges, Mr. Anderson's expertise and dedication made all the difference. He fought tirelessly for me and secured an outcome I never thought possible. I can't thank him enough.",
    rating: 5
  },
  {
    name: "Sarah M.",
    role: "DUI Defense Client",
    content: "I was terrified after my DUI arrest, but the team at Anderson Law walked me through everything step by step. They got my charges significantly reduced and helped me keep my license. Highly recommend.",
    rating: 5
  },
  {
    name: "Robert & Linda T.",
    role: "Personal Injury Clients",
    content: "After our car accident, we didn't know where to turn. Anderson Law handled everything with the insurance companies and got us fair compensation. They truly cared about our recovery.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real results for real people. Read what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <Quote className="absolute -top-2 right-4 h-16 w-16 text-primary/10" />
                
                {/* Rating */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="relative z-10 text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-6 border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
