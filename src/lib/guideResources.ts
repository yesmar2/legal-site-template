import type { Court, GuideLocalResource } from '@/src/types/content';

/** Resolved resource for rendering (court rows join `courts` data). */
export type ResolvedGuideResource =
  | {
      kind: 'court';
      court: Court;
      description?: string;
      details?: string[];
    }
  | {
      kind: 'link';
      label: string;
      href?: string;
      description?: string;
      details?: string[];
    };

/**
 * Turn guide `localResources` into render-ready rows. Unknown court slugs are skipped.
 */
export function resolveGuideResources(
  resources: GuideLocalResource[] | undefined,
  courtsList: Court[]
): ResolvedGuideResource[] {
  if (!resources?.length) return [];
  const out: ResolvedGuideResource[] = [];
  for (const r of resources) {
    if (r.type === 'court') {
      const court = courtsList.find((c) => c.slug === r.courtSlug);
      if (!court) continue;
      out.push({
        kind: 'court',
        court,
        description: r.description,
        details: r.details,
      });
    } else {
      out.push({
        kind: 'link',
        label: r.label,
        href: r.href,
        description: r.description,
        details: r.details,
      });
    }
  }
  return out;
}

/** First court slug in a guide’s resources (for cards / meta). */
export function firstCourtSlugFromResources(resources: GuideLocalResource[] | undefined): string | undefined {
  if (!resources?.length) return undefined;
  const row = resources.find((r): r is Extract<GuideLocalResource, { type: 'court' }> => r.type === 'court');
  return row?.courtSlug;
}

/** Whether a guide should appear on a court’s “related guides” list. */
export function guideReferencesCourt(resources: GuideLocalResource[] | undefined, courtSlug: string): boolean {
  if (!resources?.length) return false;
  return resources.some((r) => r.type === 'court' && r.courtSlug === courtSlug);
}
