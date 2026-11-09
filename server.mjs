// Minimal production server for the prerendered Astro site.
// No dependencies: Node.js built-ins only. Hostinger runs `npm start`.
import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { dirname, extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Works from the repo root (dist/ beside this file) and from inside dist/
// (the build copies this file to dist/server.mjs for Hostinger's Astro preset).
const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = (existsSync(join(HERE, 'index.html')) ? HERE : join(HERE, 'dist')) + sep;
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.webmanifest': 'application/manifest+json',
};

const SECURITY = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

async function fileAt(p) {
  try {
    const s = await stat(p);
    return s.isFile() ? s : null;
  } catch {
    return null;
  }
}

function send(res, status, path, size, method, extra = {}) {
  const type = TYPES[extname(path).toLowerCase()] || 'application/octet-stream';
  const cache = path.includes(`${sep}_astro${sep}`)
    ? 'public, max-age=31536000, immutable'
    : type.startsWith('text/html')
      ? 'public, max-age=0, must-revalidate'
      : 'public, max-age=86400';
  res.writeHead(status, { 'Content-Type': type, 'Content-Length': size, 'Cache-Control': cache, ...SECURITY, ...extra });
  if (method === 'HEAD') return res.end();
  createReadStream(path).pipe(res);
}

const server = createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD', ...SECURITY });
    return res.end();
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
  } catch {
    res.writeHead(400, SECURITY);
    return res.end();
  }
  if (pathname === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain', ...SECURITY });
    return res.end('ok');
  }

  const safe = normalize(pathname).replace(/^([/\\])+/, '');
  const target = join(ROOT, safe);
  if (!target.startsWith(ROOT)) {
    res.writeHead(403, SECURITY);
    return res.end();
  }

  // 1. exact file (never serve the server itself)
  let s = safe === 'server.mjs' ? null : await fileAt(target);
  if (s) return send(res, 200, target, s.size, req.method);

  // 2. directory index (/about/ -> /about/index.html)
  const index = join(target, 'index.html');
  s = await fileAt(index);
  if (s) {
    if (!pathname.endsWith('/')) {
      const q = (req.url || '').includes('?') ? (req.url || '').slice((req.url || '').indexOf('?')) : '';
      res.writeHead(301, { Location: pathname + '/' + q, ...SECURITY });
      return res.end();
    }
    return send(res, 200, index, s.size, req.method);
  }

  // 3. not found
  const notFound = join(ROOT, '404.html');
  s = await fileAt(notFound);
  if (s) return send(res, 404, notFound, s.size, req.method);
  res.writeHead(404, { 'Content-Type': 'text/plain', ...SECURITY });
  res.end('Not found');
});

server.listen(PORT, HOST, () => {
  console.log(`WRG site listening on http://${HOST}:${PORT}`);
});
