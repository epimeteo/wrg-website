// Copies server.mjs into dist/ so Hostinger's Astro preset can use
// "server.mjs" as entry file (Astro entry files are relative to dist/).
import { copyFile } from 'node:fs/promises';
await copyFile(new URL('../server.mjs', import.meta.url), new URL('../dist/server.mjs', import.meta.url));
console.log('Copied server.mjs → dist/server.mjs');
