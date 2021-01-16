const config = require('../../config')
const Redis = require('ioredis')

// init
const redis = new Redis({
  ...config.redis,
  keyPrefix: config.redis.prefix,
})

// set
function set(key, value, time) {
  const val = value instanceof Buffer ? value : JSON.stringify(value)
  if(!time) return redis.set(key, val)
  else return redis.set(key, val, 'EX', _getTime(time))
}

// time
function _getTime(time){
  if(typeof time === 'number') return time
  const num = parseFloat(time)
  const tag = time[time.length - 1].toLowerCase()
  const map = {
    'm': 60,
    'h': 3600,
    'd': 24 * 3600,
  }
  return num * map[tag]
}

// expire
function expire(key, time){
  return redis.expire(key, _getTime(time))
}

// has
function has(...keys){
  return redis.exists(...keys)
}

// get
async function get(key) {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, res) => {
      if (err) {
        reject(err)
      } else {
        try {
          resolve(JSON.parse(res))
        } catch{
          resolve(res)
        }
      }
    })
  })
}

//getBuffer
function getBuffer(key){
  return redis.getBuffer(key)
}

// del
function del(...keys) {
  return redis.del(...keys)
}

module.exports = {
  set,
  expire,
  has,
  get,
  del,
  redis,
  getBuffer,
}

