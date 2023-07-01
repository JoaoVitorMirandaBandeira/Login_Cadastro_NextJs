const express = require('express')
const routes = express.Router()
const userController = require('../controller/UserController')

routes.post('/api/v1/register',userController.store)
routes.post('/api/v1/login',userController.index)

module.exports = routes