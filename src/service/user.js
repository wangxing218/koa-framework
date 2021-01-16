const db = require('../../lib/database')


function getInfo(id){
  return db.table('user').find(id)
}

module.exports = {
  getInfo,
}