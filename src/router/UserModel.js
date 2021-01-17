const { Model } = require("..");

module.exports = class extends Model{
  get tableName(){
    return 'user.admin'
  }
}