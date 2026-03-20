import { site } from '@/src/config/site';
import type { Guide } from '@/src/types/content';

export const guides: Guide[] = [
  {
    title: `What Happens After a DUI Arrest in ${site.location.city} ${site.address.state}`,
    slug: "what-happens-after-dui-arrest-jamestown",
    description:
      `Step-by-step explanation of what happens after a DUI arrest in ${site.location.city} including arraignment in ${site.location.city} City Court.`,
    quickAnswer:
      'After a DUI arrest in Jamestown, most people are arraigned in Jamestown City Court within about 24 hours or the next business day.',
    practiceArea: "criminal-defense",
    court: "jamestown-city-court",
    city: site.location.city,
    county: site.location.county,
    lastReviewed: "January 2026",
    reviewedBy: `${site.firmName} – Criminal Defense Attorney`,
    courts: ["jamestown-city-court"],
    takeaways: [
      "Most DUI arrests in New York lead to an arraignment in local court within about 24 hours or the next business day.",
      "Your driver's license can be suspended or restricted before the criminal case is fully resolved.",
      "Pre-trial negotiations with the prosecutor are where many DUI cases are resolved through plea agreements.",
      "An experienced DUI attorney can challenge the stop, testing procedures, and other key evidence.",
      "Early legal advice often creates more options for protecting your record and driving privileges."
    ],
    sources: [
      {
        title: "New York Vehicle and Traffic Law §1192",
        url: "https://www.nysenate.gov/legislation/laws/VAT/1192"
      },
      {
        title: "New York State DMV – Alcohol and Drug Driving Violations",
        url: "https://dmv.ny.gov/tickets/alcohol-drug-driving-violations"
      },
      {
        title: "New York Unified Court System – Criminal Case Process",
        url: "https://www.nycourts.gov/courthelp/criminal/criminalCaseBasics.shtml"
      }
    ],
    processSteps: [
      {
        title: 'Arrest and Booking',
        description:
          'Most criminal cases begin with an arrest and booking at the police station, where basic information and fingerprints are taken.'
      },
      {
        title: 'Arraignment',
        description:
          'Your first court appearance, where charges are read, a plea is entered, and bail or release conditions are set.'
      },
      {
        title: 'License or Privilege Issues',
        description:
          'Depending on the charge, you may face administrative consequences such as driver’s license suspension or other restrictions.'
      },
      {
        title: 'Pre-Trial Proceedings',
        description:
          'Your attorney reviews discovery, files motions, and negotiates with the prosecutor while preparing your defense.'
      },
      {
        title: 'Trial or Plea Resolution',
        description:
          'Many cases resolve by negotiated plea; others proceed to trial where the prosecution must prove the case beyond a reasonable doubt.'
      }
    ],
    faqs: [
      {
        question: 'Will my license be suspended after a DUI arrest in New York?',
        answer:
          'License consequences depend on your charge, prior record, and whether you refused chemical testing. In many cases, an administrative suspension can occur at or shortly after arraignment. A lawyer can explain your options and whether you may be eligible for a conditional or restricted license.'
      },
      {
        question: 'Do I have to appear in court after a DUI arrest?',
        answer:
          'Most DUI and criminal cases require at least one in-person court appearance, especially for arraignment. In some situations, your lawyer may be able to appear on your behalf for later dates, but you should never miss a required appearance without specific guidance from your attorney.'
      },
      {
        question: 'Can DUI charges be reduced?',
        answer:
          'In some cases, DUI charges can be reduced through negotiations, especially if there are weaknesses in the evidence, issues with testing procedures, or strong mitigating circumstances. Results depend heavily on the facts of your case and the policies of the local court and prosecutor.'
      }
    ],
    cta: {
      headline: `Charged with a DUI in ${site.location.city}?`,
      body:
        `A criminal defense lawyer can explain your options, appear with you in local courts, and work to protect your record and driving privileges. Call ${site.phone} for a confidential consultation with ${site.firmName}.`
    },
    sidebar: {
      highlightTitle: 'Charged with a DUI?',
      highlightBody:
        `If you’ve been arrested for DUI or another criminal charge in ${site.location.city} or anywhere in ${site.location.county}, speaking with a local defense attorney early can help protect your record and driving privileges.`,
      highlightCtaLabel: 'Schedule Consultation',
      practiceLinks: [
        { label: 'Criminal Defense', href: '/practice/criminal-defense', icon: 'scale' },
        { label: 'DUI Defense', href: '/practice/criminal-defense', icon: 'car' },
        { label: 'Drug Charges', href: '/practice/criminal-defense', icon: 'pill' },
        { label: 'Assault Charges', href: '/practice/criminal-defense', icon: 'gavel' }
      ],
      courtLinks: [
        { label: 'Jamestown City Court', href: '/courts/jamestown-city-court', icon: 'building-2' },
        { label: 'Dunkirk City Court', href: '/courts/dunkirk-city-court', icon: 'building-2' },
        { label: 'Chautauqua County Court', href: '/courts/chautauqua-county-court', icon: 'building-2' }
      ]
    }
  },
  {
    title: `What Happens at an Arraignment in ${site.location.city} City Court`,
    slug: "jamestown-city-court-arraignment",
    description:
      `Learn what to expect during an arraignment in ${site.location.city} City Court and the next steps in a criminal case.`,
    quickAnswer:
      `At an arraignment in ${site.location.city} City Court, the judge explains the charges and your rights, takes your plea, and sets bail or release conditions.`,
    practiceArea: "criminal-defense",
    court: "jamestown-city-court",
    city: site.location.city,
    county: site.location.county,
    lastReviewed: "January 2026",
    courts: ["jamestown-city-court"],
    processSteps: [
      {
        title: 'Arrest and Booking',
        description:
          'After an arrest, you are taken to the police station for booking, fingerprints, and basic processing.'
      },
      {
        title: 'Arraignment in City Court',
        description:
          `Your first appearance in ${site.location.city} City Court, where the judge advises you of the charges, your rights, and considers bail or release conditions.`
      },
      {
        title: 'Discovery and Pre-Trial Motions',
        description:
          'Your attorney obtains and reviews police reports, video, and other evidence, and may file motions challenging the legality of the stop, arrest, or statements.'
      },
      {
        title: 'Negotiations and Hearing Dates',
        description:
          'The court may schedule additional dates for conferences or hearings while your attorney negotiates with the prosecutor and prepares your defense.'
      },
      {
        title: 'Disposition by Plea or Trial',
        description:
          'The case may resolve by plea agreement or proceed to trial, where the judge will determine guilt or innocence based on the evidence presented.'
      }
    ],
    faqs: [
      {
        question: 'What happens at an arraignment in city court?',
        answer:
          'At arraignment, the judge reads the charges, advises you of your rights, and asks for your plea. Bail or release conditions may be set. It is usually best to enter a not guilty plea until you have consulted with an attorney.'
      },
      {
        question: 'Will I have to speak at arraignment?',
        answer:
          'Typically you will only need to confirm your identity and enter a plea. Your attorney can speak on your behalf regarding bail, scheduling, and other issues.'
      },
      {
        question: 'Can my case be resolved at arraignment?',
        answer:
          'Some minor cases may resolve quickly, but many require additional dates for negotiations, motions, or hearings. Your attorney will advise you on the best strategy based on the facts of your case.'
      }
    ],
    cta: {
      headline: `Have an upcoming arraignment in ${site.location.city} City Court?`,
      body:
        `An experienced defense lawyer can appear with you, explain the process, and work to protect your rights from the very first court date. Call ${site.phone} to schedule a consultation with ${site.firmName}.`
    }
  },
  {
    title: `How Divorce Works in ${site.location.county} ${site.address.state}`,
    slug: "chautauqua-county-divorce-process",
    description:
      `Overview of the divorce process in ${site.location.county} Family Court.`,
    quickAnswer:
      `A divorce in ${site.location.county} typically involves filing, temporary orders, financial disclosure, negotiations or conferences, and then either a settlement or trial before the court enters a final judgment.`,
    practiceArea: "family-law",
    court: "chautauqua-county-family-court",
    city: site.location.county,
    county: site.location.county,
    lastReviewed: "January 2026",
    courts: ["chautauqua-county-family-court"],
    processSteps: [
      {
        title: 'Initial Consultation and Case Review',
        description:
          'You meet with a family law attorney to review your situation, goals, and the basic steps of the divorce process.'
      },
      {
        title: 'Filing for Divorce',
        description:
          'One spouse files a petition or summons for divorce, and the other spouse is formally served with the papers.'
      },
      {
        title: 'Temporary Orders and Discovery',
        description:
          'The court may issue temporary orders related to custody, support, or property while both sides exchange financial and other relevant information.'
      },
      {
        title: 'Negotiations and Conferences',
        description:
          'Most cases involve negotiation, mediation, or court conferences to try to reach agreements on property, support, and parenting issues.'
      },
      {
        title: 'Settlement or Trial',
        description:
          'If agreements are reached, the court reviews and finalizes them. If not, the case proceeds to trial where a judge makes decisions on disputed issues.'
      }
    ],
    faqs: [
      {
        question: 'How long does a divorce take in New York?',
        answer:
          'The timeline depends on whether your case is contested, the complexity of your finances, and the court’s schedule. Some uncontested cases resolve in a few months, while contested matters can take a year or more.'
      },
      {
        question: 'Do I have to appear in court for my divorce?',
        answer:
          'You may need to appear for certain conferences or hearings, especially in contested cases. Your attorney can often handle many procedural matters on your behalf, but you should follow their advice on required appearances.'
      },
      {
        question: 'Can we resolve our divorce without a trial?',
        answer:
          'Yes. Many divorces are resolved through negotiation, mediation, or settlement conferences, allowing you and your spouse to maintain more control over the outcome.'
      }
    ],
    cta: {
      headline: `Considering divorce in ${site.location.county}?`,
      body:
        `A family law attorney can help you understand your options, protect your rights, and guide you through each step of the process. Call ${site.phone} to schedule a confidential consultation with ${site.firmName}.`
    }
  },
  {
    title: `Applying for Medicaid in ${site.location.county} (2026)`,
    slug: 'applying-for-medicaid-chautauqua-county-2026',
    description:
      `Step-by-step overview of how to apply for Medicaid in ${site.location.county}, including level-of-care screening, financial review, and local filing offices.`,
    quickAnswer:
      `Applying for Medicaid in ${site.location.county} usually involves a level-of-care assessment through CASA in ${site.location.city}, a financial review by local social services, and filing through the Chautauqua County Department of Social Services.`,
    practiceArea: 'elder-law',
    court: 'chautauqua-county-court',
    city: site.location.city,
    county: site.location.county,
    lastReviewed: 'March 2026',
    reviewedBy: `${site.firmName} – Elder Law Attorney`,
    courts: ['chautauqua-county-court', 'jamestown-city-court'],
    takeaways: [
      'Deadline: As of March 2026, the 30-month Home Care look-back has not started yet in NY.',
      'Limits: You must have less than $33,038 in resources to qualify as an individual.',
      'Protection: Your home is exempt up to $1,130,000 in equity if a spouse or certain relatives live there.',
      'Action: A formal "Level of Care" assessment from Chautauqua CASA is required before filing.'
    ],
    sources: [
      {
        title:
          'NYS DOH Medicaid Levels (March 2026) — GIS 26 MA/03 and related General Information System memos',
        url: 'https://www.health.ny.gov/health_care/medicaid/publications/pub2026gis.htm'
      },
      {
        title: 'Chautauqua County DSS Services',
        url: 'https://chqgov.com/human-services/social-services'
      },
      {
        title: 'NY Social Services Law § 366 — statute governing spousal refusal',
        url: 'https://www.nysenate.gov/legislation/laws/SOS/366'
      },
      {
        title: 'New York State MAPS Manual — Medicaid administrative procedures',
        url: 'https://www.health.ny.gov/health_care/medicaid/publications/search_by_topic.htm'
      }
    ],
    processSteps: [
      {
        title: 'The 60-Month Financial Audit',
        description:
          'Before filing any application, we conduct a comprehensive look-back audit of all financial records dating back five years (to March 2021). We identify any uncompensated asset transfers or gifts that might trigger a penalty period under New York’s Western Region rate, currently $13,765 per month for 2026. Correcting these issues early is the only way to ensure a seamless approval.'
      },
      {
        title: 'CASA Nursing Assessment & Level of Care',
        description:
          'To qualify for nursing home coverage, an applicant must be medically cleared for nursing home level of care. We coordinate the mandatory assessment with the Chautauqua County CASA (Community Alternative Systems Agency). A registered nurse will perform a home visit to evaluate medical needs and verify eligibility for the Medicaid Long-Term Care program.'
      },
      {
        title: 'Strategic Asset Protection & Trust Funding',
        description:
          'Once the audit and medical assessment are clear, we implement legal protections to safeguard your legacy. This includes moving non-exempt assets into a Medicaid Asset Protection Trust (MAPT) or utilizing Spousal Refusal strategies. Our goal is to ensure the applicant meets the $33,038 resource limit while protecting the $1,130,000 home equity exemption allowed in 2026.'
      },
      {
        title: 'Formal Application Filing with Chautauqua County DSS',
        description:
          'We handle the preparation and submission of the formal DOH-4220 application. Depending on your location, we file with the Medical Assistance Division at the local Department of Social Services (DSS) offices: Jamestown Office - 110 East 4th Street, Jamestown, NY 14701; Dunkirk Office - 319 Central Avenue, Dunkirk, NY 14048; and Mayville Office - 7 North Erie Street, Mayville, NY 14757.'
      },
      {
        title: 'Income Spend-Down Management',
        description:
          'If the applicant’s monthly income exceeds the $1,836 eligibility threshold, we establish a pooled income trust. This allows you to spend down excess income on personal bills and supplemental needs while remaining fully eligible for Medicaid coverage. We manage the setup to ensure your Social Security and pension benefits continue to support your quality of life.'
      }
    ],
    faqs: [
      {
        question: 'Where do I file a Medicaid application in Chautauqua County?',
        answer:
          'Applications are generally handled through the Chautauqua County Department of Social Services (LDSS), with local access points in Jamestown and Mayville.'
      },
      {
        question: 'How far back can Medicaid review financial transactions?',
        answer:
          'For institutional coverage, New York generally applies a 5-year (60-month) look-back period and reviews transfers and other financial activity during that time.'
      },
      {
        question: 'What if my income is over $1,836 per month?',
        answer:
          'In some cases, a pooled income trust can be used to help meet income-eligibility requirements while still allowing funds to be used for approved living expenses.'
      }
    ],
    cta: {
      headline: `Need help applying for Medicaid in ${site.location.county}?`,
      body:
        `Elder law planning can affect long-term care options, asset protection, and family finances. Call ${site.phone} to schedule a consultation with ${site.firmName}.`
    },
    lawyerHelp: {
      bullets: [
        'Audit Protection: We perform a forensic review of 60 months of bank statements to identify "gift" triggers before the County finds them.',
        'Asset Sheltering: We implement Spousal Refusal and Asset Protection Trusts to keep your life savings in your family, not the nursing home.',
        'Bureaucracy Management: We serve as your primary point of contact for Chautauqua County DSS, handling the 45-day review and all follow-up inquiries.',
        'CASA Preparation: We guide you through the medical assessment process to ensure the "Nursing Home Level of Care" is correctly documented.'
      ]
    },
    localResources: [
      {
        label: 'Chautauqua County Department of Social Services',
        href: 'https://chqgov.com/human-services/social-services',
        description: 'For Medicaid application filing and eligibility interviews.',
        details: [
          'Jamestown Office: 110 East 4th Street, Jamestown, NY 14701 | (716) 661-8200',
          'Dunkirk Office: 319 Central Avenue, Dunkirk, NY 14048 | (716) 363-3500',
          'Mayville Office: 7 North Erie Street (HRC Building), Mayville, NY 14757 | (716) 753-4000'
        ]
      },
      {
        label: 'Community Alternative Systems Agency (CASA)',
        description: 'For mandatory nursing home level-of-care assessments.',
        details: [
          'Mayville Office: 7 North Erie Street, Mayville, NY 14757',
          'Contact Numbers: Jamestown: (716) 661-4447',
          'Dunkirk: (716) 363-4447',
          'Mayville: (716) 753-4447'
        ]
      }
    ]
  },
];


