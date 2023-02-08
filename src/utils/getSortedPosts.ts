import type { CollectionEntry } from "astro:content";
import getPostDate from "./getPostDate";
  const getSortedPosts = (newsEntries: CollectionEntry<'news'>[]) =>
  {
    newsEntries.sort((a,b)=>{
    // console.log(a.id)
    return Math.floor(getPostDate(b.id).getTime() / 1000) - Math.floor(getPostDate(a.id).getTime() / 1000)
  })
    
    
    return newsEntries;
  }

export default getSortedPosts;