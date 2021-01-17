const Model = require('./model')
const Mysql = require('./model-mysql')

const { database } = require('../../config')

const db = new Model({
  ...database,
  handle: Mysql,
})

function model(ModelClass){
  return new ModelClass(db.config)
}

module.exports.db = db
module.exports.model = model
module.exports.Model = Model