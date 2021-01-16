/**
 * 工具类
 */
const path = require('path')

// 获取环境变量
function getEnv() {
  return process.env.NODE_ENV || 'production'
}

// 是否为开发环境
function isDev() {
  return exports.getEnv() === 'development'
}

// 根路径
function root(...dir){
  return path.resolve(__dirname, '../../', ...dir)
}


module.exports = {
  getEnv,
  isDev,
  root,
}