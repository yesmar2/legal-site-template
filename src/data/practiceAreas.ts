import CriminalDefenseOverview from '../components/criminal-defense/overview.astro';
import CriminalDefensePenalties from '../components/criminal-defense/penalties.astro';
import CriminalDefenseFAQ from '../components/criminal-defense/faq.astro';
import CriminalDefenseResources from '../components/criminal-defense/resources.astro';
import CriminalDefenseAttorney from '../components/criminal-defense/attorney.astro';
import CriminalDefenseCTA from '../components/criminal-defense/cta.astro';
import PracticeCaseTypes from '../components/practice-case-types.astro';

export const practiceAreas = [
  {
    slug: 'criminal-defense',
    name: 'Criminal Defense',
    title: 'Jamestown Criminal Defense Lawyers',
    description:
      'Defense representation for DUI, assault, theft, and other criminal charges in Jamestown and Chautauqua County.',
    href: '/practice/criminal-defense',
    icon: 'scale',
    courts: ['jamestown-city-court', 'dunkirk-city-court', 'chautauqua-county-court'],
    caseTypeIds: ['dui-dwi-defense', 'drug-charges', 'assault-charges', 'domestic-violence', 'theft-crimes'],
    sections: [
      CriminalDefenseOverview,
      PracticeCaseTypes,
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
    courts: ['jamestown-city-court', 'dunkirk-city-court', 'chautauqua-county-court'],
    caseTypeIds: ['car-accidents', 'slip-and-fall', 'wrongful-death'],
    sections: [PracticeCaseTypes]
  },
  {
    slug: 'family-law',
    name: 'Family Law',
    title: 'Jamestown Family Law Lawyers',
    description:
      'Guidance and representation for divorce, custody, and other family law matters.',
    href: '/practice/family-law',
    icon: 'heart',
    courts: ['jamestown-city-court', 'chautauqua-county-court'],
    caseTypeIds: ['divorce', 'child-custody', 'child-support'],
    sections: [PracticeCaseTypes]
  },
  {
    slug: 'real-estate-law',
    name: 'Real Estate Law',
    title: 'Jamestown Real Estate Lawyers',
    description:
      'Legal assistance with residential and commercial real estate transactions and property matters.',
    href: '/practice/real-estate-law',
    icon: 'building-2',
    courts: ['jamestown-city-court', 'dunkirk-city-court', 'ellicott-town-court'],
    caseTypeIds: ['residential-closings', 'commercial-transactions', 'landlord-tenant'],
    sections: [PracticeCaseTypes]
  }
];

