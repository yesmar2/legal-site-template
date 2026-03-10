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
    answer: "After a DUI arrest in Jamestown, you'll be taken to the police station for booking and a chemical test (breathalyzer or blood test). You'll receive an appearance ticket for Jamestown City Court, usually within a few days. Your license may be temporarily suspended at your arraignment. It's critical to contact an attorney immediately—the sooner we get involved, the more options we have to protect your driving privileges and build your defense."
  },
  {
    question: "Do I need a lawyer for arraignment in Jamestown City Court?",
    answer: "Yes, having an experienced attorney at your arraignment is extremely important. The arraignment is when bail is set, charges are formally presented, and initial pleas are entered. We can argue for reduced bail or release on your own recognizance, ensure you understand the charges and potential penalties, and make sure you don't make any statements that could hurt your case. Going to arraignment alone puts you at a significant disadvantage."
  },
  {
    question: "How long do criminal cases take in Chautauqua County?",
    answer: "The timeline varies significantly depending on the complexity of your case. Simple misdemeanors may be resolved in 2-4 months, while felony cases can take 6-12 months or longer. Factors that affect timing include the amount of evidence, whether expert witnesses are needed, court schedules, and negotiation progress. We work efficiently to resolve cases as quickly as possible while never sacrificing the quality of your defense."
  },
  {
    question: "What's the difference between a misdemeanor and felony in New York?",
    answer: "In New York, misdemeanors are less serious offenses punishable by up to one year in county jail. Felonies are more serious crimes that can result in state prison sentences of more than one year. Felonies are further classified from Class A (most serious) to Class E (least serious). Both types of convictions can have lasting impacts on your employment, housing, and civil rights, which is why strong legal representation is essential regardless of the charge."
  },
  {
    question: "Can criminal charges be dropped or dismissed?",
    answer: "Yes, charges can be dropped or dismissed for various reasons. Common grounds include insufficient evidence, constitutional violations (illegal search and seizure, Miranda violations), witness credibility issues, or procedural errors by law enforcement. We thoroughly investigate every case to identify weaknesses in the prosecution's evidence and grounds for dismissal. Even when dismissal isn't possible, we often negotiate reduced charges or alternative sentencing options."
  },
  {
    question: "Should I talk to the police before hiring a lawyer?",
    answer: "No. You have the constitutional right to remain silent and to have an attorney present during questioning. Politely decline to answer questions and clearly state that you want to speak with a lawyer. Anything you say to police can and will be used against you in court. Even innocent statements can be taken out of context or misunderstood. Contact us immediately, and we'll advise you on how to protect your rights."
  }
]

export function CriminalDefenseFAQ() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Get answers to common questions about criminal defense in Jamestown and 
            Chautauqua County. For specific advice about your case, contact us for a free consultation.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
