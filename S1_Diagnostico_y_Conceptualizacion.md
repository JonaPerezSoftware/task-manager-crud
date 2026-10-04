# SESIÓN 1 – Diagnóstico y conceptualización

## Actividad 1: Selección del Proyecto
Para este ejercicio, hemos seleccionado un proyecto de software de **Gestión de Tareas (Task Manager)**. Es un sistema CRUD (Crear, Leer, Actualizar, Eliminar) desarrollado en Node.js con Express, que permite a los usuarios administrar una lista de tareas pendientes.

## Actividad 2: Análisis del Proyecto

Al analizar un proyecto de este tipo, identificamos los siguientes elementos:

1. **Procesos de cambio evidenciados:**
   - Adición de nuevas funcionalidades (ej. agregar filtrado de tareas por estado).
   - Corrección de errores (ej. un bug al eliminar una tarea inexistente).
   - Actualización de dependencias de seguridad (Node modules).

2. **Gestión del control de versiones:**
   - Se utiliza **Git** como sistema de control de versiones distribuido.
   - Repositorio centralizado en **GitHub** para facilitar la colaboración.
   - Uso de un flujo de trabajo basado en ramas (Feature Branch Workflow) donde cada nueva característica o corrección se desarrolla en una rama aislada antes de integrarse a la rama principal (`main`).

3. **Herramientas usadas (o recomendadas) para construcción e integración:**
   - **Gestor de paquetes:** `npm` (Node Package Manager) para instalar dependencias y ejecutar scripts.
   - **Pruebas:** `Jest` o `Mocha` para pruebas unitarias.
   - **Integración Continua (CI):** **GitHub Actions** para automatizar las pruebas y la validación del código con cada *Pull Request*.
   - **Despliegue (CD):** Render, Vercel o Heroku para hospedar la aplicación.

---

## Producto: Tabla Resumen de Hallazgos y Conceptos Teóricos

| Concepto Teórico | Definición / Teoría | Hallazgos en el Proyecto Seleccionado |
| :--- | :--- | :--- |
| **Administración del cambio** | Proceso sistemático para solicitar, evaluar, aprobar e implementar cambios en el software de forma controlada, minimizando riesgos. | Los cambios se gestionan a través de *Issues* en GitHub, donde se documenta el problema o mejora antes de escribir el código. |
| **Gestión de versiones** | Práctica de rastrear y gestionar los cambios en el código fuente del software a lo largo del tiempo, permitiendo revertir a estados anteriores. | Se usa **Git**. Cada versión estable se etiqueta (ej. v1.0.0, v1.1.0). Se mantiene un historial claro de quién hizo qué cambio. |
| **Construcción del Sistema (Build)** | Proceso automatizado de compilar el código fuente, resolver dependencias y empaquetar el software en un artefacto ejecutable. | En Node.js no hay compilación tradicional, pero el *build* incluye instalar módulos (`npm install`) y posiblemente transpolar código o minificar. |
| **Gestión de entregas (Releases)** | Planificación, programación y control del paso del software a los entornos de prueba y producción. | Se utilizan **GitHub Releases** para empaquetar el código fuente junto con unas notas de la versión (*Changelog*) indicando qué hay de nuevo. |
