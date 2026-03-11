import CriminalDefenseOverview from '../components/criminal-defense/overview.astro';
import CriminalCaseTypes from '../components/criminal-defense/case-types.astro';
import CriminalDefensePenalties from '../components/criminal-defense/penalties.astro';
import CriminalDefenseFAQ from '../components/criminal-defense/faq.astro';
import CriminalDefenseResources from '../components/criminal-defense/resources.astro';
import CriminalDefenseAttorney from '../components/criminal-defense/attorney.astro';
import CriminalDefenseCTA from '../components/criminal-defense/cta.astro';

export const practiceAreas = [
  {
    slug: 'criminal-defense',
    name: 'Criminal Defense',
    title: 'Jamestown Criminal Defense Lawyers',
    description:
      'Defense representation for DUI, assault, theft, and other criminal charges in Jamestown and Chautauqua County.',
    href: '/practice/criminal-defense',
    icon: 'scale',
    sections: [
      CriminalDefenseOverview,
      CriminalCaseTypes,
      CriminalDefensePenalties,
      CriminalDefenseFAQ,
      CriminalDefenseResources,
      CriminalDefenseAttorney,
      CriminalDefenseCTA
    ]
  },
  {
    slug: 'personal-injury',
    name: 'Personal Injury',
    title: 'Jamestown Personal Injury Lawyers',
    description:
      'Legal representation for injury victims involved in car accidents, slip and fall cases, and other negligence claims.',
    href: '/practice/personal-injury',
    icon: 'heart-pulse',
    sections: []
  },
  {
    slug: 'family-law',
    name: 'Family Law',
    title: 'Jamestown Family Law Lawyers',
    description:
      'Guidance and representation for divorce, custody, and other family law matters.',
    href: '/practice/family-law',
    icon: 'heart',
    sections: []
  },
  {
    slug: 'real-estate-law',
    name: 'Real Estate Law',
    title: 'Jamestown Real Estate Lawyers',
    description:
      'Legal assistance with residential and commercial real estate transactions and property matters.',
    href: '/practice/real-estate-law',
    icon: 'building-2',
    sections: []
  }
];

