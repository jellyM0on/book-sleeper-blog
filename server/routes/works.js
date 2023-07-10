const express = require('express');
const router = express.Router(); 

const {getWork, addWork, deleteWork, editWork} = require('../controllers/worksController')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.post('/api/add', addWork)

router.patch('/api/:id', editWork)

router.delete('/api/:id', deleteWork)


module.exports = router; 