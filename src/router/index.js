const Router = require('koa-router')
const router = new Router()
module.exports = router


const { getInfo } = require('../service/user')
const validator = require('../../lib/validator')

router.get('/db', async ctx => {
  const info = await getInfo(ctx.query.id)
  ctx.body = { code: 'get', info: info }
})

router.get('/v',
  // 验证
  validator({
    id: {
      required: true,
      mobile: 'zh-CN'
    }
  }),
  // 执行
  async ctx => {
    ctx.body = {
      code: 0,
      msg: 'v'
    }
  })
