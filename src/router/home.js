const {router, validator,resp, logger} = require('../')

router.get('/api', async ctx => {
  ctx.body = resp.ok('Hello koa')
})