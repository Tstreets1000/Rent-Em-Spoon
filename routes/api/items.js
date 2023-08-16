const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET - Index /api/items
router.get('/', itemsCtrl.index);

// GET - Show /api/items/:id
router.get('/:id', itemsCtrl.show);

// PUT - Update /api/items/:id
router.put('/:id', itemsCtrl.update)

// DELETE - Destroy /api/items/:id
router.delete('/:id')

module.exports = router;
