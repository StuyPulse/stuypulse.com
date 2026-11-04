import { getCollection, type CollectionEntry } from "astro:content";

export type Robot = CollectionEntry<"history">;

// Every robot, oldest first unless asked otherwise.
export const getRobots = async (order: "oldest" | "newest" = "oldest") => {
  const robots = (await getCollection("history")).sort((a, b) => a.data.year - b.data.year);
  return order === "oldest" ? robots : robots.reverse();
};
