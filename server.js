const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const morgan = require('morgan')
const app = express()
const router = express.Router()
const compression = require('compression')

app.use(morgan('combined'))
app.use(compression({}))
app.use(bodyParser.json())
app.use(methodOverride())

mongoose.connect('mongodb://localhost:27017/test')

app.use('/', express.static(__dirname + '/client'));

restify.serve(router, mongoose.model('User', new mongoose.Schema({
  someData: {type: String},
  name: {type: String, required: true},
  age: {type: Number},
  gender: {type: String}
})))

app.use(router)

app.listen(8080, () => {
  console.log('Express server listening on port 8080')
})
