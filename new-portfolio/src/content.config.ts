import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: one Markdown file per project in src/content/work/.
// The front matter feeds the home page card; the body will become the case page.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    company: z.string(), // shown in FK Raster, in the accent color
    title: z.string(), // the rest of the card headline
    accent: z.string(), // company name color
    summary: z.string(),
    role: z.string(),
    cover: z.string(), // /images/cases/…
    icon: z.string(),
    coverAlt: z.string(),
  }),
});

export const collections = { work };
