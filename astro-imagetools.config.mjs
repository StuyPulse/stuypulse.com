import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  cacheDir: "/.astro-imagetools-cache",
  placeholder: "blurred",
  format: ["webp"],
  includeSourceFormat: true,
//  formatOptions: {
//    webp: {
//      quality: 50,
//    },
  },
});
