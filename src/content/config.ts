import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    author: z.string(),
    link: z.string().optional()
  }),
});

export const collections = {
  'blog': blogCollection,
};