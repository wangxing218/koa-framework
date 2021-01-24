const {router, validator,resp,db, logger} = require('../')

router.get('/api', async ctx => {
  const info = await db('user').count()
  ctx.body = resp.ok(info)
})