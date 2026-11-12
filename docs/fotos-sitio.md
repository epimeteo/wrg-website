# Fotografía del resto del sitio

Continuación de [fotos-home.md](fotos-home.md), con el mismo banco de imágenes, los mismos criterios (correspondencia 40, calidad 25, composición responsiva 20, coherencia 15; mínimo 80, con 32 en correspondencia y 18 en calidad) y el mismo componente `Photo.astro`. Las fotos y sus focos están centralizados en `src/data/photos.ts`. Cuando un espacio no tiene foto aprobada, la plantilla mantiene el `PhotoSlot`.

## Espacios y selección

| Página · espacio | Formato | Foto (banco) | Archivo | Puntaje | Retoque | Estado |
|---|---|---|---|---|---|---|
| Servicio · Water Damage Restoration (banda) | 21:8 / 4:3 móvil | `Water-Damage-Restoration` 1920×1050: air mover y deshumidificador en una habitación afectada | `services/water-drying-equipment.jpg` | 36+20+16+13 = **85** | Solo foco | Integrada |
| Servicio · Fire & Smoke (banda) | 21:8 / 4:3 móvil | `1794427955811.jpg` (carpeta «Imagenes de trabajo en sitio», 1600×1200): dormitorio con hollín y el techo abierto para retirar material dañado, obra de WRG | `services/fire-soot-damaged-room.jpg` | 35+19+17+11 = **82** | Solo foco | Integrada |
| Servicio · Mold Remediation (banda) | 21:8 / 4:3 móvil | `Containment-1` 1080×1080: contención con postes y ventanas de inspección, obra de WRG | `services/mold-containment.jpg` | 38+17+16+13 = **84** | Ampliación 2× y foco | Integrada |
| Servicio · Environmental Cleanup (banda) | 21:8 | `Services` 1920×975: dos técnicos con trajes de protección aplicando un tratamiento | `services/environmental-ppe-crew.jpg` | 36+21+16+12 = **85** | Solo foco | Integrada (ilustrativa) |
| Servicio · Reconstruction (banda) | 21:8 | `Water-Damage-Ways-To-Repair-A-Drywall` 2400×1600: reparación de un techo de drywall | `services/reconstruction-drywall-finishing.jpg` | 35+23+16+14 = **88** | Solo foco | Integrada (ilustrativa) |
| Servicios · tarjetas de casos relacionados | 16:9 | Foto principal de cada proyecto (ver home) | `home/*.jpg` | ver home | Foco por formato | Integradas |
| Proyectos · índice (4 tarjetas) | 16:10 | Foto principal de cada proyecto | `home/*.jpg` | ver home | Foco por formato | Integradas |
| Caso · foto principal (4 casos) | 21:9 / 4:3 móvil | Foto principal de cada proyecto | `home/*.jpg` | ver home | Foco por formato | Integradas |
| Galería St. Louis · área afectada | 4:3 (grande) | `St.-Louis-Condominium-Interior-1` 655×494: moho sobre zócalo y pared | `projects/st-louis-affected-trim.jpg` | 36+18+16+12 = **82** | Ninguno | Integrada |
| Galería St. Louis · proceso | 4:3 | `St.-Louis-Condominium-Interior-4` 655×494: pasillo con zócalos y piso retirados | `projects/st-louis-hallway-removal.jpg` | 33+18+17+12 = **80** | Ninguno | Integrada |
| Galería South Point · área afectada | 4:3 (grande) | `South-Point-Condominium-Interior-1` 655×494: drywall retirado con moho | `projects/south-point-affected-drywall.jpg` | 37+18+17+12 = **84** | WebP → JPEG | Integrada |
| Galería South Point · equipo/proceso | 4:3 | `South-Point-Condominium-Interior-4` 655×494: contención y equipo WRG | `projects/south-point-containment.jpg` | 37+18+17+12 = **84** | Ninguno | Integrada |
| Galería South Point · contexto | 4:3 | `South-Point-Condominium-Exterior` 655×494: torre y playa desde un balcón | `projects/south-point-exterior.jpg` | 36+18+17+14 = **85** | Ninguno | Integrada |
| Galería Gables · contexto | 4:3 | `Gables-Waterway-Towers-Entrance-Exterior` 1536×1152 | `projects/gables-entrance.jpg` | 38+21+18+14 = **91** | Ninguno | Integrada |
| Galería Icon Bay · contexto | 4:3 | `Icon-Bay-Exterior` 1920×1320: torre desde el agua al atardecer | `projects/icon-bay-exterior.jpg` | 36+22+18+14 = **90** | Ninguno | Integrada |
| About · foto principal | 5:4 | `Inspection-and-Assessment-1` 1080×1050: técnico con camiseta WRG documentando un techo | `about/wrg-technician-inspection.jpg` | 37+20+17+13 = **87** | Solo foco | Integrada |
| About · 4 tarjetas de proyecto | 1:1 | Foto principal de cada proyecto | `home/*.jpg` | ver home | Foco | Integradas |
| Miami · contexto local | 5:4 | `Projects` 1920×975: torres y condominios del centro de Miami junto a la bahía | `locations/miami-downtown.jpg` | 34+21+17+13 = **85** | Solo foco | Integrada (ilustrativa) |
| Blog · artículo destacado | panel oscuro | `Professional-Water-Damage-Restoration` 1080×1050: air movers en un pasillo de condominio | `blog/condo-hallway-drying.jpg` | 36+20+17+12 = **85** | Solo foco | Integrada |

Las imágenes de servicios marcadas como «ilustrativas» no se atribuyen a trabajos de WRG: el texto alternativo describe la escena sin decir que es una obra de la empresa.

## Fotos provisionales en las galerías (12 nov 2026)

A pedido del cliente, los espacios vacíos de las galerías se llenaron con fotos del banco que muestran **situaciones parecidas, no la obra del caso**. No se pueden generar fotografías nuevas: todas salen del backup del sitio anterior. En el sitio llevan la etiqueta visible «Representative image» (campo `provisional` en `src/data/photos.ts`, función `pv()`), el texto alternativo describe la escena sin atribuirla al edificio, y la galería avisa que esas imágenes no son de la propiedad. Están en `src/assets/projects/provisional/`.

| Caso · espacio | Foto provisional (banco) | Origen |
|---|---|---|
| Icon Bay · área afectada | `Water-Removal-and-Extraction-1` 1080×1080: agua en un pasillo | WRG |
| Icon Bay · proceso | `Removal-and-Cleaning-1` 1080×1080: deshumidificadores y air movers en un pasillo | WRG |
| Icon Bay · reparación | `Reconstruction-1` 1920×1280: instalación de drywall | Stock |
| Icon Bay · equipo | `Contac-Us-Water-Damage-2` 1080×1400: van de WRG y equipo descargando frente a una torre | WRG |
| Gables · área afectada | Dormitorio con hollín (la misma foto de la banda de Fire & Smoke) | WRG, otra obra |
| Gables · proceso | `Drying-and-Dehumidification-1` 1080×1080: secado en una habitación abierta hasta la estructura | WRG |
| Gables · reparación | Reparación de techo de drywall (la misma de la banda de Reconstruction) | Stock |
| Gables · equipo | `Contact-1` 1920×1280: aspirado con equipo industrial | Stock |
| St. Louis · equipo | `Cleaning-and-Sanitization` 1080×1080: técnico con traje aplicando tratamiento en un pasillo | Stock |
| South Point · reparación | `Reconstruction-1`: instalación de drywall | Stock |
| South Point · equipo | `Protect-Your-Property-with-Professional-1` 1080×1400: técnico con respirador dentro de una contención | Stock |

**Antes del lanzamiento** hay que reemplazarlas por fotos de cada obra: basta cambiar la entrada en `projectGallery` por una normal (sin `pv()`).

Fotos reales añadidas en la misma tanda:

- **St. Louis · edificio:** `St.-Louis-Condominium-Exterior`. El original del backup mide 655×494 (no 655×300, que era un recorte). Ampliada a 1310×988 con Lanczos y enfoque suave → `projects/st-louis-exterior.jpg`.
- **St. Louis · reparación terminada:** `St.-Louis-Condominium-Interior-3` 655×494, pared y techo ya reparados → `projects/st-louis-repaired-ceiling.jpg`.
- **Mold Remediation · banda:** `Containment-1`. Se revisaron los 4 ZIP del backup: el archivo de 1080×1080 es el original, no existe una versión mayor. Ampliada a 2160×2160 con Lanczos y enfoque suave → `services/mold-containment.jpg`. Se ve bien a tamaño normal; en pantallas de alta densidad queda algo suave. Si WRG consigue la foto de cámara, basta con reemplazar el archivo.
- **About · perfiles:** `Untitled-design-59.png` y `Untitled-design-60.png` (400×400, los mismos retratos de `1-2.png` y `2-2.png` en formato cuadrado), ampliados a 800 px → `about/profile-1.jpg` y `profile-2.jpg`. Publicados sin nombre ni cargo.

## Pendientes: fotos que hace falta conseguir

- **Galerías:** las fotos de cada obra que sustituyan a las 11 provisionales de la tabla anterior.
- **Oficinas (índice de ubicaciones, 3 espacios):** fotos de Miami, West Palm Beach y Smyrna. No hay ninguna en el banco; el cliente las compartirá.
- **About:** tercer perfil, y nombre y cargo de los tres.
- **Mold Remediation (banda):** opcional, el original de cámara de `Containment-1` (≥ 2400 px).

## Carpeta «Imagenes de trabajo en sitio» (11 nov 2026)

22 fotos y 4 videos de WRG en obra: una inundación en una escuela (extracción de agua, medidores de humedad, deshumidificadores, retiro de escombros), un dormitorio con daño por fuego y un stand de WRG en un evento. La carpeta tenía todo subido dos veces. Se comprobó por tamaño en los 26 pares y por MD5 en una muestra de 4, y se envió a la papelera la segunda subida (20:27), conservando la primera (20:13).

- Integrada: la banda de Fire & Smoke (ver tabla).
- Descartada para la banda de fuego: la foto con una persona identificable en la puerta (`1794427955838.jpg`).
- Las fotos de la escuela son verticales (1200×1600): no sirven para las bandas 21:8 de servicio y no corresponden a ninguno de los 4 casos publicados, así que no se usan en sus galerías. Quedan disponibles si se publica ese proyecto como caso nuevo.

## Descartes relevantes

- `Fire-Damage-Restoration`, `Fire-Smoke`, `What-To-Do-After-A-Fire`, `Know-The-Affects-…`: muestran fuego activo, bomberos o llamas, no la limpieza posterior.
- `Mold-Remediation`, `Mold-Remediation-Atlanta-Bg`, `Removing-black-mold`: muestran moho, no la remediación (correspondencia < 32).
- `Reconstruction`, `Reconstruction-After-Water-Damage`: obra exterior o soldadura, no reparación interior.
- `Drying-and-Dehumidification-1`, `Removal-and-Cleaning-1`, `Water-Removal-and-Extraction-1`: auténticas de WRG, de 1080 px. Hoy se usan como provisionales en las galerías.
- `IMG_0072` (capacitación de WRG): auténtica. Para el hero de About se prefirió una foto de trabajo en obra, que responde mejor a la descripción del espacio.

## Confirmado (11 nov 2026)

- La asociación de propietarios no se opone a publicar los interiores de South Point y St. Louis.
- La autoría de `Icon-Bay-Exterior` está confirmada para su uso en el sitio.
- La licencia original de las fotos ilustrativas de servicios y de Miami cubre su uso en el sitio.
