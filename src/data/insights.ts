// Every insight on the site: the editorial articles in articles.ts plus the
// articles migrated from the previous site (content collection `blog`).
// Pages, topic listings and sitemap.xml read from here.
import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { articles, articleHref, type Article } from './articles';

export const topicLabels: Record<string, string> = {
  'water-damage': 'Water damage',
  'mold-damage': 'Mold damage',
  'fire-damage': 'Fire damage',
  'smoke-damage': 'Smoke damage',
  'flood-damage': 'Flood damage',
  humidity: 'Humidity',
  'water-leakage': 'Water leakage',
  'environmental-cleanup': 'Environmental cleanup',
  'south-florida-disasters': 'South Florida disasters',
  news: 'News',
};
export const topicLabel = (t: string) => topicLabels[t] ?? t.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());

/** Related service for an insight, by its topics (first match wins). */
const serviceByTopic: [string[], { name: string; href: string; cta: string }][] = [
  [['environmental-cleanup'], { name: 'Environmental Cleanup', href: '/services/environmental-cleanup/', cta: 'Talk to WRG about a specialized cleanup.' }],
  [['mold-damage'], { name: 'Mold Remediation', href: '/services/mold-remediation/', cta: 'Talk to WRG about a mold concern.' }],
  [['fire-damage', 'smoke-damage'], { name: 'Fire & Smoke Damage Restoration', href: '/services/fire-damage-restoration/', cta: 'Explore WRG’s fire and smoke damage restoration service.' }],
  [['water-damage', 'flood-damage', 'humidity', 'water-leakage'], { name: 'Water Damage Restoration', href: '/services/water-damage-restoration/', cta: 'Discuss water damage restoration with WRG.' }],
];
export const serviceFor = (tags: string[]) => serviceByTopic.find(([keys]) => keys.some((k) => tags.includes(k)))?.[1];

export type Insight = {
  kind: 'article' | 'post';
  category: string;
  slug: string;
  href: string;
  title: string;
  summary: string;
  /** Topic shown on cards: the URL category, or the first more specific topic for "news" posts. */
  label: string;
  tags: string[];
  published?: Date;
  image?: { src: ImageMetadata; alt: string };
  article?: Article;
  entry?: CollectionEntry<'blog'>;
};

const fromArticle = (a: Article): Insight => ({
  kind: 'article', category: a.category, slug: a.slug, href: articleHref(a), title: a.title,
  summary: a.summary, label: a.categoryLabel, tags: a.tags, image: a.image, article: a,
});

const fromEntry = (e: CollectionEntry<'blog'>): Insight => {
  const [category, slug] = e.id.split('/');
  const tags = e.data.tags;
  const label = topicLabel(category === 'news' ? (tags.find((t) => t !== 'news') ?? 'news') : category);
  return {
    kind: 'post', category, slug, href: `/blog/${category}/${slug}/`, title: e.data.title, summary: e.data.description,
    label, tags, published: e.data.published,
    image: e.data.image ? { src: e.data.image, alt: e.data.imageAlt ?? '' } : undefined, entry: e,
  };
};

/** Editorial articles first (in their set order), then migrated articles, newest first. */
export async function getInsights(): Promise<Insight[]> {
  const posts = (await getCollection('blog')).map(fromEntry).sort((a, b) => +b.published! - +a.published!);
  return [...articles.map(fromArticle), ...posts];
}

/** Topics with at least one insight, most used first. */
export function topicsOf(list: Insight[]) {
  const n = new Map<string, number>();
  for (const i of list) for (const t of new Set(i.tags)) n.set(t, (n.get(t) ?? 0) + 1);
  return [...n.entries()].sort((a, b) => b[1] - a[1] || topicLabel(a[0]).localeCompare(topicLabel(b[0]))).map(([slug, count]) => ({ slug, label: topicLabel(slug), count }));
}

/** Up to `n` other insights sharing the most topics with `i`. */
export function relatedTo(i: Insight, list: Insight[], n = 3) {
  const score = (o: Insight) => o.tags.filter((t) => i.tags.includes(t) && t !== 'news').length;
  return list.filter((o) => o.href !== i.href).map((o) => ({ o, s: score(o) })).sort((a, b) => b.s - a.s).slice(0, n).map((x) => x.o);
}

export const formatDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
