const express = require('express');

// database
const pool = require('./db');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3003, () => console.log('listening on port 3000'));

// routes //

// create todo
app.post('/todos', async (req, res) => {
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
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos;");

    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await pool.query("SELECT * FROM todos WHERE id = $1;", [id]);

    res.json(todo.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo
app.put('/todos/:id', async (req, res) => {
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
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM todos WHERE id = $1", [id]);

    res.json("Todo Deleted.");
  } catch (err) {
    console.log(err.message);
  }
});