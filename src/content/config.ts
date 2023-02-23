import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    author: z.string(),
    date: z.date(),
    link: z.string().optional()
  })
});

const historyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number()
  })
});

export const collections = {
  news: newsCollection,
  history: historyCollection
};
