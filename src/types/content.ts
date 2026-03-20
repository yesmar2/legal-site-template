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

/**
 * Local resources for a guide: courts (linked to `/courts/[slug]`) and arbitrary links (agencies, CASA, etc.).
 * Courts are first-class by referencing shared `courts` data via `courtSlug`.
 */
export type GuideLocalResource =
  | {
      type: 'court';
      courtSlug: string;
      /** Optional; defaults to the court’s card description when omitted */
      description?: string;
      details?: string[];
    }
  | {
      type: 'link';
      label: string;
      href?: string;
      description?: string;
      details?: string[];
    };

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
  processSteps?: GuideProcessStep[];
  faqs?: GuideFaq[];
  cta?: GuideCta;
  sidebar?: GuideSidebar;
  /** Courts, agencies, and other local links — use `type: 'court'` for courts we have pages for */
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

