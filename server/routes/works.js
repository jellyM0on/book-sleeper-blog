const express = require('express');
const router = express.Router(); 

const {getWork, addWork, deleteWork, editWork} = require('../controllers/worksController')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.post('/', addWork)

router.patch('/:id', editWork)

router.delete('/:id', deleteWork)


module.exports = router; 