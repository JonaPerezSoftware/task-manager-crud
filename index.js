const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

// Listar todas las tareas (GET /tasks)
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Crear una nueva tarea (POST /tasks)
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'El título es requerido' });
    }
    const newTask = { id: nextId++, title, description, status: 'pendiente' };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Actualizar una tarea (PUT /tasks/:id)
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    
    const { title, description, status } = req.body;
    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    
    res.json(task);
});

// Eliminar una tarea (DELETE /tasks/:id)
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ error: 'Tarea no encontrada' });
    
    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Task Manager API escuchando en http://localhost:${port}`);
});
