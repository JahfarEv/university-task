const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router();

userRouter.post('/register', userController.registration)
.post('/login',userController.login)
.get('/find', userController.users)

module.exports = userRouter