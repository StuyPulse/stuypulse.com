import type { CollectionEntry } from "astro:content";
import getPostDate from "./getPostDate";
  const getSortedPosts = (blogEntries: CollectionEntry<'blog'>[]) =>
  {
    blogEntries.sort((a,b)=>{
    // console.log(a.id)
    return Math.floor(getPostDate(b.id).getTime() / 1000) - Math.floor(getPostDate(a.id).getTime() / 1000)
  })
    
    
    return blogEntries;
  }

export default getSortedPosts;