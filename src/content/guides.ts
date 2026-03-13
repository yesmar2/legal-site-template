import { site } from '@/src/config/site';

export const guides = [
  {
    title: `What Happens After a DUI Arrest in ${site.location.city} ${site.address.state}`,
    slug: "what-happens-after-dui-arrest-jamestown",
    description:
      `Step-by-step explanation of what happens after a DUI arrest in ${site.location.city} including arraignment in ${site.location.city} City Court.`,
    practiceArea: "criminal-defense",
    court: "jamestown-city-court",
    city: site.location.city,
    county: site.location.county,
    lastReviewed: "January 2026",
    courts: ["jamestown-city-court"],
  },
  {
    title: `What Happens at an Arraignment in ${site.location.city} City Court`,
    slug: "jamestown-city-court-arraignment",
    description:
      `Learn what to expect during an arraignment in ${site.location.city} City Court and the next steps in a criminal case.`,
    practiceArea: "criminal-defense",
    court: "jamestown-city-court",
    city: site.location.city,
    county: site.location.county,
    lastReviewed: "January 2026",
    courts: ["jamestown-city-court"],
  },
  {
    title: `How Divorce Works in ${site.location.county} ${site.address.state}`,
    slug: "chautauqua-county-divorce-process",
    description:
      `Overview of the divorce process in ${site.location.county} Family Court.`,
    practiceArea: "family-law",
    court: "chautauqua-county-family-court",
    city: site.location.county,
    county: site.location.county,
    lastReviewed: "January 2026",
    courts: ["chautauqua-county-family-court"],
  },
];
