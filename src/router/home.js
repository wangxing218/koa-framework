const {router, db, validator,config, model} = require('../')
const resp = require('../common/resp')
const logger = require('../../lib/logger')

router.get('/db', async ctx => {
  ctx.session.user = '张三'
  const info = ctx.session
  logger.info('这个不错啊')
  ctx.body = resp.ok(info)
})

router.get('/view', async ctx=>{
  await ctx.render('view', {
    _ctx: ctx,
    title: '这是view'
  })
})

router.get('/1414', async (ctx)=>{
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
      msg: config.redis
    }
  })
