const express = require("express");
const router = express.Router();
const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  toggleTodo,
  deleteTodo,
  filterTodos
} = require("../controllers/todoController");

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/filter", filterTodos);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.patch("/:id/toggle", toggleTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
