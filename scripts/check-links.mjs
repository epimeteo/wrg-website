// Verifies that every internal link and #anchor in dist/ resolves.
// Usage: npm run build && npm run check:links
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const files = [];
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
}
const exists = async (p) => stat(p).then(() => true, () => false);
const ids = new Map();
const idsOf = async (file) => {
  if (!ids.has(file)) ids.set(file, new Set([...(await readFile(file, 'utf8')).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return ids.get(file);
};
const resolve = async (path) => {
  const target = join(DIST, path);
  if (await exists(join(target, 'index.html'))) return join(target, 'index.html');
  if ((await exists(target)) && !target.endsWith('/')) return target;
  return null;
};

await walk(DIST);
const problems = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const page = '/' + relative(DIST, file).replace(/index\.html$/, '');
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (/^(https?:|tel:|mailto:|data:)/.test(href)) continue;
    const [path, hash] = href.split('#');
    const targetFile = path ? await resolve(path) : file;
    if (!targetFile) { problems.push(`${page} → ${href} (missing page)`); continue; }
    if (path && !path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) problems.push(`${page} → ${href} (no trailing slash)`);
    if (hash && !(await idsOf(targetFile)).has(hash)) problems.push(`${page} → ${href} (missing #${hash})`);
  }
}
if (problems.length) {
  console.error(`${problems.length} broken link(s):\n` + problems.join('\n'));
  process.exit(1);
}
console.log(`OK: ${files.length} pages, all internal links resolve.`);
