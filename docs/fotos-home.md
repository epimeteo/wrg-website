# Fotografía del home

Selección hecha el 11 nov 2026 a partir del banco de imágenes del sitio anterior (copia del backup de WordPress en Google Drive, carpeta «The Water Restoration Group / Archivos»). Según confirmó el responsable del proyecto, WRG tiene pleno derecho de uso sobre las fotos de ese banco. Los IDs de Drive no se publican aquí porque el repositorio es público.

## Espacios del home

| Espacio | Componente | Encuadre (desktop / tablet / móvil) | Tipo de foto |
|---|---|---|---|
| Hero «Respond» | `Photo.ph-hero` en `.hero-media` | 1:1 con la tarjeta de oficinas superpuesta abajo a la derecha / 16:11, tarjeta superpuesta / 4:3, tarjeta debajo | Auténtica WRG (equipo y equipos de trabajo) |
| Commercial & Property Management | `Photo` en `.aud-main` | 16:8 fijo en los tres anchos | Auténtica WRG (flota en edificio gestionado) |
| Proyecto destacado: Icon Bay | `Photo` en `.proj-feature` | 7:5 en los tres anchos (a una columna bajo 1024 px) | Proyecto ejecutado (ficha WRG) |
| Gables Waterway Towers | `Photo.mini` | Cuadrado 96 px / 96 px / 76 px | Proyecto ejecutado |
| St. Louis Condominium | `Photo.mini` | Cuadrado 96 / 96 / 76 px | Proyecto ejecutado |
| South Point Condominium | `Photo.mini` | Cuadrado 96 / 96 / 76 px | Proyecto ejecutado |

## Selección y puntaje

Criterios: correspondencia (40), calidad técnica (25), composición responsiva (20), coherencia con el home (15). Mínimo 80, con 32 en correspondencia y 18 en calidad.

| Espacio | Foto (original en el banco) | Archivo en el repo | Puntaje | Retoque | Estado |
|---|---|---|---|---|---|
| Hero | `Home.jpg` (1654×1098). Técnico con polo WRG, tablet y teléfono junto a un air mover | `src/assets/home/wrg-technician-moisture-documentation.jpg` | 37 + 21 + 17 + 13 = **88** | Ninguno en el archivo. Punto focal `100% 50%` y sin parallax en el hero (CSS) para que la tarjeta de oficinas no tape la tablet ni se recorte la cabeza | Integrada |
| Commercial & Property Management | `The-WRG-Difference.jpg` (1920×1920). Camión WRG al pie de una torre residencial | `src/assets/home/wrg-truck-high-rise.jpg` | 35 + 18 + 16 + 13 = **82** | Ninguno. Punto focal `50% 74%` (logo del camión y balcones) | Integrada |
| Icon Bay | `Icon-Bay-Main-scaled.jpg.webp` (1707×2560). Torre y acceso | `src/assets/home/icon-bay.jpg` | 34 + 22 + 17 + 13 = **86** | Recorte de la parte inferior del original (queda 1707×1950) para retirar el número de la calle y el rótulo. Punto focal `50% 90%` | Integrada |
| Gables Waterway Towers | `Gables-Waterway-Towers-Main.jpg` (2048×1536) | `src/assets/home/gables-waterway-towers.jpg` | 34 + 23 + 18 + 13 = **88** | Ninguno. Punto focal `45% 50%` | Integrada |
| St. Louis Condominium | `St.-Louis-Condominium.jpg` (1500×1000) | `src/assets/home/st-louis-condominium.jpg` | 33 + 22 + 17 + 13 = **85** | Ninguno. Punto focal `23% 50%` | Integrada |
| South Point Condominium | `South-Point-Condominium.jpg` (2400×840) | `src/assets/home/south-point-condominium.jpg` | 33 + 21 + 16 + 13 = **83** | Ninguno. Punto focal `75% 50%` | Integrada |

Todas pasan las condiciones previas: sin marcas de agua, sin datos personales legibles y sin placas visibles. Se revisaron los metadatos (sin GPS). En el camión, el teléfono visible es el de WRG.

## Descartes relevantes

- `Contac-Us-WRG-1.jpg` (camión «Disaster Response Team»): auténtica, pero trae un degradado oscuro ya aplicado del diseño anterior y no muestra un edificio gestionado. Correspondencia 30/40 para la tarjeta comercial.
- `Icon-Bay-Exterior.jpg`: fotografía de marketing de la torre al atardecer. No es la imagen de la ficha del proyecto y su autoría no está clara.
- `Urgent-Water-Damage-Response.jpg`, `Inspection-and-Assessment.jpg`, `Removal-and-Cleaning.jpg`, `Reconstruction.jpg`: apariencia de stock y procedencia sin verificar. El hero requiere una foto auténtica de WRG.
- `Meet-Our-CEO.jpg`: evento con terceros identificables. No corresponde a ningún espacio del home.
- `IMG_10072.jpg` y las dos fotos de WhatsApp (capacitaciones de WRG): auténticas y útiles para About o educación continua, pero no hay un espacio del home para ellas.
- Interiores de St. Louis y South Point (≤ 62 KB): resolución insuficiente.

## Integración

- `src/components/Photo.astro` envuelve `<Picture>` de `astro:assets` dentro del mismo marco `.ph` que `PhotoSlot`. Genera AVIF, WebP y JPEG en los anchos del espacio, con `sizes` por breakpoint, `object-position` como punto focal y `loading="eager"` + `fetchpriority="high"` solo en el hero.
- Texto alternativo en inglés en el hero, la tarjeta comercial e Icon Bay. Las miniaturas usan `alt=""` porque el nombre y la ubicación del proyecto están junto a la imagen.
- Los archivos fuente se conservan en `src/assets/home/` sin recomprimir (salvo el recorte de Icon Bay).

## Por confirmar

- `Home.jpg` lleva en sus metadatos el copyright de un fotógrafo («Javier Sanchez»). El cliente confirmó el 12 nov 2026 que la licencia cubre el uso en la web.
- ~~Autoría de las fotos de Icon Bay~~: confirmada el 11 nov 2026. Sigue pendiente la clasificación del caso (ver `pendientes.md`).
- `The-WRG-Difference.jpg` está ampliada desde una foto de teléfono. Si existe el original, mejoraría la nitidez de la tarjeta comercial.
