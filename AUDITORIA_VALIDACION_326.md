# Auditoría del banco por especialidad (19/11/2026)

## Alcance
Banco: **326 preguntas en 22 áreas**; bloque adicional: **827 preguntas por año**, que requiere auditoría bibliográfica independiente.

## Verificación automatizada
- 326/326 enunciados disponibles en el bloque por especialidad.
- 326/326 entradas de respuesta presentes.
- 0 respuestas con letra fuera de las opciones disponibles.
- Esta prueba estructural **no** verifica por sí sola la exactitud médica de las respuestas.

## Estado de revisión bibliográfica del bloque de 326
- **37** marcadas `validado` en el archivo de explicaciones tras la corrección de vascular periférico 1–3.
- **21** identificadas como discutibles o con observaciones de ambigüedad/error, y pendientes de resolución definitiva.
- **267** mantienen explicación genérica provisional y requieren revisión científica individual.
- **1** explicación individualizada sin clasificación inequívoca por los criterios de esta auditoría; revisar manualmente.

*Estas categorías describen etiquetas y textos que aparecen en el código y no constituyen certificación clínica independiente de los 37 ítems.*

## Cambios de esta tanda
1. `explicaciones.js`: actualización con justificación por alternativa y bibliografía en **Vascular Periférico preguntas 1, 2 y 3**; fuentes ACC/AHA 2024, WSES 2022, CIRSE 2025.
2. `app.js`: distinción visual entre **respuesta pendiente de validación científica** y **pregunta ambigua o clave discutible**. Ambas se mantienen sin puntuación definitiva hasta su verificación.

## Regla de cierre
No declarar la validación de las 326 hasta revisar pregunta por pregunta: enunciado, opciones, respuesta, distractores y fuente primaria/guía vigente; marcar ítems desactualizados, incompletos o con más de una respuesta defendible. Validar además funcionamiento final del navegador y persistencia de puntuaciones.

## Segunda tanda: Farmacología y Enfermería (19/11/2026)
- Revisadas las ocho preguntas del área 20, con justificación por alternativa y bibliografía rastreable.
- 6 marcadas como validadas (1, 2, 3, 5, 6 y 7); la nº 7 explica la coexistencia de dos mecanismos de amiodarona.
- 2 marcadas como discutibles y sin puntuación definitiva: nº 4 (cálculo de vancomicina correcto, pero condiciones de infusión potencialmente inseguras) y nº 8 (faltan datos clínicos para elegir IECA/ARA-II como única primera línea).
- Commit de preguntas: `408d7ae08afe5bb9dd356f11297c9a617d975d83`.

## Tercera tanda: Histología y Dermatología (19/11/2026)
- Histología/Anatomía Patológica: 7 preguntas actualizadas (1–7), con 7 claves marcadas como validadas, explicaciones y distractores.
- Dermatología: 6 preguntas actualizadas (1–6); 5 marcadas como validadas y la nº 6 como discutible debido a una descripción clínica insuficiente/heterogénea de alopecia y adenopatías.
- Ictericia neonatal: se aclara la urgencia de descartar atresia biliar y la diferencia entre colestasis y etiología definitiva.
- Recuento de marcaciones: 37 validadas, 21 discutibles, 267 provisionales y 1 ítem restante con clasificación manual pendiente.
- Commits: histología `3f4dfa4`, dermatología `76073e6`.
