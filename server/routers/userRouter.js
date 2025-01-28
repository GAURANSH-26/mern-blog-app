const express = require('express')
const { register, login, getUser, changeAvtar, editUser } = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/:id', getUser)
userRouter.get('/', getUser)
userRouter.post('/change-avtar', changeAvtar)
userRouter.patch('/edit-user', editUser)


module.exports = {userRouter}