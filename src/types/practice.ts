export type PracticeAreaSlug =
  | 'criminal-defense'
  | 'personal-injury'
  | 'family-law'
  | 'real-estate-law';

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
  slug: PracticeAreaSlug;
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

