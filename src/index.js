const config = require('../config')
const Router = require('koa-router')
const cache = require('../lib/cache')
const logger = require('../lib/logger')
const resp = require('./common/resp')
const validator = require('../lib/validator')
const { db, Model, model } = require('../lib/database')

// router
const router = new Router({
  prefix: config.system.prefix
})

// export what you need
module.exports = {
  config,
  router,
  cache,
  validator,
  resp,
  db,
  model,
  Model,
  logger,
}

// import router
require('./router/home')

