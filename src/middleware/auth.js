/**
 * 权限拦截中间件
 * @param {String} tag 权限标识
 */

module.exports = function(tag){
  return async function(ctx, next){
    console.log('session:', ctx.session.user)
    next()
  }
}