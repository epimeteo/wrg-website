# The Water Restoration Group — sitio web

Sitio de **The Water Restoration Group (WRG)**: restauración por agua, fuego y moho, y reconstrucción, con oficinas en Miami, West Palm Beach y Smyrna.

- **Frontend:** [Astro 5](https://astro.build) en modo estático (todas las páginas se prerenderizan en `dist/`).
- **Servidor:** `server.mjs`, un servidor Node.js sin dependencias que sirve `dist/` con redirecciones de barra final, página 404 y cabeceras de caché y seguridad.
- **Hosting:** Hostinger, como aplicación Node.js conectada a este repositorio de GitHub ([docs/deploy-hostinger.md](docs/deploy-hostinger.md)).
- **Contenido del sitio:** en inglés (EE. UU.). La documentación del proyecto está en español.

> Estado: **en revisión.** El modo revisión está activo por defecto (`PUBLIC_REVIEW_MODE`): el sitio no se indexa y muestra las notas internas de lo que falta confirmar. Ver [docs/pendientes.md](docs/pendientes.md).

## Requisitos

- Node.js 20.3 o superior (recomendado 22; ver `.nvmrc`).
- npm.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias. |
| `npm run dev` | Servidor de desarrollo de Astro en `http://localhost:4321`. |
| `npm run build` | Genera el sitio en `dist/` y copia `server.mjs` a `dist/`. |
| `npm start` | Sirve `dist/` con `server.mjs` (puerto `PORT`, por defecto 3000). |
| `npm run preview` | `build` + `start`. |
| `npm run check:links` | Comprueba que todos los enlaces internos y anclas de `dist/` existen. |

## Variables de entorno

Ver [.env.example](.env.example).

| Variable | Por defecto | Uso |
|---|---|---|
| `SITE_URL` | `https://thewaterrestorationgroup.com` | URL canónica y `sitemap.xml`. Se lee en el build. |
| `PUBLIC_REVIEW_MODE` | `true` | Con `true`: `noindex`, `robots.txt` bloqueante y notas internas visibles. Pasar a `false` solo con el contenido aprobado. Se lee en el build. |
| `PORT` | `3000` | Puerto del servidor. Hostinger lo inyecta. |

## Estructura

```
src/
  data/          Datos del sitio: empresa, oficinas, rutas, servicios, proyectos, artículos, FAQ
  layouts/       BaseLayout.astro (head, header, footer, barra de llamada, script)
  components/    Header (menú), Footer, Icon, PhotoSlot, Breadcrumbs, CtaBand, ReviewNote, ReviewFlag, LegalPage
  pages/         Rutas del sitemap (ver docs/sitemap.md)
  scripts/       site.ts: menú accesible + motor de scroll
  styles/        global.css (tokens y componentes) y pages.css (plantillas interiores)
public/          favicon y archivos estáticos
scripts/         copy-server.mjs (postbuild) y check-links.mjs
server.mjs       Servidor de producción
docs/            Despliegue, sitemap, sistema de diseño y pendientes
CLAUDE.md        Instrucciones para seguir trabajando el proyecto con Claude Code
```

## Documentación

- [docs/deploy-hostinger.md](docs/deploy-hostinger.md): conectar el repo y desplegar en Hostinger.
- [docs/sitemap.md](docs/sitemap.md): rutas implementadas frente al sitemap revisado.
- [docs/design-system.md](docs/design-system.md): tokens, componentes, línea de recorrido y movimiento.
- [docs/pendientes.md](docs/pendientes.md): contenido y decisiones pendientes antes del lanzamiento.
