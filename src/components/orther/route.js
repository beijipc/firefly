const route = [
  {
    path: 'login',
    header: '登录',
    getComponent(nextState, cb) {
      return require.ensure([], (require) => {
        cb(null, require('./login'))
      },'login')
    }
  },
  {
    path: 'logout',
    header: '登出',
    getComponent(nextState, cb) {
      return require.ensure([], (require) => {
        cb(null, require('./logout'))
      },'logout')
    }
  },
  {
    path: '*',
    header: '未找到页面',
    getComponent(nextState, cb) {
      return require.ensure([], (require) => {
        cb(null, require('./error404'))
      },'error404')
    }
  }
]
module.exports = route;
