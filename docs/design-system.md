# Sistema de diseño · Human Current (revisión profesional)

Origen: el prototipo navegable aprobado en Claude Design (revisión del 3 nov 2026). Los estilos viven en `src/styles/global.css` (§1–§12) y `src/styles/pages.css`.

## Tokens (`:root` en global.css)

| Grupo | Valores |
|---|---|
| Marca | `--blue #16738f`, `--blue-d #0d5368`, `--red #cc3038` (solo llamada), hover `#ad252d` |
| Oscuros | `--abyss #082b38` (bloques y menú), `--deep #061f28` (footer), `--tide #4cc7d9` (línea sobre oscuro, nunca texto sobre claro) |
| Neutros | `--ink #12262e`, `--ink-2 #34474f`, `--muted #56646b` (6.12:1 sobre blanco), `--canvas #f6f8f9`, `--mist #eef3f5`, `--line #dbe3e7`, `--line-2 #c3d0d6` |
| Radios | 6 etiquetas · 8 botones y controles · 10 iconos · 12 tarjetas · 16 imágenes y destacados · 20 bloques insertados |
| Tipografía | Schibsted Grotesk (titulares) y Source Sans 3 (texto), autoalojadas con `@fontsource-variable` |
| Movimiento | `--t1 180ms`, `--t2 240ms`, `--tz 260ms` (tarjetas), `--tm 340ms` (menú), curva `cubic-bezier(.2,.7,.2,1)` |
| Retícula | `--max 1280px`, `--pad clamp(20px,4cqi,56px)`, `--cg 36px` (canal de la línea) |

Breakpoints con container queries sobre `.wrg-main`: ≥1024 desktop, 640–1023 tablet, <640 mobile.

## Reglas de composición

- **Sin eyebrows sobre los titulares.** La etiqueta de sección (`.eyebrow`) se escribe antes del titular en el HTML; en desktop el CSS la lleva en vertical al margen, junto a la línea; en tablet y mobile se oculta. En tarjetas, la categoría (`.topic`) va al pie o hace de cabecera.
- **Titulares de un solo tono** (la clase `.soft` heredada no cambia color ni peso).
- **Bloques planos:** sin halos ni degradados decorativos.
- **Botones rectangulares** con icono en línea. El rojo es exclusivo de Call now.
- **Sin palabras gigantes de fondo.**

## Línea de recorrido

Secciones con `data-cur` y los `span` decorativos `.cur` (`.start` / `.end`), `.cur-node` y `.cur-node.final`. En Locations, `.route` + `.o-node` dentro de `.offices`. El motor (`src/scripts/site.ts`) calcula `--cur` con una línea de lectura al 62 % del viewport y marca `data-reached` / `data-done`. Se oculta por debajo de 1024 px. Con `prefers-reduced-motion` se muestra completa y estática.

## Tarjetas que crecen

`.svc-card` (Home) escala a 1.035 y `.tile` (Services) a 1.03 (1.015 anchas o destacadas) con hover en dispositivos con puntero y con foco de teclado. Gaps de 24 / 20 / 16 px: más del doble del crecimiento por lado, así que nunca se tocan. Sin escala con movimiento reducido.

## Accesibilidad

Objetivo WCAG 2.2 AA: foco visible de 2 px, objetivos táctiles ≥ 44 px, menú modal con trampa de foco, Escape, `inert` en el fondo y retorno del foco al botón Menu; contenido completo sin JavaScript; parallax solo en imágenes.
