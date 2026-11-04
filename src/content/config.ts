import { defineCollection, z } from "astro:content";

// The editors at /admin (public/admin/config.yml) and Pages CMS (.pages.yml) write these
// files, so accept what a form can produce: quoted dates and empty optional fields must
// not break the site build.
const link = z.object({ name: z.string(), url: z.string() });

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
    layout: z.string().optional(),
    title: z.string(),
    year: z.coerce.number(),
    photo: z.string().optional(),
    awards: z.array(z.string()).nullish(),
    source: z.string().nullish(),
    cad: z.string().nullish(),
    flickr: z.string().nullish(),
    youtube_links: z.array(link).nullish(),
    links: z.array(link).nullish(),
  }),
});

const stuysplashCollection = defineCollection({
  schema: z.object({
    layout: z.string().optional(),
    year: z.coerce.number(),
    playlist: z.string().nullish(),
    presentations: z
      .array(
        z.object({
          title: z.string(),
          presenter: z.string().nullish().transform((presenter) => presenter ?? ""),
          url: z.string().nullish(),
          description: z.string().nullish(),
        }),
      )
      .nullish()
      .transform((presentations) => presentations ?? []),
  }),
});

export const collections = {
  news: newsCollection,
  history: historyCollection,
  stuysplash: stuysplashCollection,
};
