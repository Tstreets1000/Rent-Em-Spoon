const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')
const { apiController } = require('../../controllers/api/users')

// GET - Index /api/items
router.get('/', itemsCtrl.index, apiController.auth)

// GET - Show /api/items/:id
router.get('/:id', itemsCtrl.show, apiController.auth)

// PUT - Update /api/items/:id
router.put('/:id', itemsCtrl.update, apiController.auth)

// DELETE - Destroy /api/items/:id
router.delete('/:id', itemsCtrl.destroy, apiController.auth)

module.exports = router
