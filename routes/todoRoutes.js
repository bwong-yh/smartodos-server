const express = require('express');
const { get_all_todos, create_todo, get_todo, update_todo, delete_todo } = require('../controllers/todoController');

const router = express.Router();

router.get('/', get_all_todos);
router.post('/', create_todo);
router.get('/:id', get_todo);
router.put('/:id', update_todo);
router.delete('/:id', delete_todo);

module.exports = router;