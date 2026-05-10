import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chinashoe.cc',
  base: '/',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    assets: '_assets',
    format: 'directory',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
