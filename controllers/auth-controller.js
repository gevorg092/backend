/**
 * Auth Controller file
 *
 * @package backend/controllers
 * @author Luis Andres <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * @licence
 * @version
 * @link
    * */

const authModel = require('../models/auth-model')

const code = require('../constants/code')
const message = require('../constants/message')

const authController = {
    login: login
}

/**
 * Function for login with email and password
 *
 * @author Luis Andres
 * @param email, password
 * return json
 * */
function login(req, res) {
    return new Promise((resolve, reject) => {
        let email = req.query.email
        let password = req.query.password
        let authData = {
            email: email,
            password: password
        }
        authModel.login(authData).then((data) => {
            res.send({
                'code': 200,
                'user': data,
                'message': '',
            })
        }).catch((err) => {
            if (err.message === message.INTERNAL_SERVER_ERROR)
                res.send({
                    'code': code.INTERNAL_SERVER_ERROR,
                    'user': {},
                    'message': message.INTERNAL_SERVER_ERROR
                })
                // reject({ code: code.INTERNAL_SERVER_ERROR, message: message.INTERNAL_SERVER_ERROR, user: {} })
            else if(err.message === message.INVALID_PASSWORD)
                res.send({
                    'code': code.INVALID_INPUT_PARAMS,
                    'user': {},
                    'message': message.INVALID_PASSWORD
                })
                // reject({ code: code.INVALID_INPUT_PARAMS, message: message.INVALID_PASSWORD, user: {} })
            else
                res.send({
                    'code': code.INVALID_INPUT_PARAMS,
                    'user': {},
                    'message': message.NO_EXIST_USER
                })
                // reject({ code: code.BAD_REQUEST, message: message.INTERNAL_SERVER_ERROR, user: {} })
        })
    })
}

module.exports = authController

