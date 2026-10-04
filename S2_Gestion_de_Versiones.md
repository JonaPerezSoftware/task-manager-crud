# SESIÓN 2 – Gestión de versiones y control de cambios

## Actividad 1: Simulación del control de versiones
A continuación se describen los pasos y comandos ejecutados para simular el control de versiones del proyecto.

### 1. Inicialización del Repositorio
```bash
# Inicializamos el repositorio local en la carpeta del proyecto
git init

# Añadimos los archivos iniciales (como el package.json y un index.js)
git add .
git commit -m "chore: inicializar proyecto y estructura base"

# Conectamos con el repositorio remoto en GitHub
git remote add origin https://github.com/usuario/task-manager-crud.git
git push -u origin main
```

### 2. Creación de ramas por rol o funcionalidad
Siguiendo un flujo de trabajo (Feature Branch), creamos ramas separadas para nuevas características o corrección de errores.

```bash
# Rama para una nueva funcionalidad (ej. crear endpoint para agregar tareas)
git checkout -b feature/add-task-endpoint

# Rama para corrección de un error urgente (ej. bug en la validación)
git checkout -b hotfix/fix-validation-error
```

### 3. Simulación de cambios y commits
Se realizan cambios en el código (simulados) y se guardan con *commits*.

```bash
# Estando en la rama feature/add-task-endpoint, modificamos index.js
git add index.js
git commit -m "feat: agregar endpoint POST /tasks para crear tareas"

# Subimos la rama al repositorio remoto
git push origin feature/add-task-endpoint
```

### 4. Pull Requests e Historial
En GitHub, se abre un **Pull Request (PR)** desde `feature/add-task-endpoint` hacia `main`. 
Se revisa el código, se aprueba y se hace *merge*.

---

## Actividad 2: Políticas de Commits y Comandos Utilizados

### Políticas de Commits Utilizadas (Conventional Commits)
Se implementó una política basada en Conventional Commits para asegurar un historial claro y fácil de leer:

*   **feat:** Para nuevas características (ej. `feat: agregar vista de detalles`).
*   **fix:** Para corrección de errores (ej. `fix: resolver error 404 en ruta`).
*   **chore:** Para tareas de mantenimiento, actualización de paquetes (ej. `chore: actualizar dependencias`).
*   **docs:** Para cambios en la documentación (ej. `docs: actualizar README`).

### Resumen de comandos Git utilizados:
1. `git init`: Inicializa un nuevo repositorio de Git local.
2. `git add <archivo>` o `git add .`: Prepara los cambios para ser incluidos en el próximo commit (pasa a *staging*).
3. `git commit -m "mensaje"`: Guarda los cambios preparados en el historial local con un mensaje descriptivo.
4. `git checkout -b <nombre-rama>`: Crea una nueva rama y cambia a ella inmediatamente.
5. `git push origin <rama>`: Sube los cambios locales de la rama especificada al repositorio remoto en GitHub.
6. `git pull origin main`: Descarga e integra los cambios más recientes del repositorio remoto a la rama local actual.

*(Evidencias simuladas de GitHub: En un entorno real, aquí se anexarían capturas de pantalla de las pestañas "Pull Requests", "Branches" y el historial de commits).*
