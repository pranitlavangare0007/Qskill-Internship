# ✅ Todo App API

A simple and production-style REST API for managing daily tasks using  
**Node.js, Express, and MongoDB**.

This project implements full CRUD operations and follows MVC architecture.

---

## 🚀 Features

- Create a new todo  
- View all todos  
- View a single todo  
- Update todo title or status  
- Toggle completed state  
- Delete a todo  
- Filter completed / pending todos  

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Dotenv  
- Nodemon  

---


---

## ⚙️ Installation & Setup

### 1. Clone repository
```bash
git clone https://github.com/pranitlavangare0007/Qskill-Internship.git
cd todo-app-quskill

2. Install dependencies
npm install

3. Create .env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoapp

4. Run server
npm run dev


Server will start at:

http://localhost:5000

🔗 API Endpoints

Base URL:

http://localhost:5000/api/todos

1. Create Todo

POST /api/todos

{
  "title": "Learn Node.js"
}

2. Get All Todos

GET /api/todos

3. Get Single Todo

GET /api/todos/:id

4. Update Todo

PUT /api/todos/:id

{
  "title": "Learn Express",
  "completed": true
}

5. Toggle Completed

PATCH /api/todos/:id/toggle

6. Delete Todo

DELETE /api/todos/:id

7. Filter Todos

Completed:

GET /api/todos/filter?status=completed


Pending:

GET /api/todos/filter?status=pending

📌 Example Response
{
  "_id": "6980201aaef1c7af101d2af7",
  "title": "Learn Node.js",
  "completed": false,
  "createdAt": "2026-02-02T03:55:06.870Z",
  "updatedAt": "2026-02-02T03:55:06.870Z"
}


