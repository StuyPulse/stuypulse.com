import { defineConfig } from 'astro-imagetools/config';

export default defineConfig({
    cacheDir: '/.astro-imagetools-cache',
    format: 'avif',
    includeSourceFormat: false,
});
