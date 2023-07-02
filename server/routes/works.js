const express = require('express');
const router = express.Router(); 
const {getWork, addWork, deleteWork, editWork} = require('../controllers/worksController')


// router.get('/', async(req, res) => {
//     // let collection = await db.collection('works');
//     // let results = await collection.find({});

//     // res.send(results).status(200); 
// }) 

router.post('/', addWork)

router.patch('/:id', editWork)

router.delete('/:id', deleteWork)


module.exports = router; 