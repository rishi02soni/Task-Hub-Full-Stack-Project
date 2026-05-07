# TaskHub - Full Stack Task Manager

TaskHub is a full stack task manager web application built with **HTML, CSS, JavaScript, Node.js, and Express.js**.

Users can add and delete tasks using a clean and responsive interface.

---

## Features

- Add new tasks
- Delete existing tasks
- Fast and responsive UI
- REST API backend
- Beginner-friendly project structure

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

---

## Folder Structure

```
TaskHub/
│── package.json
│── server.js
│── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
```
---
## Installation
### 1. Clone Repository
```
git clone https://github.com/yourusername/taskhub.git
cd taskhub
```

### 2. Install Dependencies
```
npm install
```

### 3. Start Server
```
npm start
```

### 4. Open in Browser
```
http://localhost:3000
```

## API Endpoints
### Get All Tasks
GET /api/tasks

### Add Task
POST /api/tasks
Content-Type: application/json
```
{
  "text": "Learn Node.js"
}
```
### Delete Task
DELETE /api/tasks/:id

## Screenshots
Add screenshots here after running the project.

## Future Improvements
- Edit task feature
- Complete task status
- MongoDB database
- Login/Register system
- Dark mode UI

## Author
Rishi Soni - rishi02soni

## License
Free to use for learning and portfolio purposes.
```
