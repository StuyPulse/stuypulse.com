import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  cacheDir: "node_modules/.cache/astro-imagetools",
  placeholder: "blurred",
  format: ["webp"],
  includeSourceFormat: true,
  formatOptions: {
    webp: {
      quality: 100,
    },
  },
});
