/**
 * Auth Model file
 *
 * @package backend/models
 * @author Luis Andres <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * @licence
 * @version
 * @link
 * */

const bcrypt = require('bcrypt')
const db = require('../database/database')
const message = require('../constants/message')
const table = require('../constants/table')

const authModel = {
    getAllUsers: getAllUsers,
    login: login,
}

/**
 * Function that get data for all users.
 *
 * @author Luis Andres <ion.podolean22@gmail.com>
 * @param none
 * @return json
 * */
function getAllUsers() {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM ' + table.USERS
        db.query(query, (err, res) => {
            if (err)
                reject({message: message.INTERNAL_SERVER_ERROR})
            else
                resolve(res)
        })
    })
}

/**
 * Function for login with email and password
 * @author Luis Andres
 * @param email, password
 * return json
 * */
function login(authData) {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM ' + table.USERS + ' WHERE email = "' + authData.email + '"'
        db.query(query, (err, rows) => {
            if (err)
                reject({message: message.INTERNAL_SERVER_ERROR})
            else if(rows.length === 0)
                reject({message: message.NO_EXIST_USER})
            else {
                bcrypt.compare(authData.password, rows[0].password, function(err, res) {
                    if (res)
                        resolve(rows[0])
                    else
                        reject({message: message.INVALID_PASSWORD})
                });
            }
        })
    })
}

module.exports = authModel