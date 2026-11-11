# Pendientes antes del lanzamiento

Mientras `PUBLIC_REVIEW_MODE` no sea `false`, el sitio muestra estas advertencias en la propia página (`ReviewNote` y `ReviewFlag`) y no se indexa.

## Activos

- [ ] Logo oficial (SVG teal y blanco). El lockup “WRG” actual es provisional (`Header.astro`, `Footer.astro`, `public/favicon.svg`).
- [x] Fotografía del home (hero, tarjeta comercial y los 4 proyectos), integrada con `Photo.astro` (`<Picture>` de `astro:assets`). Detalle, puntajes y verificaciones pendientes en [fotos-home.md](fotos-home.md).
- [ ] Fotografía aprobada para el resto de marcos `PhotoSlot` (servicios, oficinas, páginas de proyecto, galerías). Mismo flujo: archivo en `src/assets/` y componente `Photo` con `alt` y punto focal.
- [ ] Las dos fotos provisionales del prototipo de diseño (equipo con equipos de secado y técnico con medidor de humedad) **no están en este repositorio público**: su origen y sus derechos de uso no están confirmados.

## Datos operativos

- [ ] Dirección de West Palm Beach: el brief dice 1705 Donna Road, Unit #10; el footer del sitio actual dice 1500 N Florida Mango Rd. Ste. 16. Se usa la del brief.
- [ ] Disponibilidad de cada servicio por oficina y cobertura detallada.
- [ ] Licencias (CGC1526082, MRSR73) y badges: titular, vigencia, alcance y jurisdicción. No presentar credenciales de Florida como autorización en Georgia.

## Evidencia y autoría

- [ ] Icon Bay: la ficha original dice “Fire + Smoke” y la narrativa describe un evento de agua. Confirmar la clasificación.
- [ ] Fotos autorizadas, fechas y alcance detallado de los 4 casos. Casos 5 y 6 (prioridad West Palm Beach y Georgia).
- [ ] Reseñas: plataforma, fecha, enlace y permiso de cada testimonio. Solo entonces se muestran en las páginas locales.
- [ ] Perfiles de expertos (hasta 3) con nombre, rol y credenciales aprobadas. La sección de About se oculta fuera del modo revisión.
- [ ] Autor, revisor experto y fecha de los 3 artículos. “Mold Prevention in Humid Climates” es un borrador nuevo, escrito sin cifras ni afirmaciones técnicas específicas: necesita revisión profesional.

## Decisiones del cliente

- [ ] Textos de Privacy Policy y Terms & Conditions.
- [ ] Careers: puestos abiertos y canal de postulación (no se inventa un email ni beneficios).
- [ ] Thank You: solo tiene sentido si se aprueba un formulario de contacto. Hoy el sitio no tiene formularios; el contacto es por teléfono.
- [ ] Preferred Client Program y Events (marcados “To confirm”).
- [ ] Dominio final, configuración DNS y plan de redirecciones desde las URLs actuales.

## Afirmaciones que no se usan sin validación

“45-minute response”, “top-rated”, “almost 20 years”, “4,000 projects”, aprobaciones de agencias, garantías sanitarias y resultados de seguros.
