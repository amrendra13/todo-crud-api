const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todo');

router.route("/").get(getTodos).post(createTodo);
router.route("/:todoID").put(updateTodo).delete(deleteTodo);
module.exports = router;