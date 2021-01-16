
const Validator = require('./main')

function validateMiddleware(rules, msgs){
  return function(ctx, next){
    const val = new Validator(ctx)
    const ret = val.validate(rules, msgs)
    if(!Object.keys(ret).length){
      next()
      return
    }
    ctx.body = {
      code: 504,
      msg: ret,
    }
  }
}

module.exports = validateMiddleware
module.exports.validator = require('./validator')