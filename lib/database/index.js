const Model = require('./model')
const { database } = require('../../config')
const logger = require('../../lib/logger')

/**
 * BaseModel
 */
class BaseModel extends Model {
  constructor(moduleName = '', config) {
    super(moduleName, getConfig(config))
  }
}

/**
 * db utils
 * @param {string or config Object} moduleName 
 * @param {config} config 
 */
function db(moduleName, config) {
  return new BaseModel(moduleName, config)
}

/**
 * getConfig
 * @param {string or object} config 
 */
function getConfig(config) {
  let options = {}
  if (!config && database.default) {
    options = { ...database[database.default] }
  } else if (typeof config === 'string' && database[config]) {
    options = { ...database[config] }
  } else {
    options = { ...database }
  }
  const handle = require('./model-' + options.type)
  options = {
    ...options,
    ...config,
    handle,
  }
  if(options.logger === 'logger'){
    options.logger = (str)=>{
      logger.trace(str)
    }
  }
  return options
}

module.exports.db = db
module.exports.Model = BaseModel