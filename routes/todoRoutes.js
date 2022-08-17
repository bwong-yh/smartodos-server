const express = require('express');

const router = express.Router();

const pool = require('../db');

// create todo
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const created_at = new Date();

    await pool.query(
      "INSERT INTO todos (name, created_at) VALUES ($1, $2) RETURNING *",
      [name, created_at]
    );

    res.json("Todo Created.");
  } catch (err) {
    console.log(err.messsage);
  }
});

// get all todos
router.get('/', async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos;");

    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// get a todo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await pool.query("SELECT * FROM todos WHERE id = $1;", [id]);

    res.json(todo.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await pool.query(
      "UPDATE todos SET name = $1 WHERE id = $2 RETURNING *;",
      [name, id]);

    res.json("Todo Updated.");
  } catch (err) {
    console.log(err.message);
  }
});

// delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM todos WHERE id = $1", [id]);

    res.json("Todo Deleted.");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;