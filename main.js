/**
 * framework entry
 */
const Koa = require('koa')
const static = require('koa-static')
const body = require('koa-body')
const session = require('koa-session')
const nunjucks = require('koa-nunjucks-2')
const helmet = require('koa-helmet')
const { router } = require('./src')
const error = require('./src/middleware/error')
const config = require('./config')
const app = new Koa()

// helmet
app.use(helmet())

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
app.use(error())

// view engine
app.use(nunjucks({
  ext: 'html',
  path: 'src/view'
}))

// router
app.use(router.routes())

// static
app.use(static('public'))

// listen
const server = app.listen(config.system.port || 80, config.system.host || '127.0.0.1')
server.on('listening', () => {
  let {address, port} = server.address()
  address = address === '0.0.0.0' ? '127.0.0.1' : address
  port = port === 80 ? '' : ':' + port
  const link = `\x1B[32mhttp://${address}${port}\x1B[39m`
  console.log(`Server is running at: 
  > ${app.env} : ${link}
  `)
})
