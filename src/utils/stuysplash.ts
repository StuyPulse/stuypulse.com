import { getCollection, type CollectionEntry } from "astro:content";

export type StuySplashYear = CollectionEntry<"stuysplash">;

// Every past StuySplash, newest first.
export const getStuySplashYears = async () =>
  (await getCollection("stuysplash")).sort((a, b) => b.data.year - a.data.year);
