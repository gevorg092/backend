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

const db = require('../database/database')
const message = require('../constants/message')
const table = require('../constants/table')

const authModel = {
    getAllUsers: getAllUsers,
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

module.exports = authModel