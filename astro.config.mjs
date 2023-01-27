import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  // Change this when the site is deployed to the real domain
  site: 'https://stuypulse.github.io',
  base: 'stuypulse.com',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [yaml()]
  }
});
