# Migración del blog del sitio anterior (13 nov 2026)

Se migraron los **52 artículos** publicados en `thewaterrestorationgroup.com/blog/` (sitemap `post-sitemap.xml` de Yoast). Cada uno es un archivo Markdown en `src/content/blog/{categoría}/{slug}.md` (colección `blog`, esquema en `src/content.config.ts`), así que **conserva la misma URL** que tenía y no necesita redirección.

## Qué se conservó

- Título, texto, subtítulos, listas, negritas y enlaces del artículo original.
- Meta description (se usa como resumen), fecha de publicación y de última actualización.
- Categorías del sitio anterior: la de la URL y las adicionales, que ahora son los temas del blog (`/blog/{tema}/` lista todos los artículos de cada tema).
- Imagen destacada, tomada del backup de WordPress (`src/assets/blog/posts/`), redimensionada a 1600 px como máximo y con texto alternativo nuevo. El 21 nov 2026, 18 de ellas se reemplazaron por el original del banco depurado (hasta 2400 px); ver abajo.

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

## Imágenes del banco depurado (21 nov 2026)

Se compararon las 52 imágenes con el banco depurado del cliente (`filtered-images`) por similitud visual. 50 están en el banco con la misma foto. Se reemplazaron por el original, procesado con `sharp` (giro según EXIF, 2400 px como máximo, JPEG calidad 84), las 18 que el banco trae en mayor resolución. La plantilla del artículo ahora genera hasta 2400 px (antes 1600) para que se vean nítidas en pantallas de alta densidad. El texto alternativo no cambia porque es la misma foto.

| Artículo (imagen) | Antes | Ahora | Original en el banco |
|---|---|---|---|
| `flood-damage-prevention-5-steps` | 1600×1065 | 1920×1278 | `Flood-Damage-Prevention-In-5-Steps.jpg` |
| `how-long-does-a-landlord-have-to-fix-water-damage` | 1600×1202 | 1999×1502 | `image1-3.jpg` |
| `how-to-get-through-water-damage` | 1600×1067 | 1680×1120 | `How-To-Get-Through-Water-Damage.jpg` |
| `hurricane-checklist-property-managers` | 1600×1067 | 1920×1280 | `Hurricane-Checklist-For-Property-Managers.jpg` |
| `hurricane-insurance-documentation-tips` | 1600×811 | 2400×1216 | `Hurricane-Insurance-Documentation-Tips-scaled.jpg` |
| `hurricane-preparedness-for-property-managers` | 1600×811 | 2250×1140 | `Pre-Storm-Planning-for-Property-Managers-Can-Make-or-Break-Recovery.jpg` |
| `know-the-affects-of-a-house-fire-aftermath` | 1600×946 | 1920×1135 | `Know-The-Affects-of-A-House-Fire-Aftermath.jpg` |
| `overcoming-biggest-challenges-property-managers` | 1600×1067 | 1920×1280 | `Overcoming-Biggest-Challenges-For-Property-Managers.jpg` |
| `property-management-productivity` | 1600×1068 | 1920×1282 | `How-Tech-Has-Boosted-Property-Management-Productivity.jpg` |
| `removing-black-mold` | 1600×811 | 2250×1140 | `Removing-black-mold.jpg` |
| `smoke-damage-how-to-claim-insurance-for-repairs` | 1600×1067 | 1920×1280 | `Smoke-Damage-How-To-Claim-Insurance-For-Repairs.jpg` |
| `south-florida-businesses-and-disasters` | 1600×900 | 1920×1080 | `South-Florida-Businesses-and-Disasters.jpg` |
| `tips-to-stop-a-basement-flood` | 1600×1067 | 1920×1280 | `Tips-To-Prevent-A-Basement-Flood.jpg` |
| `understanding-water-damage-restoration` | 1600×1067 | 1999×1333 | `image1.jpg` |
| `water-damage-ways-to-repair-a-drywall` | 1600×1067 | 2400×1600 | `Water-Damage-Ways-To-Repair-A-Drywall.jpg` |
| `what-is-environmental-cleanup` | 1600×1067 | 1920×1280 | `Environmental-Cleanup.jpg` |
| `what-is-water-damage-restoration-an-essential-guide` | 1600×1067 | 1999×1333 | `image1-1.jpg` |
| `what-to-do-when-theres-water-under-my-house` | 1600×1067 | 1999×1333 | `image1-2.jpg` |

Sin cambio:

- Las otras 32 ya estaban a la resolución del original.
- `certificates-of-insurance-from-vendors` y `how-to-repair-water-damaged-drywall` (690×450, la más débil): su imagen no está en el banco depurado.
- Los 3 artículos sin imagen siguen sin ella: para `10-fall-maintenance-tips-and-checklist-for-property-managers` y `are-you-ready-in-case-of-an-emergency` el banco solo trae los banners gráficos con texto (`City-Buildings-Facebook-Cover-*`, 828×315), y para `why-is-continuing-education-important` la foto de una clase CEU con personas identificables, incluidos niños (Events está excluido del sitio).
