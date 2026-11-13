// Content collections. `blog` holds the articles migrated from WRG's previous
// site (one Markdown file per article, at src/content/blog/{category}/{slug}.md,
// so each keeps its original URL). Editorial articles written for the new site
// live in src/data/articles.ts.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      published: z.coerce.date(),
      updated: z.coerce.date().optional(),
      /** Author shown on the previous site; the byline shows "WRG Team" until authors are confirmed. */
      originalAuthor: z.string().optional(),
      /** First tag = URL category. The rest are the previous site's extra categories. */
      tags: z.array(z.string()).min(1),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Changes made during the migration (Spanish, shown only in review mode). */
      edits: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
