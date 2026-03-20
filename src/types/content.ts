export interface GuideSource {
  title: string;
  url?: string;
}

export interface GuideProcessStep {
  title: string;
  description: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideCta {
  headline: string;
  body: string;
}

export interface GuideSidebarLink {
  label: string;
  href: string;
  icon?: 'scale' | 'car' | 'pill' | 'gavel' | 'building-2';
}

export interface GuideSidebar {
  highlightTitle?: string;
  highlightBody?: string;
  highlightCtaLabel?: string;
  practiceLinks?: GuideSidebarLink[];
  courtLinks?: GuideSidebarLink[] | string[];
}

export interface GuideLocalResource {
  label: string;
  href?: string;
  description?: string;
  details?: string[];
}

export interface GuideLawyerHelp {
  /** Defaults to "How a Lawyer Can Help" when omitted */
  heading?: string;
  /** Optional intro paragraph; omitted if empty */
  intro?: string;
  bullets: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  quickAnswer?: string;
  practiceArea: string;
  court?: string;
  city?: string;
  county?: string;
  lastReviewed?: string;
  reviewedBy?: string;
  takeaways?: string[];
  sources?: GuideSource[];
  courts?: string[];
  processSteps?: GuideProcessStep[];
  faqs?: GuideFaq[];
  cta?: GuideCta;
  sidebar?: GuideSidebar;
  localResources?: GuideLocalResource[];
  lawyerHelp?: GuideLawyerHelp;
}

export interface CourtLocation {
  name: string;
  address: string;
  city: string;
  phone?: string;
  hours?: {
    days: string;
    times: string;
  };
}

export interface CourtCaseType {
  icon: unknown;
  title: string;
  description: string;
}

export interface Court {
  slug: string;
  name: string;
  cardDescription?: string;
  homeCardDescription?: string;
  href: string;
  page: {
    title: string;
    description: string;
  };
  aboutParagraphs: string[];
  location: CourtLocation;
  caseTypes: CourtCaseType[];
  beforeAppearance?: { text: string }[];
  duringAppearance?: { text: string }[];
  relatedAreas?: { title: string; href: string }[];
  sources?: { title: string; url: string }[];
}

