# SESIÓN 4 – Entrega simulada del producto

## Actividad 1: Simulación de Entrega (Release)

Para esta actividad simulamos la creación de una versión lista para producción, empaquetada como una *Release* de GitHub.

**Datos de la Entrega (Release):**
- **Nombre de versión:** `v1.0.0`
- **Título de Release:** `Lanzamiento Inicial - Task Manager CRUD 🚀`
- **Artefactos:** Se adjunta simuladamente un archivo `task-manager-v1.0.0.zip` que contiene el código fuente para ser desplegado en el servidor de producción.

### Changelog (Notas de la Versión)

```markdown
# Changelog

## [v1.0.0] - 2026-10-04
### Añadido (Added)
- Endpoint POST `/tasks` para crear nuevas tareas.
- Endpoint GET `/tasks` para listar todas las tareas (incluye filtrado por estado `completada` o `pendiente`).
- Endpoint PUT `/tasks/:id` para actualizar datos o estado de una tarea.
- Endpoint DELETE `/tasks/:id` para eliminar una tarea.
- Base de datos en memoria para almacenamiento temporal.
- Pipeline de Integración Continua (CI) básico con GitHub Actions.

### Arreglado (Fixed)
- Error de validación al intentar guardar una tarea sin título (Hotfix: `fix-validation-error`).
- Código de estado 500 al buscar un ID inexistente en DELETE ahora devuelve correctamente 404 Not Found.
```

---

## Actividad 2: Informe Final Grupal

### 1. Análisis del control de cambios y versiones
El uso de un sistema de control de versiones distribuido como Git demostró ser fundamental para el trabajo colaborativo. Adoptar políticas como **Conventional Commits** y el flujo de trabajo de **Feature Branches** permitió mantener un historial semántico y ordenado. Cada miembro del equipo pudo aislar el desarrollo de nuevas características y sólo se integró código a `main` después de ser revisado y aprobado mediante *Pull Requests*. Los posibles conflictos se detectaron de forma temprana y se resolvieron sin afectar el código en producción.

### 2. Integración Continua (CI)
Implementar el pipeline en **GitHub Actions** transformó un proceso manual propenso a errores humanos en una verificación automatizada. Logramos asegurar que en cada *commit* o *Pull Request*, el código pasara por el linter y superara los tests automatizados.
*   **Capturas simuladas (Evidencia):** El proceso arrojaría como resultado validaciones exitosas (*checks passed*) en los Pull Requests de GitHub, indicando luz verde para proceder con el merge.

### 3. Evidencia de Entregables
El producto principal, además del código, es la *Release* empaquetada junto al *Changelog* estructurado. La gestión de entregas permite a los *stakeholders* y a los equipos de operaciones (*Ops*) saber exactamente qué funcionalidades y correcciones se incluyen en cada versión desplegada, garantizando trazabilidad y facilitando el proceso de "Rollback" si ocurre un error crítico en producción.

### 4. Lecciones aprendidas del trabajo colaborativo
- **Automatización temprana:** Configurar el pipeline CI desde el primer día ahorra horas de revisión manual.
- **Comunicación clara:** Escribir buenos mensajes de commit y documentar el propósito de los *Pull Requests* evita malos entendidos entre desarrolladores.
- **Trazabilidad de errores:** La asignación de *Issues* conectada a *Branches* permite tener todo el contexto del por qué se realizó un cambio de código específico (Administración del Cambio).
- **Entregas incrementales:** Es mejor integrar cambios pequeños y constantes de forma continua que intentar fusionar (*merge*) meses de trabajo en un solo día.
