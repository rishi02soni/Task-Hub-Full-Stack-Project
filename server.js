const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let tasks = [
  { id: 1, text: 'Learn Node.js' },
  { id: 2, text: 'Build Full Stack Project' }
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = { id: Date.now(), text: req.body.text };
  tasks.push(newTask);
  res.json(newTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
