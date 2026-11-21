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
| Galería Brickell Key · área afectada | 4:3 (grande) | `Brickell Key Island Tower` 655×494: moho a lo largo de una moldura curva del techo, bajo un cartel de salida (texto alternativo corregido el 21 nov 2026) | `projects/st-louis-affected-trim.jpg` | 36+18+16+12 = **82** | Ninguno | Integrada |
| Galería Brickell Key · proceso | 4:3 | `Brickell Key Island Tower` 655×494: pasillo con zócalos y piso retirados | `projects/st-louis-hallway-removal.jpg` | 33+18+17+12 = **80** | Ninguno | Integrada |
| Galería Fort Lauderdale · área afectada | 4:3 (grande) | `Fort Lauderdale Beachfront Towers` 655×494: drywall retirado con moho | `projects/south-point-affected-drywall.jpg` | 37+18+17+12 = **84** | WebP → JPEG | Integrada |
| Galería Fort Lauderdale · equipo/proceso | 4:3 | `Fort Lauderdale Beachfront Towers` 655×494: contención y equipo WRG | `projects/south-point-containment.jpg` | 37+18+17+12 = **84** | Ninguno | Integrada |
| Galería Fort Lauderdale · contexto | 4:3 | `Fort Lauderdale Beachfront Towers` 655×494: torre y playa desde un balcón | `projects/south-point-exterior.jpg` | 36+18+17+14 = **85** | Ninguno | Integrada |
| Galería Fort Lauderdale · equipo en obra | 4:3 | `Fort Lauderdale Beachfront Towers` 655×494 (banco depurado): air scrubber de WRG funcionando dentro de una contención, con la ventana sellada | `projects/south-point-air-scrubber.jpg` | 34+18+15+13 = **80** | Ninguno | Integrada (reemplaza a una provisional, 21 nov 2026) |
| Galería Brickell Key · equipo en obra | 4:3 | `Brickell Key Island Tower` 655×494 (banco depurado): contención que cierra un pasillo, con postes, cinta de precaución y cartel de riesgo microbiano | `projects/st-louis-containment-entrance.jpg` | 35+18+15+13 = **81** | Ninguno | Integrada (reemplaza a una provisional, 21 nov 2026) |
| Galería Coral Gables · contexto | 4:3 | `Coral Gables Mid-Century Condominium` 1600×1200 (banco depurado; antes 1536×1152) | `projects/gables-entrance.jpg` | 38+22+18+14 = **92** | Ninguno | Integrada |
| Galería Edgewater Bayfront High-Rise · contexto | 4:3 | `Edgewater Bayfront High-Rise` 1920×1320: torre desde el agua al atardecer | `projects/icon-bay-exterior.jpg` | 36+22+18+14 = **90** | Ninguno | Integrada |
| About · foto principal | 5:4 | `Inspection-and-Assessment-1` 1080×1050: técnico con camiseta WRG documentando un techo | `about/wrg-technician-inspection.jpg` | 37+20+17+13 = **87** | Solo foco | Integrada |
| About · 4 tarjetas de proyecto | 1:1 | Foto principal de cada proyecto | `home/*.jpg` | ver home | Foco | Integradas |
| Miami · contexto local | 5:4 | `Projects` 1920×975: torres y condominios del centro de Miami junto a la bahía | `locations/miami-downtown.jpg` | 34+21+17+13 = **85** | Solo foco | Integrada (ilustrativa) |
| Blog · artículo destacado | panel oscuro | `Professional-Water-Damage-Restoration` 1080×1050: air movers en un pasillo de condominio | `blog/condo-hallway-drying.jpg` | 36+20+17+12 = **85** | Solo foco | Integrada |

Las imágenes de servicios marcadas como «ilustrativas» no se atribuyen a trabajos de WRG: el texto alternativo describe la escena sin decir que es una obra de la empresa.

## Fotos provisionales en las galerías (12 nov 2026, actualizado el 21 nov 2026)

Quedan **9** provisionales. Las de Brickell Key · equipo y Fort Lauderdale · equipo se reemplazaron el 21 nov 2026 por fotos reales de cada obra (ver la tabla anterior y la sección del banco depurado). A pedido del cliente, los espacios vacíos de las galerías se llenaron con fotos del banco que muestran **situaciones parecidas, no la obra del caso**. No se pueden generar fotografías nuevas: todas salen del backup del sitio anterior. En el sitio llevan la etiqueta visible «Representative image» (campo `provisional` en `src/data/photos.ts`, función `pv()`), el texto alternativo describe la escena sin atribuirla al edificio, y la galería avisa que esas imágenes no son de la propiedad. Están en `src/assets/projects/provisional/`.

| Caso · espacio | Foto provisional (banco) | Origen |
|---|---|---|
| Edgewater Bayfront High-Rise · área afectada | `Water-Removal-and-Extraction-1` 1080×1080: agua en un pasillo | WRG |
| Edgewater Bayfront High-Rise · proceso | `Removal-and-Cleaning-1` 1080×1080: deshumidificadores y air movers en un pasillo | WRG |
| Edgewater Bayfront High-Rise · reparación | `Reconstruction-1` 1920×1280: instalación de drywall | Stock |
| Edgewater Bayfront High-Rise · equipo | `Contac-Us-Water-Damage-2` 1080×1400: van de WRG y equipo descargando frente a una torre | WRG |
| Coral Gables · área afectada | Dormitorio con hollín (la misma foto de la banda de Fire & Smoke) | WRG, otra obra |
| Coral Gables · proceso | `Drying-and-Dehumidification-1` 1080×1080: secado en una habitación abierta hasta la estructura | WRG |
| Coral Gables · reparación | Reparación de techo de drywall (la misma de la banda de Reconstruction) | Stock |
| Coral Gables · equipo | `Contact-1` 1920×1280: aspirado con equipo industrial | Stock |
| Fort Lauderdale · reparación | `Reconstruction-1`: instalación de drywall | Stock |

**Antes del lanzamiento** hay que reemplazarlas por fotos de cada obra: basta cambiar la entrada en `projectGallery` por una normal (sin `pv()`).

Fotos reales añadidas en la misma tanda:

- **Brickell Key · edificio:** `Brickell Key Island Tower`. El original del backup mide 655×494 (no 655×300, que era un recorte). Ampliada a 1310×988 con Lanczos y enfoque suave → `projects/st-louis-exterior.jpg`.
- **Brickell Key · reparación terminada:** `Brickell Key Island Tower` 655×494, pared y techo ya reparados → `projects/st-louis-repaired-ceiling.jpg`.
- **Mold Remediation · banda:** `Containment-1`. Se revisaron los 4 ZIP del backup: el archivo de 1080×1080 es el original, no existe una versión mayor. Ampliada a 2160×2160 con Lanczos y enfoque suave → `services/mold-containment.jpg`. Se ve bien a tamaño normal; en pantallas de alta densidad queda algo suave. Si WRG consigue la foto de cámara, basta con reemplazar el archivo.
- **About · perfiles:** `Untitled-design-59.png` y `Untitled-design-60.png` (400×400, los mismos retratos de `1-2.png` y `2-2.png` en formato cuadrado), ampliados a 800 px → `about/profile-1.jpg` y `profile-2.jpg`. Publicados sin nombre ni cargo.

## Pendientes: fotos que hace falta conseguir

- **Galerías:** las fotos de cada obra que sustituyan a las 9 provisionales de la tabla anterior. El banco depurado no trae interiores de Edgewater Bayfront High-Rise ni de Coral Gables, ni fotos de reparación terminada de Fort Lauderdale.
- **Oficinas (índice de ubicaciones, 3 espacios):** fotos de Miami, West Palm Beach y Smyrna. Tampoco hay ninguna en el banco depurado (las vistas de Atlanta son horizontes de la ciudad, no la oficina de Smyrna); el cliente las compartirá.
- **About:** tercer perfil, y nombre y cargo de los tres. Ver la nota sobre retratos en la sección del banco depurado.
- **Mold Remediation (banda):** opcional, el original de cámara de `Containment-1` (≥ 2400 px). El banco depurado solo trae la versión de 1080×1080.

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

- La asociación de propietarios no se opone a publicar los interiores de Fort Lauderdale y Brickell Key.
- La autoría de `Edgewater Bayfront High-Rise` está confirmada para su uso en el sitio.
- La licencia original de las fotos ilustrativas de servicios y de Miami cubre su uso en el sitio.

## Banco depurado «filtered-images» (21 nov 2026)

El cliente depuró el banco en Drive (carpeta «The Water Restoration Group / Archivos» › `filtered-images`, unos 660 archivos: originales del sitio anterior y sus variantes responsivas). WRG confirmó que tiene derechos sobre todo el banco. Se descargó el original más grande de cada imagen (≈ 145), se revisaron en hojas de contacto con nombre y dimensiones, y se compararon por similitud visual con las imágenes ya publicadas. No se revisaron logos, insignias ni iconos. La carpeta «Imagenes de trabajo en sitio» no cambió desde la revisión del 11 nov.

**Integradas**

| Espacio | Foto del banco | Archivo | Puntaje | Estado |
|---|---|---|---|---|
| Brickell Key · equipo en obra | `Brickell Key Island Tower` 655×494 | `projects/st-louis-containment-entrance.jpg` | 35+18+15+13 = **81** | Reemplaza a la provisional `Cleaning-and-Sanitization` (stock) |
| Fort Lauderdale · equipo en obra | `Fort Lauderdale Beachfront Towers` 655×494 | `projects/south-point-air-scrubber.jpg` | 34+18+15+13 = **80** | Reemplaza a la provisional `Protect-Your-Property-with-Professional-1` (stock) |
| Coral Gables · contexto | `Coral Gables Mid-Century Condominium` 1600×1200 | `projects/gables-entrance.jpg` | 38+22+18+14 = **92** | Misma foto, versión mayor |
| Blog · 18 artículos | Originales de 1680 a 2560 px | `blog/posts/*.jpg` | Misma foto | Ver [blog-migracion.md](blog-migracion.md#imágenes-del-banco-depurado-21-nov-2026) |

En la galería, el pie de cada espacio no se muestra sobre la foto (solo el texto alternativo), así que las dos fotos de «equipo en obra» no quedan rotuladas como «Team at work»: muestran el montaje del equipo de WRG en la obra, sin personas.

**Revisadas y sin cambio**

- **Edgewater Bayfront High-Rise y Coral Gables:** el banco solo trae las fachadas que ya se usan (`Edgewater Bayfront High-Rise`, `Edgewater Bayfront High-Rise`, `Coral Gables Mid-Century Condominium`). Sus 8 provisionales siguen.
- **Fort Lauderdale · reparación:** no hay foto de reparación terminada; sigue la provisional. `Fort Lauderdale Beachfront Towers` (techo abierto con ductos) y `-Interior-3` (manchas de moho, primer plano poco nítido) son reales pero no corresponden a ningún espacio libre.
- **Oficinas:** ninguna foto muestra una oficina. `Serving-All-of-Atlanta-and-Surrounding-Areas` y `Our-service-areas-include-1` son horizontes de Atlanta muy aclarados (fondos del sitio anterior): no son la oficina de Smyrna.
- **About · perfiles:** `Henry Dow CEO WRG.png` y `Monica Martinez Sales Manager WRG.png` (400×400) son los mismos dos retratos ya publicados; no hay versión mayor. Los retratos `Fernando-Dow`, `Francisco-Giron`, `Jose-Romero` y `Monica-Martinez` miden 430×286: no alcanzan para un perfil 4:5 de 800 px y nada en la carpeta indica que estén aprobados para publicarse. No se añadió un tercer perfil ni se publicaron nombres: además, `Monica-Martinez.jpg` muestra a una persona distinta de la del retrato `Monica Martinez Sales Manager WRG.png`, así que los nombres de archivo no sirven como confirmación.
- **Mold Remediation (banda):** `Containment-1` sigue siendo de 1080×1080. `Brickell Key Island Tower` es una contención real pero de 655 px.
- **Bandas de servicio, hero de About, Miami y blog destacado:** las alternativas reales de WRG (`Removal-and-Cleaning-1`, `Water-Removal-and-Extraction-1`, `Drying-and-Dehumidification-1`, `About.jpg`, `Mold-Remediation-Atlanta-Featured-Image`) son cuadradas de 1080 px o muestran vehículos; no mejoran las bandas 21:8 de 2400 px ni el hero de About.

**Descartadas**

- Personas identificables o eventos (Events está excluido): `Untitled-design-70.png`, `WhatsApp-Image-2021-07-21…`, `WhatsApp-Image-2021-02-09…`, `Why-Is-Continuing-Education-Important.webp`, `IMG_0072`, `Meet-Our-CEO`, `Contact.jpg` (persona junto a un auto de WRG), `WRG-Events`, `Events`.
- Gráficos con texto o baja resolución: `City-Buildings-Facebook-Cover-*` (828×315), `Henry-Dow.png` (firma de correo), `WRG-Slim-Banner`, `About-The-Water-Restoration-Group` (fondo de color con recorte).
- Fuera de tema o de stock sin relación con un espacio: `space.jpg`, `Sea-Turtle-Season`, `Coronavirus-Services`, `Water-Background`, entre otros.
