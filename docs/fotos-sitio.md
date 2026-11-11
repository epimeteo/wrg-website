# Fotografía del resto del sitio

Continuación de [fotos-home.md](fotos-home.md), con el mismo banco de imágenes, los mismos criterios (correspondencia 40, calidad 25, composición responsiva 20, coherencia 15; mínimo 80, con 32 en correspondencia y 18 en calidad) y el mismo componente `Photo.astro`. Las fotos y sus focos están centralizados en `src/data/photos.ts`. Cuando un espacio no tiene foto aprobada, la plantilla mantiene el `PhotoSlot`.

## Espacios y selección

| Página · espacio | Formato | Foto (banco) | Archivo | Puntaje | Retoque | Estado |
|---|---|---|---|---|---|---|
| Servicio · Water Damage Restoration (banda) | 21:8 / 4:3 móvil | `Water-Damage-Restoration` 1920×1050: air mover y deshumidificador en una habitación afectada | `services/water-drying-equipment.jpg` | 36+20+16+13 = **85** | Solo foco | Integrada |
| Servicio · Fire & Smoke (banda) | 21:8 / 4:3 móvil | `1794427955811.jpg` (carpeta «Imagenes de trabajo en sitio», 1600×1200): dormitorio con hollín y el techo abierto para retirar material dañado, obra de WRG | `services/fire-soot-damaged-room.jpg` | 35+19+17+11 = **82** | Solo foco | Integrada |
| Servicio · Mold Remediation (banda) | 21:8 | — | — | — | — | **Pendiente** |
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

## Pendientes: fotos que hace falta conseguir

- **Mold Remediation (banda):** contención montada para remediación, ≥ 2400 px de ancho. `Containment-1` muestra exactamente eso, pero mide 1080 px y en la banda de 1168 px queda ampliada (calidad 16/25). Si existe el original de esa foto, basta con reemplazar el archivo.
- **Galerías:** reparación terminada y equipo trabajando, en los cuatro casos; área afectada y proceso en Icon Bay y Gables; contexto del edificio en St. Louis (`St.-Louis-Condominium-Exterior` solo existe a 655×300).
- **Oficinas (índice de ubicaciones, 3 espacios):** fotos de las oficinas de Miami, West Palm Beach y Smyrna. No hay ninguna en el banco.
- **Perfiles en About (3 espacios):** retratos aprobados. Existen `1-2.png` y `2-2.png` (retratos profesionales), pero sin nombre ni aprobación del perfil no se publican.

No pude buscar fotos de terceros con licencia: la red de esta sesión no permite salir a bancos de imágenes.

## Carpeta «Imagenes de trabajo en sitio» (11 nov 2026)

22 fotos y 4 videos de WRG en obra: una inundación en una escuela (extracción de agua, medidores de humedad, deshumidificadores, retiro de escombros), un dormitorio con daño por fuego y un stand de WRG en un evento. La carpeta tenía todo subido dos veces. Se comprobó por tamaño en los 26 pares y por MD5 en una muestra de 4, y se envió a la papelera la segunda subida (20:27), conservando la primera (20:13).

- Integrada: la banda de Fire & Smoke (ver tabla).
- Descartada para la banda de fuego: la foto con una persona identificable en la puerta (`1794427955838.jpg`).
- Las fotos de la escuela son verticales (1200×1600): no sirven para las bandas 21:8 de servicio y no corresponden a ninguno de los 4 casos publicados, así que no se usan en sus galerías. Quedan disponibles si se publica ese proyecto como caso nuevo.

## Descartes relevantes

- `Fire-Damage-Restoration`, `Fire-Smoke`, `What-To-Do-After-A-Fire`, `Know-The-Affects-…`: muestran fuego activo, bomberos o llamas, no la limpieza posterior.
- `Mold-Remediation`, `Mold-Remediation-Atlanta-Bg`, `Removing-black-mold`: muestran moho, no la remediación (correspondencia < 32).
- `Reconstruction`, `Reconstruction-After-Water-Damage`: obra exterior o soldadura, no reparación interior.
- `Containment-1`, `Drying-and-Dehumidification-1`, `Removal-and-Cleaning-1`, `Water-Removal-and-Extraction-1`: auténticas de WRG, pero de 1080 px; demasiado pequeñas para las bandas de servicio. Quedan disponibles para espacios más chicos.
- `IMG_0072` (capacitación de WRG): auténtica. Para el hero de About se prefirió una foto de trabajo en obra, que responde mejor a la descripción del espacio.

## Confirmado (11 nov 2026)

- La asociación de propietarios no se opone a publicar los interiores de South Point y St. Louis.
- La autoría de `Icon-Bay-Exterior` está confirmada para su uso en el sitio.
- La licencia original de las fotos ilustrativas de servicios y de Miami cubre su uso en el sitio.
