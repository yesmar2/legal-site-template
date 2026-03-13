export interface PracticeFaq {
  question: string;
  answer: string;
}

export interface PracticeCta {
  headline: string;
  subheadline?: string;
  body: string;
}

export interface PracticeArea {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroDescription?: string;
  homeCardDescription?: string;
  href: string;
  icon: string;
  courts: string[];
  caseTypeIds: string[];
  introParagraphs?: string[];
  attorneySlugs?: string[];
  courtsHeading?: string;
  courtsDescription?: string;
  faqs?: PracticeFaq[];
  cta?: PracticeCta;
}

