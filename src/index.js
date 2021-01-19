const Router = require('koa-router')
const config = require('../config')
// const cache = require('../lib/cache')
const logger = require('../lib/logger')
const resp = require('./common/resp')
const validator = require('../lib/validator')
// const { db, Model } = require('../lib/database')
const helper = require('../lib/helper')

// router
const router = new Router({
  prefix: config.system.prefix
})


// export what you need
module.exports = {
  config,
  router,
  // cache,
  helper,
  validator,
  resp,
  // db,
  // Model,
  logger,
}

// import router
require('./router/home')

