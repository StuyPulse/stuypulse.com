import type { CollectionEntry } from "astro:content";
const getSortedPosts = (newsEntries: CollectionEntry<"news">[]) => {
  newsEntries.sort((a, b) => {
    return (
      Math.floor(b.data.date.getTime() / 1000) -
      Math.floor(a.data.date.getTime() / 1000)
    );
  });

  return newsEntries;
};

export default getSortedPosts;
