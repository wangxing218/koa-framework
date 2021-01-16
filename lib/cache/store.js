/**
 * session 存储 store
 */
const cache = require('./index')

class SessionStore {
  constructor(options = { 
    prefix: 'SESSION:',
    expire: '2h',
  }) {
    this.options = options
  }
  getKey(key) {
    return this.options.prefix + key
  }
  // get session
  async get(key, maxAge, { rolling }) {
    const val = await cache.get(this.getKey(key))
    if(maxAge === 'session' && rolling && this.options.expire){
      cache.expire(this.getKey(key), this.options.expire)
    }
    return val
  }
  // set session
  async set(key, sess, maxAge, {changed }) {
    if(changed){
      return await cache.set(this.getKey(key), sess, this.options.expire)
    }else{
      return await cache.expire(this.getKey(key), this.options.expire)
    }
  }
  // destroy session
  async destroy(key) {
    return await cache.del(this.getKey(key))
  }
}

module.exports = SessionStore
