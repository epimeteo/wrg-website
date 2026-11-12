# Pendientes antes del lanzamiento

Mientras `PUBLIC_REVIEW_MODE` no sea `false`, el sitio muestra estas advertencias en la propia página (`ReviewNote` y `ReviewFlag`) y no se indexa.

## Activos

- [x] Logo oficial: monograma WRG del sitio anterior en `LogoMark.astro` (header azul, footer blanco), favicon (`public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`) e imagen para redes `public/og-image.jpg`. Se regeneran con `node scripts/make-brand-assets.mjs`.
- [x] Fotografía del home (hero, tarjeta comercial y los 4 proyectos), integrada con `Photo.astro` (`<Picture>` de `astro:assets`). Detalle, puntajes y verificaciones pendientes en [fotos-home.md](fotos-home.md).
- [x] Fotografía de servicios, proyectos, About, Miami y blog, centralizada en `src/data/photos.ts`. Detalle en [fotos-sitio.md](fotos-sitio.md).
- [x] Banda de Mold Remediation: `Containment-1` (1080 px, el original más grande que existe en el backup) ampliada a 2160 px.
- [x] Licencia de `Home.jpg` (hero): el cliente confirmó que cubre el uso en la web (12 nov 2026).
- [x] Perfiles de About: publicados los dos retratos aprobados (`Untitled-design-59/60`, las mismas fotos de `1-2.png` y `2-2.png` en formato cuadrado), sin nombre ni cargo.
- [ ] **Fotos provisionales en las galerías de los 4 casos** (11 espacios, con la etiqueta visible «Representative image»): hay que sustituirlas por fotos de cada obra antes del lanzamiento. Lista en [fotos-sitio.md](fotos-sitio.md#fotos-provisionales-en-las-galerías-12-nov-2026).
- [ ] Fotos de las oficinas (3) para el índice de ubicaciones: a la espera de que el cliente las comparta.
- [ ] Tercer perfil de About: foto, nombre y cargo.
- [ ] Fotos de la escuela inundada: el cliente compartirá ese caso más adelante.
- [ ] Las dos fotos provisionales del prototipo de diseño (equipo con equipos de secado y técnico con medidor de humedad) **no están en este repositorio público**: su origen y sus derechos de uso no están confirmados.

## Datos operativos

- [x] Dirección de West Palm Beach: confirmada por el cliente, 1705 Donna Road, Unit #10 (12 nov 2026).
- [ ] Disponibilidad de cada servicio por oficina y cobertura detallada.
- [ ] Licencias (CGC1526082, MRSR73) y badges: titular, vigencia, alcance y jurisdicción. No presentar credenciales de Florida como autorización en Georgia.

## Evidencia y autoría

- [ ] Icon Bay: la ficha original dice “Fire + Smoke” y la narrativa describe un evento de agua (la lista de destacados del sitio anterior lo etiqueta “Water + Storm”). Confirmar la clasificación. Hoy se publica como Water Damage + Reconstruction.
- [ ] Fechas y alcance detallado de los 4 casos (Icon Bay y Gables ya incluyen las cifras publicadas por WRG). Casos 5 y 6 (prioridad West Palm Beach y Georgia).
- [ ] Reseñas: plataforma, fecha, enlace y permiso de cada testimonio. Solo entonces se muestran en las páginas locales.
- [ ] Perfiles de expertos (hasta 3): nombre, cargo y credenciales. La sección de About ya es pública con los dos retratos aprobados, sin nombres.
- [ ] Blog: los 4 artículos son textos editoriales nuevos (12 nov 2026), escritos con guías públicas de EPA, CDC, OSHA, USFA e IICRC citadas al pie, mientras se migran los del sitio anterior. Falta la revisión profesional de WRG, el autor y la fecha de cada uno.

## Decisiones del cliente

- [ ] Environmental Cleanup: ya tiene un artículo relacionado; sigue sin caso de estudio.
- [ ] Privacy Policy y Terms & Conditions: publicados textos genéricos (12 nov 2026) adaptados al sitio actual (contacto solo por teléfono, sin formularios ni cookies). La ley aplicable (Florida, Miami-Dade) es una suposición. WRG debe revisarlos con su abogado y aprobarlos o reemplazarlos.
- [ ] Careers: puestos abiertos y canal de postulación (no se inventa un email ni beneficios).
- [ ] Thank You: solo tiene sentido si se aprueba un formulario de contacto. Hoy el sitio no tiene formularios; el contacto es por teléfono.
- [ ] Preferred Client Program y Events (marcados “To confirm”).
- [ ] Dominio final, configuración DNS y plan de redirecciones desde las URLs actuales.

## Afirmaciones validadas por el cliente (12 nov 2026)

Se usan con la redacción del sitio anterior:

- «45 minutes or less rapid response time», «almost 20 years» sirviendo al sur de Florida, «4,000+ projects completed» y «top-rated»: home (hero y lista de datos) y About.
- Productos «EPA-registered, CDC-compliant» y equipo de protección: alcance de Environmental Cleanup.
- Resultados con aseguradoras: Icon Bay (llegada en 45 minutos; reparaciones sin fondos de la asociación) y Gables (documentación para la aseguradora; mitigación en 30 días), tal como los publicó WRG.

No se redactaron garantías sanitarias nuevas: el sitio anterior no trae un texto concreto. Si WRG quiere una, debe aportar la redacción. Estas cifras provienen del sitio de Florida; no se presentan como propias de la oficina de Georgia.
