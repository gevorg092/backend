/**
 * Product Model file
 *
 * @package backend/models
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * @licence
 * @version
 * @link
 * */
const db = require('../database/database')
const table = require('../constants/table')
const constants = require('../constants')
const message = require('../constants/message')

const productModel = {
    getLatestProducts: getLatestProducts,
}

/**
 * Function that get data for latest products.
 *
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @param none
 * @return json
 * */

function getLatestProducts() {
    return new Promise((resolve, reject) => {
        let query = 'SELECT products.id, products.title, products.slug, products.product_type, products.listing_type, products.category_id,  products.price, products.currency, products.discount_rate, products.user_id, products.is_promoted, products.rating, products.hit, products.is_free_product, products.promote_end_date, products.description, products.product_condition, products.created_at, images.image_default AS image_default FROM '
        query += table.PRODUCTS
        query += ' INNER JOIN '
        query += table.IMAGES
        query += ' ON '
        query += table.PRODUCTS
        query += '.id = '
        query += table.IMAGES
        query += '.product_id ORDER BY created_at DESC LIMIT '
        query += constants.LATEST_PRODUCT_COUNT
        db.query(query, (err, res) => {
            if (err) {
                reject({ message: message.INTERNAL_SERVER_ERROR })
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = productModel