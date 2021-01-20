/**
 * Home Controller file
 *
 * @package backend/controllers
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * @licence
 * @version
 * @link
 * */

const authModel = require('../models/auth-model')
const productModel = require('../models/product-model')
const locationModel = require('../models/location-model')

const code = require('../constants/code')
const message = require('../constants/message')

const homeController = {
    index: index
}

/**
 * Function that get data for home page.
 *
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @param none
 * @return json
 * */
function index(req, res) {
    let latestProducts = new Promise((resolve, reject) => {
        productModel.getLatestProducts().then((data) => {
            resolve(data)
        }).catch((err) => {
            if (err.message === message.INTERNAL_SERVER_ERROR)
                reject({ code: code.INTERNAL_SERVER_ERROR, message: message.INTERNAL_SERVER_ERROR, latestProducts: {} })
            else
                reject({ code: code.BAD_REQUEST, message: message.INTERNAL_SERVER_ERROR, latestProducts: {} })
        })
    })

    let allUsers = new Promise((resolve, reject) => {
        authModel.getAllUsers().then((data) => {
            resolve(data)
        }).catch((err) => {
            if (err.message === message.INTERNAL_SERVER_ERROR)
                reject({ code: code.INTERNAL_SERVER_ERROR, message: message.INTERNAL_SERVER_ERROR, latestProducts: {} })
            else
                reject({ code: code.BAD_REQUEST, message: message.INTERNAL_SERVER_ERROR, latestProducts: {} })
        })
    })

    let allCountries = new Promise((resolve, reject) => {
        locationModel.getAllCountries().then((data) => {
            resolve(data)
        }).catch((err) => {
            if (err.message === message.INTERNAL_SERVER_ERROR)
                reject({ code: code.INTERNAL_SERVER_ERROR, message: message.INTERNAL_SERVER_ERROR, latestProducts: {} })
            else
                reject({ code: code.BAD_REQUEST, message: message.INTERNAL_SERVER_ERROR, latestProducts: {} })
        })
    })

    Promise.all([latestProducts, allUsers, allCountries]).then((data) =>
        res.send({
            'code': 200,
            'message': '',
            'latestProducts': data[0],
            'allUsers': data[1],
            'allCountries': data[2],
        })
    ).catch()
}

module.exports = homeController