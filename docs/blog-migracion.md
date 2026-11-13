# Migración del blog del sitio anterior (13 nov 2026)

Se migraron los **52 artículos** publicados en `thewaterrestorationgroup.com/blog/` (sitemap `post-sitemap.xml` de Yoast). Cada uno es un archivo Markdown en `src/content/blog/{categoría}/{slug}.md` (colección `blog`, esquema en `src/content.config.ts`), así que **conserva la misma URL** que tenía y no necesita redirección.

## Qué se conservó

- Título, texto, subtítulos, listas, negritas y enlaces del artículo original.
- Meta description (se usa como resumen), fecha de publicación y de última actualización.
- Categorías del sitio anterior: la de la URL y las adicionales, que ahora son los temas del blog (`/blog/{tema}/` lista todos los artículos de cada tema).
- Imagen destacada, tomada del backup de WordPress (`src/assets/blog/posts/`), redimensionada a 1600 px como máximo y con texto alternativo nuevo.

## Qué cambió

- **Autor:** todos firman «WRG Team». El autor original («WRG Team» o «Felipe») se guarda en `originalAuthor` y se ve en la nota de revisión de cada artículo.
- **Enlaces:** los enlaces al dominio anterior pasan a rutas internas; se quitaron los parámetros `utm_source=chatgpt.com` y los enlaces a la home con texto genérico («company», «Professional»).
- **Artículos con el mismo slug:** `/blog/humidity/how-long-does-water-damage-restoration-take/`, `/blog/mold-damage/mold-prevention-in-humid-climates/` y `/blog/fire-damage/fire-damage-restoration-process/` ya existían como artículos editoriales nuevos (`src/data/articles.ts`); se mantiene la versión nueva y no se migró la anterior.
- **Sin imagen:** 3 artículos (dos banners gráficos de 828×315 y una foto de un evento CEU con personas identificables).

Cambios de texto por artículo (también visibles en modo revisión al pie de cada uno):

| Artículo | Cambio |
|---|---|
| `/blog/fire-damage/what-to-do-after-a-house-fire/` | Título: se añadieron los dos puntos que faltaban. |
| `/blog/flood-damage/10-fall-maintenance-tips-and-checklist-for-property-managers/` | Sin imagen destacada: la del sitio anterior era un banner gráfico o una foto de un evento con personas identificables. |
| `/blog/news/are-you-ready-in-case-of-an-emergency/` | Sin imagen destacada: la del sitio anterior era un banner gráfico o una foto de un evento con personas identificables. |
| `/blog/news/flood-damage-prevention-5-steps/` | Se quitó la invitación a las clases CEU (Events está excluido del sitio). |
| `/blog/news/florida-elss-compliance-deadlines/` | Se quitaron las frases que ofrecen servicios de asbesto (Asbestos Abatement está excluido del sitio). La mención general del asbesto en obras ELSS se mantiene. Se quitó el enlace a Asbestos Abatement (servicio excluido del sitio). |
| `/blog/news/how-to-dry-out-after-water-damage-dehumidifier-formula/` | La fórmula, escrita como fracción con guiones bajos, se reescribió en una línea. El artículo menciona una tabla («the chart below») que no estaba en el texto del sitio anterior: falta la imagen. |
| `/blog/news/the-importance-of-timely-leak-detection-and-repair/` | Se quitó la referencia al formulario en línea: el sitio nuevo no tiene formularios. |
| `/blog/news/why-is-continuing-education-important/` | Sin imagen destacada: la del sitio anterior era un banner gráfico o una foto de un evento con personas identificables. |
| `/blog/water-damage/does-condo-insurance-cover-water-damage/` | Se quitó el último párrafo: era una nota interna de redacción («A good page on this topic should stay practical…») publicada por error. |

## Pendiente de revisión

- **Autores** de cada artículo.
- **Afirmaciones sin validar** que traen algunos textos: «licensed and insured general contractor» (`reconstruction-property-damage`), «certified storm restoration contractor» y «certified mitigation team» (`emergency-vendor-access-hurricane`), «IICRC-certified» como recomendación general, y la cita de Henry Dow como CEO (`business-floods-weather-damages`). Son textos publicados por WRG; se dejaron como estaban.
- **Temas repetidos** que conviene unificar más adelante: tres artículos sobre qué es la restauración por agua (`what-is-water-damage-restoration`, `what-is-water-damage-restoration-an-essential-guide`, `understanding-water-damage-restoration`), dos sobre reparar drywall y varios de preparación para huracanes.
- **Artículos muy cortos o desactualizados:** `10-fall-maintenance-tips-and-checklist-for-property-managers` (110 palabras), `why-is-continuing-education-important`, `sea-turtle-season2018` (fuera del tema de restauración) y `hurricane-checklist-property-managers` (habla de la temporada 2016).
- **Imágenes:** salen del banco del sitio anterior, sobre el que WRG confirmó derechos. Si alguna es de stock con licencia limitada al sitio anterior, hay que reemplazarla.

## Cómo añadir o editar un artículo migrado

Editar el archivo Markdown. El encabezado (`---`) lleva `title`, `description`, `published`, `updated`, `tags` (el primero es la categoría de la URL), `image` e `imageAlt`.
