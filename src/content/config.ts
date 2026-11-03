import { defineCollection, z } from "astro:content";

// The upload form (.pages.yml) writes these files, so accept what a form can
// produce: quoted dates and empty optional fields must not break the site build.
const newsCollection = defineCollection({
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    author: z
      .string()
      .nullish()
      .transform((author) => author || "StuyPulse"),
    date: z.coerce.date(),
    link: z.string().nullish(),
  }),
});

const historyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number(),
    photo: z.string().optional(),
    awards: z.array(z.string()).nullish(),
  }),
});

export const collections = {
  news: newsCollection,
  history: historyCollection,
};
