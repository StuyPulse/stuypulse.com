import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Newsletter } from "@utils/news";

// Page 1 of a hosted PDF, rendered to public/newsletters/covers/<same name>.jpg. Only PDFs we host
// have one; remote and Canva newsletters don't. The file check runs at build time.
export const coverOf = (post: Newsletter): string | undefined => {
  const name = post.data.link?.match(/^\/newsletters\/([^/?#]+)\.pdf$/i)?.[1];
  if (!name) return undefined;
  const cover = `/newsletters/covers/${name}.jpg`;
  return existsSync(join(process.cwd(), "public", cover)) ? cover : undefined;
};

// Old posts often say nothing but "This is the [Week 1 Newsletter](link)! Check it out!".
// Such a body repeats the title and the buttons, so pages hide it.
export const isBoilerplate = (post: Newsletter) => {
  const text = post.body
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .trim();
  if (!text) return true;
  // Only the two stock sentences; a body that adds news ("We bagged our robot!") stays.
  return (
    !!post.data.link &&
    /^(this is the|check out (our|the)) [^.!?]*(newsletter|magazine)[^.!?]*( right here)?!( check it out!)?$/i.test(
      text,
    )
  );
};
