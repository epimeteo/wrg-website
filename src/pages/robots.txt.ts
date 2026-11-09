import type { APIRoute } from 'astro';
import { reviewMode } from '../data/site';

// While review mode is on, crawlers are asked to stay out entirely.
export const GET: APIRoute = ({ site }) => {
  const body = reviewMode
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
