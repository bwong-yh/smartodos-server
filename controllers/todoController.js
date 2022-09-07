const pool = require('../db');

const get_all_todos = async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todos;');

    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const create_todo = async (req, res) => {
  try {
    const { name, list_id } = req.body;
    const created = new Date();

    await pool.query(
      'INSERT INTO todos (name, list_id, created) VALUES ($1, $2, $3) RETURNING *',
      [name, list_id, created]
    );

    res.json('Todo Created.');
  } catch (err) {
    console.log(err.messsage);
  }
};

const get_todo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await pool.query('SELECT * FROM todos WHERE id = $1;', [id]);

    res.json(todo.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const update_todo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updated = new Date();

    await pool.query('UPDATE todos SET name = $1, updated = $2 WHERE id = $2 RETURNING *;', [
      name,
      updated,
      id
    ]);

    res.json('Todo Updated.');
  } catch (err) {
    console.log(err.message);
  }
};

const delete_todo = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query('DELETE FROM todos WHERE id = $1', [id]);

    res.json('Todo Deleted.');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  get_all_todos,
  create_todo,
  get_todo,
  update_todo,
  delete_todo,
};
