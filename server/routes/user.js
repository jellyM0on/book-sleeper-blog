const express = require('express');
const router = express.Router(); 

const { loginUser, signupUser } = require('../controllers/userController')

//login 
router.post('/api/login', loginUser);

//signup 
router.post('/api/signup', signupUser)


module.exports = router; 