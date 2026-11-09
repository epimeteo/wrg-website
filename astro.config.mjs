// @ts-check
import { defineConfig } from 'astro/config';

// Static build: every route is prerendered into dist/.
// server.mjs serves dist/ as a Node.js app (Hostinger "Node.js Web App").
export default defineConfig({
  site: process.env.SITE_URL || 'https://thewaterrestorationgroup.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
  // The site does not use client-side prefetching or view transitions.
  prefetch: false,
});
