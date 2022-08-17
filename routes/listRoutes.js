const express = require('express');

const router = express.Router();

const pool = require('../db');

// create list
router.post('/', async (req, res) => {
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
});

// get all lists
router.get('/', async (req, res) => {
  try {
    const allLists = await pool.query("SELECT * FROM lists;");

    res.json(allLists.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// get a list
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const list = await pool.query("SELECT * FROM lists WHERE id = $1;", [id]);

    res.json(list.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// update a list
router.put('/:id', async (req, res) => {
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
});

// delete a list
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM lists WHERE id = $1", [id]);

    res.json("List Deleted.");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;