# Sitemap implementado

Fuente: **WRG_Sitemap_Review-3** (thewaterrestorationgroup.com). Todas las rutas terminan en `/`.

| Ruta | Página | Archivo |
|---|---|---|
| `/` | Home | `src/pages/index.astro` |
| `/about/` | About | `src/pages/about.astro` |
| `/reviews/` | Reviews (bajo About) | `src/pages/reviews.astro` |
| `/careers/` | Careers (bajo About) | `src/pages/careers.astro` |
| `/services/` | Services | `src/pages/services/index.astro` |
| `/services/water-damage-restoration/` | Water Damage Restoration | `services/[slug].astro` + `data/services.ts` |
| `/services/fire-damage-restoration/` | Fire & Smoke Damage Restoration | ídem |
| `/services/mold-remediation/` | Mold Remediation | ídem |
| `/services/environmental-cleanup/` | Environmental Cleanup | ídem |
| `/services/reconstruction/` | Reconstruction | ídem |
| `/locations/` | Locations | `src/pages/locations/index.astro` |
| `/locations/miami-fl/` | Miami, FL | `locations/miami-fl.astro` |
| `/locations/west-palm-beach-fl/` | West Palm Beach, FL | `locations/west-palm-beach-fl.astro` |
| `/locations/atlanta-ga/` | Atlanta / Smyrna, GA | `locations/atlanta-ga.astro` |
| `/projects/` | Projects | `src/pages/projects/index.astro` |
| `/projects/icon-bay/` · `/gables-waterway-towers/` · `/st-louis-condominium/` · `/south-point-condominium/` | Casos | `projects/[slug].astro` + `data/projects.ts` |
| `/blog/` | Insights | `src/pages/blog/index.astro` |
| `/blog/humidity/how-long-does-water-damage-restoration-take/` | How Long Does Water Damage Restoration Take? | `blog/[category]/[slug].astro` + `data/articles.ts` |
| `/blog/mold-damage/mold-prevention-in-humid-climates/` | Mold Prevention in Humid Climates | ídem |
| `/blog/fire-damage/fire-damage-restoration-process/` | The Fire Damage Restoration Process | ídem |
| `/faqs/` | FAQ | `src/pages/faqs.astro` + `data/faqs.ts` |
| `/contact/` | Contact | `src/pages/contact.astro` |
| `/privacy-policy/` | Privacy Policy | `src/pages/privacy-policy.astro` |
| `/terms-and-conditions/` | Terms & Conditions | `src/pages/terms-and-conditions.astro` |
| `/thank-you/` | Thank You (noindex) | `src/pages/thank-you.astro` |
| 404 | Page Not Found | `src/pages/404.astro` |

Rutas extra: `/blog/{categoría}/` lista los artículos de cada categoría, para que la ruta padre de un artículo no dé 404. `/sitemap.xml` y `/robots.txt` se generan en el build.

## Fuera del sitio (decisiones)

- **Preferred Client Program** y **Events**: marcados “To confirm” en el sitemap y excluidos por el brief. No se crean.
- **Asbestos Abatement**: no figura entre los servicios del sitemap revisado. Retirado.
- **Páginas de audiencias** (Commercial, Residential, Insurance) y **plantilla de experto**: existían en el prototipo, no en el sitemap. Su contenido útil pasó a la FAQ (seguros y documentación) y a las secciones de cada servicio.
- **Accessibility statement**: no figura en el sitemap. Recomendado añadirlo antes del lanzamiento.
- “Reviews on each location page”: las reseñas solo se mostrarán en las páginas locales cuando tengan una conexión verificada con esa oficina (ver pendientes).
