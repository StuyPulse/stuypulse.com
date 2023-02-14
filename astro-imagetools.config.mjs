import { defineConfig } from 'astro-imagetools/config';

export default defineConfig({
    cacheDir: '/.astro-imagetools-cache',
    format: 'null',
    includeSourceFormat: true,
});
