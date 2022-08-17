const pool = require('../db');

const get_all_lists = async (req, res) => {
  try {
    const allLists = await pool.query("SELECT * FROM lists;");

    res.json(allLists.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const create_list = async (req, res) => {
  try {
    const { name } = req.body;
    const created_at = new Date();

    await pool.query(
      "INSERT INTO lists (name, created_at) VALUES ($1, $2) RETURNING *",
      [name, created_at]
    );

    res.json("List Created.");
  } catch (err) {
    console.log(err.messsage);
  }
};

const get_list = async (req, res) => {
  try {
    const { id } = req.params;

    const list = await pool.query("SELECT * FROM lists WHERE id = $1;", [id]);

    res.json(list.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const update_list = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await pool.query(
      "UPDATE lists SET name = $1 WHERE id = $2 RETURNING *;",
      [name, id]);

    res.json("List Updated.");
  } catch (err) {
    console.log(err.message);
  }
};

const delete_list = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM lists WHERE id = $1", [id]);

    res.json("List Deleted.");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { get_all_lists, create_list, get_list, update_list, delete_list };