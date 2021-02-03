# Koa-framework
一个基于Koa搭建的轻量级后台开发框架，主要亮点包括：
1. 轻量级，整个依赖包和项目代码不超过20M，若除去数据库相关功能可压缩至10M以下；
2. 毫秒级极速启动，结合nodemon，开发环境下极速热加载，体验更丝滑；
3. 支持参数校验的路由级中间件，支持统一错误处理，支持统一返回格式；
5. 基于log4js的日志引擎，记录系统的点点滴滴；
4. 支持redis，可基于redis配置session和缓存，实现高性能；
5. 基于nunjucks的视图引擎，写法更人性化；
6. 支持mysql, sqlite数据库，内置db类，无需写sql即可快速实现curd;
7. 基于vscode的debug配置，按F5即可进入断点调试，高度过程中也支持热重载。


## 安装与启动
1. 下载本git源码
2. 安装依赖
  ```bash
  npm install
  ```
3. 启动，或按F5直接进入开发调试模式（vscode），按控制台输入打开浏览器
  ```bash
  npm run dev
  ```



## sqlite3安装报错解决办法，设置sqlite3的镜像源
  ```bash
  # 全局设置
  npm config set node_sqlite3_binary_host_mirror http://npm.taobao.org/mirrors
  # 单次安装 
  npm install sqlite3 --node_sqlite3_binary_host_mirror=http://npm.taobao.org/mirrors
  ```