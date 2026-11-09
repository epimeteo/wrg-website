# Despliegue en Hostinger (aplicación Node.js)

El repositorio está preparado para las **Node.js Web Apps** de Hostinger con despliegue desde GitHub. Cada push a `main` puede redesplegar el sitio.

## 1. Crear la aplicación

En hPanel: **Websites → Add website → Node.js Apps → Import Git repository**. Autoriza la app de GitHub de Hostinger y elige `epimeteo/wrg-website`, rama `main`.

## 2. Ajustes de build

Hay dos configuraciones válidas. Las dos sirven el sitio con `server.mjs`.

**Opción A: preset Astro (recomendada)**

| Campo | Valor |
|---|---|
| Application type | Astro |
| Node.js version | 22 |
| Root directory | `/` (vacío) |
| Build command | `build` |
| Output directory | `dist` |
| Entry file | `server.mjs` |
| Package manager | npm |

Con el preset Astro, el entry file es **relativo a `dist/`**. Por eso el build copia `server.mjs` a `dist/server.mjs` (script `postbuild`). Si dejas el entry file vacío, Hostinger lo publica como sitio estático, sin servidor Node; también funciona, pero entonces la 404 y las redirecciones dependen de Hostinger.

**Opción B: preset Other**

| Campo | Valor |
|---|---|
| Application type | Other |
| Build command | `build` |
| Output directory | (vacío) |
| Entry file | `server.mjs` (relativo a la raíz del repo) |

## 3. Variables de entorno

| Variable | Valor inicial |
|---|---|
| `SITE_URL` | `https://thewaterrestorationgroup.com` (o el dominio temporal mientras se revisa) |
| `PUBLIC_REVIEW_MODE` | `true` hasta que WRG apruebe contenido, fotos y textos legales |

`PORT` lo inyecta Hostinger; el servidor lo lee automáticamente. Las dos primeras se leen **en el build**: tras cambiarlas, vuelve a desplegar.

## 4. Comprobaciones después del despliegue

- `https://<dominio>/healthz` responde `ok`.
- `https://<dominio>/about` redirige con 301 a `/about/`.
- Una ruta inexistente devuelve la página 404 con estado 404.
- Mientras el modo revisión esté activo, `/robots.txt` debe decir `Disallow: /`.

## 5. Lanzamiento

1. Completar [pendientes.md](pendientes.md).
2. `PUBLIC_REVIEW_MODE=false` y `SITE_URL` con el dominio final.
3. Redesplegar y comprobar `robots.txt`, `sitemap.xml` y las etiquetas `<meta name="robots">`.
4. Plan de redirecciones desde las URLs actuales (por ejemplo, `/locations/atlanta-ga/` ya coincide; revisar las de servicios y blog).

Referencias: [Hostinger · Build settings](https://docs.hostinger.com/node.js/build-settings) · [Hostinger · Astro](https://docs.hostinger.com/node.js/overview-1/astro) · [Astro · Deploy to Hostinger](https://docs.astro.build/en/guides/deploy/hostinger/). Las etiquetas de hPanel pueden cambiar; los valores de esta tabla se tomaron de esa documentación en noviembre de 2026.
