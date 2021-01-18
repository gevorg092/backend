/**
 * Database Config File
 *
 * @package backend/config
 * @author Luis Andres <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

const dotenv = require('dotenv')
dotenv.config()

const dbConfig = {
    connectionLimit: 30,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
    debug: false,
    multipleStatements: true,
    dateStrings: true
}

module.exports = dbConfig