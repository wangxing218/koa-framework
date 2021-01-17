/**
 * common error handle middleware
 * priority is top
 */
const logger = require('../../lib/logger')

function error() {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = 500
      ctx.body = { code: 999, msg: 'Server Error' }
      logger.error(err)
    }
  }
}
module.exports = error