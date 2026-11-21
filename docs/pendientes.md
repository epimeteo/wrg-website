# Pendientes antes del lanzamiento

Mientras `PUBLIC_REVIEW_MODE` no sea `false`, el sitio muestra estas advertencias en la propia página (`ReviewNote` y `ReviewFlag`) y no se indexa.

## Activos

- [x] Logo oficial: monograma WRG del sitio anterior en `LogoMark.astro` (header azul, footer blanco), favicon (`public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`) e imagen para redes `public/og-image.jpg`. Se regeneran con `node scripts/make-brand-assets.mjs`.
- [x] Fotografía del home (hero, tarjeta comercial y los 4 proyectos), integrada con `Photo.astro` (`<Picture>` de `astro:assets`). Detalle, puntajes y verificaciones pendientes en [fotos-home.md](fotos-home.md).
- [x] Fotografía de servicios, proyectos, About, Miami y blog, centralizada en `src/data/photos.ts`. Detalle en [fotos-sitio.md](fotos-sitio.md).
- [x] Banda de Mold Remediation: `Containment-1` (1080 px, el original más grande que existe en el backup y en el banco depurado) ampliada a 2160 px. Sigue abierto conseguir el original de cámara.
- [x] Licencia de `Home.jpg` (hero): el cliente confirmó que cubre el uso en la web (12 nov 2026).
- [x] Perfiles de About: publicados los dos retratos aprobados (`Untitled-design-59/60`, las mismas fotos de `1-2.png` y `2-2.png` en formato cuadrado), sin nombre ni cargo.
- [x] Banco depurado del cliente (`filtered-images`, 21 nov 2026): revisado completo. Reemplazó 2 provisionales (Brickell Key y Fort Lauderdale · equipo en obra) por fotos reales de cada obra, subió la resolución de 18 imágenes del blog y de la entrada de Coral Gables. Detalle en [fotos-sitio.md](fotos-sitio.md#banco-depurado-filtered-images-21-nov-2026).
- [ ] **Fotos provisionales en las galerías de los 4 casos** (quedan 9, con la etiqueta visible «Representative image»: 4 de Edgewater Bayfront High-Rise, 4 de Coral Gables y Fort Lauderdale · reparación). El banco depurado no trae fotos de esas obras para esos espacios. Lista en [fotos-sitio.md](fotos-sitio.md#fotos-provisionales-en-las-galerías-12-nov-2026-actualizado-el-21-nov-2026).
- [ ] Fotos de las oficinas (3) para el índice de ubicaciones: a la espera de que el cliente las comparta (el banco depurado no trae ninguna).
- [ ] Tercer perfil de About: foto, nombre y cargo. El banco depurado solo trae retratos de 430×286 sin indicación de aprobación; los nombres de archivo no coinciden entre sí, así que no confirman nombres ni cargos.
- [ ] Fotos de la escuela inundada: el cliente compartirá ese caso más adelante.
- [ ] Las dos fotos provisionales del prototipo de diseño (equipo con equipos de secado y técnico con medidor de humedad) **no están en este repositorio público**: su origen y sus derechos de uso no están confirmados.

## Datos operativos

- [x] Dirección de West Palm Beach: confirmada por el cliente, 1705 Donna Road, Unit #10 (12 nov 2026).
- [ ] Disponibilidad de cada servicio por oficina y cobertura detallada.
- [ ] Licencias (CGC1526082, MRSR73) y badges: titular, vigencia, alcance y jurisdicción. No presentar credenciales de Florida como autorización en Georgia.

## Política de nombres de edificios (21 nov 2026)

- [x] Por política de la empresa y del estado de Florida, el sitio no menciona nombres de edificios. Los 4 casos pasaron a llamarse por tipo de propiedad y ubicación: Edgewater Bayfront High-Rise, Coral Gables Mid-Century Condominium, Brickell Key Island Tower y Fort Lauderdale Beachfront Towers. Cambiaron también las URLs (`/projects/edgewater-bayfront-high-rise/`, etc.), los textos alternativos y los nombres de archivo de las fotos.
- [x] Las dos fotos del caso de Coral Gables se recortaron para que no se lea el letrero con el nombre y la dirección del edificio.
- [ ] La foto de la entrada del caso de Coral Gables traía una marca de agua «© Miami MLS 02/2020» (se eliminó con el recorte). Confirmar que WRG tiene derechos sobre esa imagen; si viene de un anuncio inmobiliario, reemplazarla.
- [ ] Plan de redirecciones: incluir las URLs antiguas de los 4 casos del sitio anterior hacia las nuevas.
- [ ] El historial de git del repositorio (público) conserva los nombres anteriores en commits viejos.

## Evidencia y autoría

- [ ] Edgewater Bayfront High-Rise: la ficha original dice “Fire + Smoke” y la narrativa describe un evento de agua (la lista de destacados del sitio anterior lo etiqueta “Water + Storm”). Confirmar la clasificación. Hoy se publica como Water Damage + Reconstruction.
- [ ] Fechas y alcance detallado de los 4 casos (Edgewater Bayfront High-Rise y Coral Gables ya incluyen las cifras publicadas por WRG). Casos 5 y 6 (prioridad West Palm Beach y Georgia).
- [x] Reseñas (21 nov 2026): 12 reseñas de Google de Florida, copiadas de la hoja «WRG · Historial de reseñas», en `/reviews/`, About y Miami. Se quitaron los dos testimonios sin fuente. Detalle en [resenas.md](resenas.md).
- [x] Enlace al perfil de Google Business de Florida: botón «Read all reviews on Google» en `/reviews/`.
- [ ] West Palm Beach y Georgia siguen sin reseñas propias.
- [ ] Perfiles de expertos (hasta 3): nombre, cargo y credenciales. La sección de About ya es pública con los dos retratos aprobados, sin nombres.
- [ ] Blog: los 4 artículos son textos editoriales nuevos (12 nov 2026), escritos con guías públicas de EPA, CDC, OSHA, USFA e IICRC citadas al pie, mientras se migran los del sitio anterior. Falta la revisión profesional de WRG, el autor y la fecha de cada uno.
- [x] Migración del blog (13 nov 2026): los 52 artículos del sitio anterior están en `src/content/blog/`, con la misma URL que tenían (no necesitan redirección), su fecha original e imagen destacada. Detalle en [blog-migracion.md](blog-migracion.md).
- [ ] Blog migrado: confirmar el autor de cada artículo (hoy todos firman «WRG Team»; el sitio anterior mostraba «WRG Team» o «Felipe») y revisar las afirmaciones de licencias y certificaciones que traen algunos textos (ver blog-migracion.md).

## Decisiones del cliente

- [ ] Environmental Cleanup: ya tiene un artículo relacionado; sigue sin caso de estudio.
- [ ] Privacy Policy y Terms & Conditions: publicados textos genéricos (12 nov 2026) adaptados al sitio actual (contacto solo por teléfono, sin formularios ni cookies). La ley aplicable (Florida, Miami-Dade) es una suposición. WRG debe revisarlos con su abogado y aprobarlos o reemplazarlos.
- [ ] Careers: puestos abiertos y canal de postulación (no se inventa un email ni beneficios).
- [ ] Thank You: solo tiene sentido si se aprueba un formulario de contacto. Hoy el sitio no tiene formularios; el contacto es por teléfono.
- [ ] Preferred Client Program y Events (marcados “To confirm”).
- [ ] Dominio final, configuración DNS y plan de redirecciones desde las URLs actuales.

## Afirmaciones validadas por el cliente (12 nov 2026)

Se usan con la redacción del sitio anterior:

- «45 minutes or less rapid response time», «more than 20 years» sirviendo al sur de Florida (antes «almost 20 years»; cambio pedido por el cliente el 21 nov 2026), «4,000+ projects completed» y «top-rated»: home (hero y lista de datos) y About.
- Productos «EPA-registered, CDC-compliant» y equipo de protección: alcance de Environmental Cleanup.
- Resultados con aseguradoras: Edgewater Bayfront High-Rise (llegada en 45 minutos; reparaciones sin fondos de la asociación) y Coral Gables (documentación para la aseguradora; mitigación en 30 días), tal como los publicó WRG.

No se redactaron garantías sanitarias nuevas: el sitio anterior no trae un texto concreto. Si WRG quiere una, debe aportar la redacción. Estas cifras provienen del sitio de Florida; no se presentan como propias de la oficina de Georgia.
