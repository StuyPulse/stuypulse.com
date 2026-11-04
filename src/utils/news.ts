import type { CollectionEntry } from "astro:content";

export const POSTS_PER_LIST_PAGE = 20;

export const formatDate = (
  date: Date,
  options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" },
) => date.toLocaleDateString("en-US", { ...options, timeZone: "UTC" });

// A newsletter is either a PDF we host, a Canva link, or a written post.
export const kindOf = (post: CollectionEntry<"news">) => {
  const link = post.data.link;
  if (!link) return "post";
  return /\.pdf($|\?)/i.test(link) ? "pdf" : "canva";
};
