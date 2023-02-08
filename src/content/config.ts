import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    author: z.string(),
    link: z.string().optional()
  }),
});

export const collections = {
  'news': newsCollection,
};