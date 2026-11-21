# Reseñas de Google en el sitio (21 nov 2026)

Las reseñas salen de la hoja **«WRG · Historial de reseñas»** (Claude Sheets), donde se registra cada reseña de Google y su respuesta. Según el cliente, todas son del perfil de **Florida**: no se muestran en la página de Georgia.

No se usa la API de Google Places ni un widget de terceros: el texto se copia a `src/data/reviews.ts` y se publica como HTML estático. No hay nota media ni marcado `schema.org` de reseñas (Google no muestra estrellas para reseñas que un negocio publica sobre sí mismo).

## Dónde aparecen

- `/reviews/`: las 10 reseñas seleccionadas, de la más reciente a la más antigua, con la etiqueta de que son una selección de Google.
- About: la de Mary M. (R-0009).
- Miami: la de David B. (R-0006), la única que menciona Miami (columna «Ubicación» = Miami).
- West Palm Beach y Smyrna: ninguna. La hoja no asocia reseñas a esas oficinas.

## Criterio de selección

Se publican las reseñas con su texto completo, en inglés y sobre los servicios de WRG. El texto va literal (con sus erratas), el nombre como nombre de pila e inicial del apellido, y la fecha como mes y año: en las reseñas recientes la hoja solo trae fechas relativas («hace 13 semanas»).

| ID | Cliente | Estrellas | Mes | Dónde |
|---|---|---|---|---|
| R-0021 | Sharon G. | 5 | nov 2026 | Reviews |
| R-0001 | R. G. | 4 | nov 2026 | Reviews |
| R-0015 | César G. | 5 | ago 2026 (aprox.) | Reviews |
| R-0006 | David B. | 5 | ene 2020 | Reviews, Miami |
| R-0007 | Anna B. | 5 | oct 2019 | Reviews |
| R-0008 | Vincent D. | 5 | ene 2019 | Reviews |
| R-0009 | Mary M. | 5 | mar 2017 | Reviews, About |
| R-0010 | Melissa F. | 5 | mar 2017 | Reviews |
| R-0011 | Vic B. | 5 | mar 2017 | Reviews |
| R-0005 | Anays C. | 5 | feb 2016 | Reviews |

No se publican:

- **Texto truncado** en la hoja («Ver la opinión completa»): R-0003, R-0004. Se pueden añadir si se copia el texto completo.
- **Muy cortas:** R-0002 («Great customer service»), R-0012.
- **En español:** R-0013 (el sitio está en inglés).
- **Solo estrellas, sin texto:** R-0014, R-0022.
- **Fuera de tema:** R-0018 (reseña de un restaurante).
- **Negativas:** R-0016, R-0017, R-0019, R-0020. La página dice que es una selección y enlazará al perfil completo, para no dar a entender que son todas las reseñas.

Los dos testimonios anteriores que no están en la hoja (Denissa D. y Rolando H.) se quitaron: no tienen plataforma ni fecha verificables.

## Cómo añadir una reseña

1. Registrarla en la hoja.
2. Añadir un objeto a `googleReviews` en `src/data/reviews.ts` (ID de la hoja, nombre e inicial, estrellas, texto literal, mes `AAAA-MM` y `office: 'miami'` solo si la reseña nombra Miami).
3. `npm run build && npm run check:links`.

## Perfil de Google

El enlace al perfil de Google Business de Florida (compartido por el cliente) está en `googleProfileUrl` (`src/data/reviews.ts`) y alimenta el botón «Read all reviews on Google» de `/reviews/`.
