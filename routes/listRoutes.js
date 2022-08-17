const express = require('express');
const { get_all_lists, create_list, get_list, update_list, delete_list } = require('../controllers/listController');

const router = express.Router();

router.get('/', get_all_lists);
router.post('/', create_list);
router.get('/:id', get_list);
router.put('/:id', update_list);
router.delete('/:id', delete_list);

module.exports = router;