/**
 * 配置入口，可根据不同环境覆盖
 */
const config = {
  // system
  system: {
    host: '0.0.0.0',
    port: 3100,
  },
  // redis
  redis: {
    prefix: 'koa:',
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: '123456',
  },
  // session
  session: {
    store: 'cookie', // redis or cookie
    key: 'sid', // cookie name
    maxAge: 'session', // cookies maxAge
    expire: 2 * 3600, // redis expire
    prefix: 'session:', // redis prefix
    rolling: true,
    renew: false,
    signed: false,
  },
  // database
  database: {
    port: 3306,
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'test',
    connectionLimit: 1,
    logSql: true,
  },
}




require('../lib/helper').extend(config, require(`./${process.env.NODE_ENV || 'production'}`) || {})
module.exports = config 
