import type { PracticeArea } from '@/src/types/practice';
import { site } from '@/src/config/site';

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'criminal-defense',
    name: 'Criminal Defense',
    title: `${site.location.city} Criminal Defense Lawyers`,
    description:
      `Defense representation for DUI, assault, theft, and other criminal charges in ${site.location.city} and ${site.location.county}.`,
    heroDescription:
      `Arrested or charged with a crime in ${site.location.city} or anywhere in ${site.location.county}? Our criminal defense attorneys represent clients facing DUI charges, drug offenses, assault allegations, theft charges, and other criminal accusations.`,
    homeCardDescription:
       `Defense for DUI, assault, theft, and other criminal charges in ${site.location.city} and ${site.location.county}.`,
    href: '/practice/criminal-defense',
    icon: 'scale',
    courts: ['jamestown-city-court', 'dunkirk-city-court', 'chautauqua-county-court'],
    caseTypeIds: ['dui-dwi-defense', 'drug-charges', 'assault-charges', 'domestic-violence', 'theft-crimes'],
    introParagraphs: [
      `When you're facing criminal charges in ${site.location.city} or anywhere in ${site.location.county}, the consequences can be life-altering. A conviction can result in jail time, heavy fines, a permanent criminal record, and lasting damage to your reputation and career prospects. You need an experienced criminal defense attorney who understands the local court system and will fight aggressively to protect your rights.`,
      `At {{firmName}}, we've been defending clients in ${site.location.city} City Court, ${site.location.county} Court, and local town and village courts for over two decades. Our deep familiarity with local judges, prosecutors, and court procedures gives our clients a significant advantage. We know what strategies work in these courtrooms and how to navigate the system effectively.`,
      `Every case is unique, and we take the time to understand the specific circumstances surrounding your charges. Whether you're facing a DUI, drug possession, assault, or any other criminal charge, we thoroughly investigate the evidence, identify weaknesses in the prosecution's case, and develop a strategic defense tailored to achieve the best possible outcome for your situation.`,
      `We believe that everyone deserves a strong defense, regardless of the charges they face. From your first consultation through the resolution of your case, we keep you informed every step of the way and fight tirelessly to protect your freedom, your rights, and your future.`,
      `Criminal defense cases in ${site.location.city} and throughout ${site.location.county} can involve a wide range of allegations. Our attorneys represent clients facing the following types of criminal charges.`
    ],
    attorneySlugs: ['michael-anderson'],
    courtsHeading: `Criminal Courts in ${site.location.city} and ${site.location.county}`,
    courtsDescription:
      'Criminal charges in Jamestown and surrounding communities are typically handled in the following local and county courts.',
    faqs: [
      {
        question: 'What happens after a DUI arrest in Jamestown, NY?',
        answer:
          "After a DUI arrest in Jamestown, you'll be taken to the police station for booking and a chemical test (breathalyzer or blood test). You'll receive an appearance ticket for Jamestown City Court, usually within a few days. Your license may be temporarily suspended at your arraignment. It's critical to contact an attorney immediately—the sooner we get involved, the more options we have to protect your driving privileges and build your defense."
      },
      {
        question: 'Do I need a lawyer for arraignment in Jamestown City Court?',
        answer:
          'Yes, having an experienced attorney at your arraignment is extremely important. The arraignment is when bail is set, charges are formally presented, and initial pleas are entered. We can argue for reduced bail or release on your own recognizance, ensure you understand the charges and potential penalties, and make sure you do not make any statements that could hurt your case. Going to arraignment alone puts you at a significant disadvantage.'
      },
      {
        question: 'How long do criminal cases take in Jamestown City Court?',
        answer:
          'The timeline varies significantly depending on the complexity of your case. Simple misdemeanors may be resolved in 2–4 months, while felony cases can take 6–12 months or longer. Factors that affect timing include the amount of evidence, whether expert witnesses are needed, court schedules, and negotiation progress. We work efficiently to resolve cases as quickly as possible while never sacrificing the quality of your defense.'
      },
      {
        question: "What's the difference between a misdemeanor and felony in New York?",
        answer:
          'In New York, misdemeanors are less serious offenses punishable by up to one year in county jail. Felonies are more serious crimes that can result in state prison sentences of more than one year. Felonies are further classified from Class A (most serious) to Class E (least serious). Both types of convictions can have lasting impacts on your employment, housing, and civil rights, which is why strong legal representation is essential regardless of the charge.'
      },
      {
        question: 'Can criminal charges be dismissed in Jamestown City Court?',
        answer:
          'Yes, charges can be dropped or dismissed for various reasons. Common grounds include insufficient evidence, constitutional violations (illegal search and seizure, Miranda violations), witness credibility issues, or procedural errors by law enforcement. We thoroughly investigate every case to identify weaknesses in the prosecution’s evidence and grounds for dismissal. Even when dismissal is not possible, we often negotiate reduced charges or alternative sentencing options.'
      },
      {
        question: 'Should I talk to the police before hiring a lawyer?',
        answer:
          'No. You have the constitutional right to remain silent and to have an attorney present during questioning. Politely decline to answer questions and clearly state that you want to speak with a lawyer. Anything you say to police can and will be used against you in court. Even innocent statements can be taken out of context or misunderstood. Contact us immediately, and we will advise you on how to protect your rights.'
      }
    ],
    cta: {
      headline: 'Facing Criminal Charges?',
      subheadline: 'Get the Defense You Deserve',
      body: "Don't face the criminal justice system alone. Contact us today for a free, confidential consultation. We'll review your case, explain your options, and fight to protect your rights and freedom."
    }
  },
  {
    slug: 'personal-injury',
    name: 'Personal Injury',
    title: 'Jamestown Personal Injury Lawyers',
    description:
      'Legal representation for injury victims involved in car accidents, slip and fall cases, and other negligence claims.',
    heroDescription:
      `Seriously injured in a car accident, slip and fall, or other incident in ${site.location.city} or ${site.location.county}? Our personal injury lawyers help victims pursue compensation for medical bills, lost wages, and pain and suffering.`,
    homeCardDescription:
       'Injury representation for car accidents, slip and fall, and other negligence claims.',
    href: '/practice/personal-injury',
    icon: 'heart-pulse',
    courts: ['jamestown-city-court', 'dunkirk-city-court', 'chautauqua-county-court'],
    caseTypeIds: ['car-accidents', 'slip-and-fall', 'wrongful-death'],
    attorneySlugs: ['david-carter'],
    cta: {
      headline: 'Injured in an Accident?',
      subheadline: 'Get the Compensation You Deserve',
      body: "If you've been hurt due to someone else's negligence, you don't have to face the aftermath alone. Contact us for a free consultation. We'll review your case and fight for the compensation you need for medical bills, lost wages, and recovery."
    }
  },
  {
    slug: 'family-law',
    name: 'Family Law',
    title: `${site.location.city} Family Law Lawyers`,
    description:
      'Guidance and representation for divorce, custody, and other family law matters.',
    heroDescription:
      `Facing divorce, custody disputes, or other family law issues in ${site.location.city} or ${site.location.county}? Our family law attorneys provide guidance and representation to protect your rights and your children.`,
    homeCardDescription:
       'Guidance for divorce, custody, and other family law matters.',
    href: '/practice/family-law',
    icon: 'heart',
    courts: ['jamestown-city-court', 'chautauqua-county-court'],
    caseTypeIds: ['divorce', 'child-custody', 'child-support'],
    attorneySlugs: ['sarah-mitchell'],
    cta: {
      headline: 'Facing a Family Law Matter?',
      subheadline: "We're Here to Help",
      body: "Divorce, custody, and family issues are emotionally challenging. Our attorneys provide compassionate guidance and strong representation. Contact us for a confidential consultation to discuss your situation and your options."
    }
  },
  {
    slug: 'real-estate-law',
    name: 'Real Estate Law',
    title: `${site.location.city} Real Estate Lawyers`,
    description:
      'Legal assistance with residential and commercial real estate transactions and property matters.',
    heroDescription:
      `Buying, selling, or dealing with a property dispute in ${site.location.city} or ${site.location.county}? Our real estate lawyers help with residential and commercial transactions, contracts, and title issues.`,
    homeCardDescription:
       'Help with residential and commercial real estate transactions and property matters.',
    href: '/practice/real-estate-law',
    icon: 'building-2',
    courts: ['jamestown-city-court', 'dunkirk-city-court', 'ellicott-town-court'],
    caseTypeIds: ['residential-closings', 'commercial-transactions', 'landlord-tenant'],
    attorneySlugs: ['michael-anderson'],
    cta: {
      headline: 'Need Real Estate Legal Help?',
      subheadline: 'Protect Your Transaction',
      body: "Whether you're buying, selling, or dealing with a property dispute, having an experienced attorney can make all the difference. Contact us for a consultation to discuss your real estate matter."
    }
  }
];

