/**
 * common error handle middleware
 * priority is top
 */
const logger = require('../../lib/logger')
const resp = require('../common/resp')

// errors and logger
function error() {
  return async (ctx, next) => {
    const start = Date.now()
    try {
      await next()
      logger.info('[%s] - %s - Time: %dms', ctx.method, ctx.path, Date.now() - start)
    } catch (err) {
      ctx.status = 500
      ctx.body = resp.fail('Server Error', 999)
      logger.error('[%s] - %s - [%s]', ctx.method, ctx.path, err)
    }
  }
}
module.exports = error