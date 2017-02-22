# BeanGoose
> 灰雁，一个单页移动应用开发脚手架，可以快速搭建一个react移动单页应用。

### 基础库
- react: 虚拟dom，更好的移动端webapp解决方案，文档[react]
- react-router: 路由管理，文档[react-router]
- antd-mobile: 移动端UI组件库，文档[antd-mobile]
- react-cookie: 更便捷的管理cookie，文档[react-cookie]
- whatwg-fetch: 原生fetch的向下兼容库，文档[fetch]
- core-js: 提供丰富的es6/es7 polyfill，文档[core-js]
- flux: 单向数据流管理

### 特色
- 快速构建SPA webapp for mobile
- 750px高清布局，相当于iphone6。完美还原设计细节。
- js业务模块按需增量加载，使用chunkhash，便于增量更新；
- js通用模块独立抽取；
- 样式表支持css/less/sass/scss，独立抽出，使用contenthash，便于增量更新；
- html注入，自动注入hash命名的资源文件；

### 其它
- 建议使用es6语法，可以平滑过渡到react-native

### 安装
- 目前仅支持git clone

### 使用
- 开发：`npm run serve`
- 发布：`npm run dist`


[react]:http://reactjs.cn/react/docs/getting-started-zh-CN.html
[react-router]:http://react-guide.github.io/react-router-cn/docs/Introduction.html
[antd-mobile]:https://mobile.ant.design/docs/react/introduce
[react-cookie]:https://github.com/thereactivestack/react-cookie
[fetch]:https://github.com/github/fetch
[core-js]:https://github.com/zloirock/core-js
