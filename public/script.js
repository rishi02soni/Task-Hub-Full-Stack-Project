const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

async function loadTasks() {
  const res = await fetch('/api/tasks');
  const data = await res.json();

  taskList.innerHTML = data.map(task => ` 
    <li>
      ${task.text}
      <button onclick="deleteTask(${task.id})">Delete</button>
    </li>
  `).join('');
}

async function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  taskInput.value = '';
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  loadTasks();
}

loadTasks();
