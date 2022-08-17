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

    const newTodo = await pool.query(
      "INSERT INTO todos (name, created_at) VALUES ($1, $2) RETURNING *",
      [name, created_at]
    );

    res.send(newTodo.rows);
  } catch (err) {
    console.log(err.messsage);
  }
});

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos;");
    res.send(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// get a todo

// update a todo

// delete a todo