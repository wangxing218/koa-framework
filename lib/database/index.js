const Model = require('./model')
const Mysql = require('./model-mysql')

const { database } = require('../../config')

const db = new Model({
  ...database,
  handle: Mysql,
})

module.exports = db
module.exports.Model = Model