const express = require("express")
const router = express.Router()
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController")



// get app to-dos
router.get("/", getAllTodos)

// create a new to-do
router.post("/", createTodo)

// update to-do
router.put("/:id", updateTodo);

// delete a to-do
router.delete("/:id", deleteTodo)

module.exports = router

