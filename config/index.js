/**
 * config entry
 */
const config = {
  // system
  system: {
    host: '0.0.0.0',
    port: 3100,
    prefix: '',
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
    type: 'cookie', // redis or cookie
    key: 'sid', // cookie name
    keys: ['key1'], // cookie singed keys
    maxAge: 'session', // cookies maxAge seconds
    expire: 2 * 3600, // redis expire
    cachePrefix: 'session:', // redis prefix
    rolling: true,
    renew: false,
    signed: true,
  },
  // database
  database: {
    default: 'mysql',
    mysql: {
      type: 'mysql',
      port: 3306,
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      database: 'test',
      prefix: '', // table prefix
      connectionLimit: 10,
      timezone: '08:00',
      logSql: true,
      logConnect: true,
    },
    sqlite: {
      type: 'sqlite',
      path: 'runtime', // sqlite dir
      database: 'test', // {database}.db
      prefix: '', // table prefix
      connectionLimit: 1,
      logSql: true,
      logConnect: true,
      logger: 'logger'
    }
  },
  // logger
  logger: {
    type: 'console',
    path: 'runtime/logs',
    pattern: 'yyyy-MM-dd',
    keepDays: 30,
  },
}

require('../lib/helper').extend(config, require(`./${process.env.NODE_ENV || 'production'}`) || {})
module.exports = config 
