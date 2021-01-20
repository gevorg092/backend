/**
 * Init Server File
 *
 * @package backend
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

const express = require('express')
const app = express()
const api = require('./api')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const http = require('http')

http.createServer(app).listen(PORT)

app.use('/api', api)

module.exports = app