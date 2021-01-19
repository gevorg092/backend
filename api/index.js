/**
 * Index API File
 *
 * @package backend/api
 * @author Luis Andres <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const apiRouter = express.Router()

const homeController = require('../controllers/home-controller')
const authController = require('../controllers/auth-controller')

apiRouter.get('/', homeController.index)
apiRouter.post('/login', authController.login)

module.exports = apiRouter