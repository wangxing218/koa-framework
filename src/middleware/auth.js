/**
 * auth middleware
 * @param {String} tag auth tag - eg: system.user.add
 */

module.exports = function(tag){
  return async function(ctx, next){
    next()
  }
}