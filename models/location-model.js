/**
 * Location Model file
 *
 * @package backend/models
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * @licence
 * @version
 * @link
 * */

const db = require('../database/database')
const message = require('../constants/message')
const table = require('../constants/table')

const locationModel = {
    getAllCountries: getAllCountries,
    getAllStates: getAllStates,
    getAllCities: getAllCities,
}

/**
 * Function that get all countries.
 * */
function getAllCountries() {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM ' + table.COUNTRIES
        db.query(query, (err, res) => {
            if (err)
                reject({message: message.INTERNAL_SERVER_ERROR})
            else
                resolve(res)
        })
    })
}

/**
 * Function that get all states.
 * */
function getAllStates() {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM ' + table.STATES
        db.query(query, (err, res) => {
            if (err)
                reject({message: message.INTERNAL_SERVER_ERROR})
            else
                resolve(res)
        })
    })
}

/**
 * Function that get all cities.
 * */
function getAllCities() {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM ' + table.CITIES
        db.query(query, (err, res) => {
            if (err)
                reject({message: message.INTERNAL_SERVER_ERROR})
            else
                resolve(res)
        })
    })
}

module.exports = locationModel