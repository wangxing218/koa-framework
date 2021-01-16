/**
 * framework entry
 */
const Koa = require('koa')
const static = require('koa-static')
const body = require('koa-body')
const session = require('koa-session')
const chalk = require('chalk')
const router = require('./src/router')
const config = require('./config')
const app = new Koa()


// body
app.use(body())

// session
app.use(session({
  ...config.session,
  store: config.session.store === 'redis' ? new require('./lib/cache/store')({
    prefix: config.session.prefix,
    expire: config.session.expire,
  }) : null
}, app))

// middleware
app.use(async (ctx, next) => {
  try {
    await next()
    console.log('ctx.body', ctx.body)
    if(ctx.body.code === 504)
    ctx.body = '验证失败'
  } catch (err) {
    ctx.status = 500
    ctx.body = { code: 999, msg: 'Server Error' }
    console.log('koa middle',err)
  }
})

// router
app.use(router.routes())

// static
app.use(static('public'))

// listen
const server = app.listen(config.system.port || 80, config.system.host || '127.0.0.1')
server.on('listening', () => {
  let address = server.address().address
  let port = server.address().port
  address = address === '0.0.0.0' ? '127.0.0.1' : address
  port = port === 80 ? '' : ':' + port
  const link = chalk.green(`http://${address}${port}`)
  console.log(`Server is running at: 
  > ${app.env} : ${link}
  `)
})
