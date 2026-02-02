# 📚 Book Catalog API

A production-ready REST API for managing a library’s book catalog using **Node.js, Express, and MongoDB**.  
It supports full CRUD operations, searching, and pagination.

---

## 🚀 Features

- Add new books  
- View all books  
- View a single book  
- Update book details  
- Delete books  
- Search by title or author  
- Pagination support  

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
cd book-catalog

npm install

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bookcatalog

npm run dev

🔗 API Endpoints

Base URL:

http://localhost:5000/api/books

1. Create Book

POST /api/books

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "genre": "Programming",
  "publicationYear": 2008,
  "availability": true
}

2. Get All Books

GET /api/books

3. Get Single Book

GET /api/books/:id

4. Update Book

PUT /api/books/:id

{
  "title": "Clean Code (Updated)",
  "availability": false
}

5. Delete Book

DELETE /api/books/:id

6. Search Books

GET

/api/books/search?query=clean


Searches by:

Title

Author

7. Pagination

GET

/api/books?page=2&limit=5

📌 Example Response
{
  "success": true,
  "total": 10,
  "page": 1,
  "pages": 2,
  "data": [
    {
      "_id": "...",
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "genre": "Programming",
      "publicationYear": 2008,
      "availability": true
    }
  ]
}


