# firefly
> 萤火虫，一个H5单页移动应用开发脚手架，可以快速搭建一个react移动单页应用。

### 基础库
- react: 虚拟dom，更好的移动端webapp解决方案，[react]文档
- react-router: 路由管理，[react-router]文档
- antd-mobile: 移动端UI组件库，[antd-mobile]文档
- react-cookie: 更便捷的管理cookie，[react-cookie]文档
- whatwg-fetch: 原生fetch向下兼容，[fetch]文档
- core-js: 提供丰富的es6/es7 polyfill，[core-js]文档
- flux: 单向数据流管理

### 特色
- react+webpack+es6架构
- 支持ES7 async/await 语法
- 路由默认入口模块可配置
- 开发环境支持react热更新
- 发布环境可配置静态资源CDN
- svgSprite，减少多次引入svg代码重复率和网络请求
- 750px高清布局，相当于iphone6。完美还原设计细节。
- 优化webpack静态资源的版本管理，可有效利用缓存、全量覆盖更新、线上版本回滚等；
- js通用模块独立抽取，chunkhash；
- js入口模块独立，chunkhash；
- js业务模块按需加载，使用chunkhash；
- 样式表支持css/less/sass/scss，独立抽出，使用contenthash；
- html注入，自动注入hash命名的资源文件；
- 加入static.json静态资源表，便于hybrid app做缓存；

### 其它
- 建议使用es6语法，可以平滑过渡到react-native

### 安装
- 目前仅支持git clone

### 使用
- 创建项目: `git clone https://github.com/beijipc/firefly.git`
- 初始化: `npm install`
- 开发：`npm run serve`
- 发布：`npm run dist`

### 配置路由默认入口
src/index.js


[react]:http://reactjs.cn/react/docs/getting-started-zh-CN.html
[react-router]:http://react-guide.github.io/react-router-cn/docs/Introduction.html
[antd-mobile]:https://mobile.ant.design/docs/react/introduce
[react-cookie]:https://github.com/thereactivestack/react-cookie
[fetch]:https://github.com/github/fetch
[core-js]:https://github.com/zloirock/core-js
