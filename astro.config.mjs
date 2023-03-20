import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import yaml from "@rollup/plugin-yaml";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  // Change this when the site is deployed to the real domain
  site: "https://new.stuypulse.com",
  integrations: [mdx(), sitemap(), astroImageTools],
  vite: {
    plugins: [yaml()],
    build: {
      cssCodeSplit: false,
    },
  },
});
