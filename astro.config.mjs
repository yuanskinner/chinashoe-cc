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
      serialize(item) {
        // Higher priority for key pages
        if (item.url === 'https://chinashoe.cc/' || item.url === 'https://chinashoe.cc') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (
          item.url.includes('/encyclopedia/') && 
          !item.url.includes('/materials/') && 
          !item.url.includes('/manufacturing/')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (
          item.url.includes('/suppliers/')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (
          item.url.includes('/market/')
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (
          item.url.includes('/sourcing/')
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        } else if (
          item.url === 'https://chinashoe.cc/about/' ||
          item.url === 'https://chinashoe.cc/contact/'
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        } else if (
          item.url.includes('/privacy') ||
          item.url.includes('/terms')
        ) {
          item.changefreq = 'yearly';
          item.priority = 0.3;
        }
        return item;
      },
    }),
  ],
  build: {
    assets: '_assets',
    format: 'directory',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        external: ['/pagefind/pagefind.js']
      }
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
