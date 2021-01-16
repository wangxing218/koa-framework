# koa-framework
koa-framework


## sqlite3安装报错解决办法
  ```bash
  # 全局设置
  npm config set node_sqlite3_binary_host_mirror http://npm.taobao.org/mirrors
  # 单次安装 
  npm install sqlite3 --node_sqlite3_binary_host_mirror=http://npm.taobao.org/mirrors
  ```