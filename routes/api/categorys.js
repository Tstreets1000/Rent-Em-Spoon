const express = require('express');
const router = express.Router();
const categoryCtrl = require('../../controllers/api/categorys');


// INDEX /api/categorys
router.get('/', categoryCtrl.allCategorys, categoryCtrl.jsonCategorys)

// DELETE /api/category/:id
router.delete('/:id', categoryCtrl.destroy, categoryCtrl.jsonCategory)

// UPDATE /api/category/:id
router.put('/:id', categoryCtrl.update, categoryCtrl.jsonCategory)

// CREATE /api/categorys/create
router.post('/', categoryCtrl.create, categoryCtrl.jsonCategory)

// SHOW /api/categorys/:id
router.get('/:id', categoryCtrl.show, categoryCtrl.jsonCategory)




module.exports = router;