"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What happens after a DUI arrest in Jamestown, NY?",
    answer: "After a DUI arrest in Jamestown, you'll typically be taken to the police station for booking and a chemical test. You'll receive an appearance ticket for Jamestown City Court. Your license may be temporarily suspended at arraignment. Contact us immediately—the sooner we get involved, the more options we have to protect your rights and driving privileges."
  },
  {
    question: "Where are criminal cases heard in Jamestown?",
    answer: "Most criminal cases in Jamestown are initially heard at Jamestown City Court located at 200 E. Third Street. More serious felony cases may be transferred to Chautauqua County Court in Mayville. We regularly appear in both courts and have extensive experience with local procedures and personnel."
  },
  {
    question: "Do I need a lawyer for arraignment in Jamestown City Court?",
    answer: "Yes, having an attorney at your arraignment is crucial. The arraignment is when bail is set, charges are formally presented, and initial pleas are entered. We can argue for reduced bail or release on your own recognizance, and ensure you don't make statements that could hurt your case later."
  },
  {
    question: "How long does a criminal case take in Chautauqua County?",
    answer: "Case timelines in Chautauqua County vary significantly. Simple misdemeanors may resolve in 2-4 months, while complex felonies can take 6-12 months or longer. Factors include court schedules, evidence complexity, and negotiation progress. We keep you informed at every stage and work efficiently while protecting your rights."
  },
  {
    question: "What should I do if I'm arrested in Chautauqua County?",
    answer: "Remain calm and exercise your right to remain silent—politely decline to answer questions until you have an attorney present. Do not resist arrest or argue with officers. Contact our office immediately. Remember, anything you say can be used against you in court."
  },
  {
    question: "Can I get a DUI charge reduced or dismissed in New York?",
    answer: "It's often possible to challenge DUI charges based on improper traffic stops, faulty breathalyzer calibration, or procedural errors. New York offers programs like conditional discharge for first-time offenders. Every case is unique, and we thoroughly examine all evidence to identify the strongest defense strategy for your situation."
  }
]

export function FAQSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Get answers to common legal questions. For specific advice about your situation, 
            contact us for a free consultation.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
