const {db} = require('../')


function getInfo(id){
  return db.table('user').find(id)
}

module.exports = {
  getInfo,
}