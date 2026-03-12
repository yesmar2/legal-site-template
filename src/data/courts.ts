import { Scale, Car, FileText, Users, Home, Gavel, AlertTriangle, Briefcase } from 'lucide-react';

export const courts = [
  {
    slug: 'jamestown-city-court',
    name: 'Jamestown City Court',
    cardDescription:
      'Handles many misdemeanor criminal cases, traffic violations, and preliminary hearings for felony cases in Jamestown.',
    homeCardDescription:
      'Handles many criminal and traffic cases in Jamestown City.',
    href: '/courts/jamestown-city-court',
    page: {
      title: 'Jamestown City Court | Criminal & Traffic Court Information',
      description:
        'Information about criminal and civil cases handled in Jamestown City Court in Chautauqua County, New York.'
    },
    aboutParagraphs: [
      'Jamestown City Court handles many local criminal and civil matters in Jamestown, New York. The court has jurisdiction over misdemeanor criminal offenses, traffic violations, small claims cases, and preliminary hearings for felony charges before cases move to county court.',
      'As a court of limited jurisdiction, Jamestown City Court handles the initial stages of felony cases, including arraignments and preliminary hearings, before transferring them to Chautauqua County Court for further proceedings.',
      'If you have been charged with a crime or traffic violation in Jamestown, your case will likely begin at Jamestown City Court. Having an experienced attorney who regularly practices in this court can make a significant difference in your case.'
    ],
    location: {
      name: 'Jamestown City Court',
      address: '200 E. Third Street',
      city: 'Jamestown, NY 14701',
      phone: '(716) 483-7561',
      hours: { days: 'Monday - Friday', times: '9:00 AM - 4:30 PM' }
    },
    caseTypes: [
      {
        icon: Scale,
        title: 'Misdemeanor Criminal Charges',
        description:
          'Class A and B misdemeanors including petit larceny, assault, and criminal mischief.'
      },
      {
        icon: Car,
        title: 'Traffic Violations',
        description:
          'Speeding tickets, DUI/DWI charges, and other vehicle and traffic law violations.'
      },
      {
        icon: FileText,
        title: 'Preliminary Felony Hearings',
        description:
          'Initial hearings for felony charges before cases are transferred to County Court.'
      },
      {
        icon: Users,
        title: 'Small Claims Cases',
        description:
          'Civil disputes involving claims up to $5,000 between individuals or businesses.'
      },
      {
        icon: Home,
        title: 'Landlord-Tenant Disputes',
        description:
          'Housing court matters including evictions and lease disputes.'
      }
    ],
    beforeAppearance: [
      { text: 'Arrive at least 15 minutes before your scheduled time' },
      { text: 'Bring your court paperwork and any required documents' },
      { text: 'Dress appropriately in business or business casual attire' },
      { text: 'Turn off cell phones before entering the courtroom' }
    ],
    duringAppearance: [
      { text: 'Stand when the judge enters and when addressing the court' },
      { text: 'Address the judge as "Your Honor"' },
      { text: 'Speak clearly and only when asked to respond' },
      { text: 'If you have an attorney, let them speak on your behalf' }
    ],
    relatedAreas: [
      { title: 'Criminal Defense', href: '/jamestown-criminal-defense-lawyer' },
      { title: 'DUI Defense', href: '/guides/dui-arrest-new-york' },
      { title: 'Traffic Violations', href: '/jamestown-criminal-defense-lawyer' }
    ]
  },
  {
    slug: 'dunkirk-city-court',
    name: 'Dunkirk City Court',
    cardDescription:
      'Local court serving Dunkirk handling criminal misdemeanors, traffic violations, and preliminary hearings.',
    homeCardDescription:
      'Local court for criminal and traffic matters in Dunkirk.',
    href: '/courts/dunkirk-city-court',
    page: {
      title: 'Dunkirk City Court | Criminal & Traffic Court Information',
      description:
        'Information about Dunkirk City Court in Chautauqua County, NY. Learn about case types, court procedures, and what to expect at your court appearance.'
    },
    aboutParagraphs: [
      'Dunkirk City Court serves the City of Dunkirk in northern Chautauqua County, New York. The court handles misdemeanor criminal cases, traffic violations, and civil matters including small claims and landlord-tenant disputes.',
      'Similar to other city courts in New York, Dunkirk City Court conducts preliminary hearings for felony cases before they are transferred to Chautauqua County Court in Mayville. The court also handles arraignments and bail hearings.',
      "If you have been charged with a crime or traffic offense in Dunkirk, your case will be heard at Dunkirk City Court. Our attorneys are familiar with the court's procedures and regularly represent clients in this jurisdiction."
    ],
    location: {
      name: 'Dunkirk City Court',
      address: '342 Central Avenue',
      city: 'Dunkirk, NY 14048',
      phone: '(716) 366-2055',
      hours: { days: 'Monday - Friday', times: '9:00 AM - 4:00 PM' }
    },
    caseTypes: [
      {
        icon: Scale,
        title: 'Misdemeanor Criminal Charges',
        description:
          'Class A and B misdemeanors including theft, assault, and drug possession.'
      },
      {
        icon: Car,
        title: 'Traffic Violations',
        description:
          'Speeding tickets, DUI/DWI charges, and vehicle and traffic law violations.'
      },
      {
        icon: FileText,
        title: 'Preliminary Felony Hearings',
        description:
          'Initial hearings for felony charges before transfer to County Court.'
      },
      {
        icon: Users,
        title: 'Small Claims Cases',
        description: 'Civil disputes involving claims up to $5,000.'
      },
      {
        icon: Home,
        title: 'Landlord-Tenant Disputes',
        description:
          'Eviction proceedings and housing-related legal matters.'
      }
    ],
    beforeAppearance: [
      { text: 'Arrive at least 15 minutes before your scheduled time' },
      { text: 'Bring your court paperwork and photo identification' },
      { text: 'Dress appropriately in business or business casual attire' },
      { text: 'Turn off cell phones before entering the courtroom' }
    ],
    duringAppearance: [
      { text: 'Stand when the judge enters and when addressing the court' },
      { text: 'Address the judge as "Your Honor"' },
      { text: 'Speak clearly and only when asked to respond' },
      { text: 'If you have an attorney, let them speak on your behalf' }
    ],
    relatedAreas: [
      { title: 'Criminal Defense', href: '/jamestown-criminal-defense-lawyer' },
      { title: 'DUI Defense', href: '/guides/dui-arrest-new-york' },
      { title: 'Traffic Violations', href: '/jamestown-criminal-defense-lawyer' }
    ]
  },
  {
    slug: 'chautauqua-county-court',
    name: 'Chautauqua County Court',
    cardDescription:
      'Handles felony criminal cases and higher-level matters for Chautauqua County.',
    homeCardDescription:
      'County-level court handling serious felony criminal cases.',
    href: '/courts/chautauqua-county-court',
    page: {
      title: 'Chautauqua County Court | Felony & Criminal Court Information',
      description:
        'Information about Chautauqua County Court in Mayville, NY. Learn about felony cases, court procedures, and what to expect at your court appearance.'
    },
    aboutParagraphs: [
      'Chautauqua County Court is the main trial court for felony criminal cases in Chautauqua County, New York. Located in the county seat of Mayville, this court handles serious criminal matters that exceed the jurisdiction of local city and town courts.',
      'Cases typically arrive at County Court after preliminary proceedings in local courts such as Jamestown City Court or Dunkirk City Court. The County Court has jurisdiction over all felony offenses, from Class E felonies to the most serious Class A felonies.',
      "If you are facing felony charges in Chautauqua County, your case will be prosecuted by the District Attorney's office and heard before a County Court judge. Having experienced defense counsel who understands the procedures and personnel at this court is essential."
    ],
    location: {
      name: 'Chautauqua County Courthouse',
      address: '3 N. Erie Street',
      city: 'Mayville, NY 14757',
      phone: '(716) 753-4331',
      hours: {
        days: 'Monday - Friday',
        times: '9:00 AM - 5:00 PM'
      }
    },
    caseTypes: [
      {
        icon: Scale,
        title: 'Felony Criminal Cases',
        description:
          'All felony offenses including violent crimes, drug felonies, and property crimes.'
      },
      {
        icon: Gavel,
        title: 'Grand Jury Proceedings',
        description:
          'Indictment proceedings for felony charges presented by the District Attorney.'
      },
      {
        icon: FileText,
        title: 'Appeals from Local Courts',
        description:
          'Appeals from city, town, and village court decisions within the county.'
      },
      {
        icon: AlertTriangle,
        title: 'Serious Drug Offenses',
        description:
          'Drug possession, sale, and trafficking charges at the felony level.'
      },
      {
        icon: Briefcase,
        title: 'Major Civil Matters',
        description:
          'Civil cases exceeding local court jurisdiction limits.'
      }
    ],
    beforeAppearance: [
      { text: 'Arrive at least 30 minutes early for security screening' },
      { text: 'Bring all court documents, identification, and any required paperwork' },
      { text: 'Dress in formal business attire appropriate for court' },
      { text: 'Leave cell phones and electronic devices in your vehicle' }
    ],
    duringAppearance: [
      { text: 'Rise when the judge enters and remain standing until instructed' },
      { text: 'Address the judge as "Your Honor" at all times' },
      { text: 'Do not speak unless directly addressed by the court' },
      { text: "Follow your attorney's guidance throughout the proceedings" }
    ],
    relatedAreas: [
      { title: 'Criminal Defense', href: '/jamestown-criminal-defense-lawyer' },
      { title: 'Felony Defense', href: '/jamestown-criminal-defense-lawyer' },
      { title: 'Drug Charges', href: '/jamestown-criminal-defense-lawyer' }
    ]
  },
  {
    slug: 'ellicott-town-court',
    name: 'Ellicott Town Court',
    cardDescription:
      'Local town court serving Ellicott and nearby communities for traffic, criminal, and town-level matters.',
    homeCardDescription:
      'Town court for traffic, criminal, and local disputes in Ellicott.',
    href: '/courts/ellicott-town-court',
    page: {
      title: 'Ellicott Town Court | Local Court Information',
      description:
        'Information about Ellicott Town Court in Chautauqua County, New York, including common case types and what to expect at your court appearance.'
    },
    aboutParagraphs: [
      'Ellicott Town Court handles local matters for the Town of Ellicott and surrounding communities in Chautauqua County, New York. Cases may include traffic violations, misdemeanor criminal matters, small claims disputes, and landlord-tenant proceedings within the court\'s jurisdiction.',
      'For many clients, a case in town court is the first step in resolving a legal problem locally. Understanding the court\'s procedures, scheduling expectations, and filing requirements can make a meaningful difference in how a case moves forward.',
      'Our attorneys represent clients in courts throughout Chautauqua County, including Ellicott Town Court, and provide guidance on what to expect before each appearance.'
    ],
    location: {
      name: 'Ellicott Town Court',
      address: 'Court information available by appointment',
      city: 'Ellicott, NY',
      phone: 'Call for current court contact information',
      hours: {
        days: 'Court hours vary',
        times: 'Please confirm your appearance time in advance'
      }
    },
    caseTypes: [
      {
        icon: Scale,
        title: 'Misdemeanor Criminal Charges',
        description:
          'Town court criminal matters such as misdemeanors, arraignments, and related appearances within local jurisdiction.'
      },
      {
        icon: Car,
        title: 'Traffic Violations',
        description:
          'Speeding tickets, driving offenses, and other vehicle and traffic law matters heard at the local court level.'
      },
      {
        icon: FileText,
        title: 'Preliminary Hearings',
        description:
          'Initial court appearances and preliminary proceedings before a case moves forward.'
      },
      {
        icon: Users,
        title: 'Small Claims Cases',
        description:
          'Civil claims and local disputes that fall within the court\'s monetary jurisdiction.'
      },
      {
        icon: Home,
        title: 'Landlord-Tenant Matters',
        description:
          'Local housing disputes, including evictions and lease-related issues.'
      }
    ],
    beforeAppearance: [
      { text: 'Review your court notice carefully and confirm the date, time, and courtroom' },
      { text: 'Bring your paperwork, identification, and any documents related to your case' },
      { text: 'Arrive early to allow time for check-in and courtroom procedures' },
      { text: 'Speak with your attorney in advance about what to expect at the appearance' }
    ],
    duringAppearance: [
      { text: 'Address the judge respectfully and follow courtroom instructions' },
      { text: 'Speak only when asked and keep your answers brief and clear' },
      { text: 'If represented, allow your attorney to address legal issues on your behalf' },
      { text: 'Make note of all next dates, requirements, or documents requested by the court' }
    ],
    relatedAreas: [
      { title: 'Criminal Defense', href: '/practice/criminal-defense' },
      { title: 'Traffic Violations', href: '/practice/criminal-defense' },
      { title: 'Real Estate Law', href: '/practice/real-estate-law' }
    ]
  }
];

