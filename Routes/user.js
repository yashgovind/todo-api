const express = require("express");
const router = express.Router();

const { createTodos,getAllTodos,getSingleTodo, updateTodo, deleteSingleTodo, deleteAllTodo} = require("../Controllers/user");

//API DESIGN .
router.post("/", createTodos);

router.get("/",getAllTodos);

router.get("/:id",getSingleTodo);

router.put("/:id",updateTodo)

router.delete("/:id", deleteSingleTodo);

router.delete("/", deleteAllTodo);

module.exports = router;