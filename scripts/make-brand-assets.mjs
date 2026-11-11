// Generates the brand files in public/ from the logo and the hero photo:
//   favicon-32.png, apple-touch-icon.png (180) and og-image.jpg (1200×630).
// Run after changing the logo or the hero photo: node scripts/make-brand-assets.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const path = (p) => fileURLToPath(new URL(p, root));

const favicon = readFileSync(path('public/favicon.svg'));
const mark = readFileSync(path('src/components/LogoMark.astro'), 'utf8');
const viewBox = mark.match(/viewBox="([^"]+)"/)[1];
const paths = mark.match(/<path d="[^"]+"\/>/g).join('');
const whiteMark = (w) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${w}" height="${Math.round((w * 198.9418) / 636.6012)}" fill="#fff">${paths}</svg>`);

await sharp(favicon, { density: 400 }).resize(32, 32).png().toFile(path('public/favicon-32.png'));
await sharp(favicon, { density: 600 }).resize(180, 180).png().toFile(path('public/apple-touch-icon.png'));

// Social preview: hero photo on the right, brand panel with the monogram on the left.
const W = 1200, H = 630;
const photo = await sharp(path('src/assets/home/wrg-technician-moisture-documentation.jpg'))
  .resize(W, H, { fit: 'cover', position: 'right' })
  .toBuffer();
const panel = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#082b38" stop-opacity="1"/>
      <stop offset="0.38" stop-color="#082b38" stop-opacity="0.96"/>
      <stop offset="0.62" stop-color="#082b38" stop-opacity="0"/>
    </linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
  </svg>`,
);
await sharp(photo)
  .composite([
    { input: panel, top: 0, left: 0 },
    { input: whiteMark(380), top: Math.round((H - (380 * 198.9418) / 636.6012) / 2), left: 72 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path('public/og-image.jpg'));

console.log('Brand assets written to public/');
