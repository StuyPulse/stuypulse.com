import { getCollection, type CollectionEntry } from "astro:content";

export type Newsletter = CollectionEntry<"news">;

export const POSTS_PER_LIST_PAGE = 20;

// Every newsletter and post, newest first.
export const getNewsletters = async () =>
  (await getCollection("news")).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

// A newsletter is either a PDF we host, a Canva link, or a written post.
export const kindOf = (post: Newsletter) => {
  const link = post.data.link;
  if (!link) return "post";
  return /\.pdf($|\?)/i.test(link) ? "pdf" : "canva";
};
