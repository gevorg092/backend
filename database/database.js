/**
 * Database Connect File
 *
 * @package backend/database
 * @author Luis Andres <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

const mysql = require('mysql')
const dbConfig = require('../config/database-config')

const connection = mysql.createConnection(dbConfig)

module.exports = connection