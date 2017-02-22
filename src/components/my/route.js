import auth from 'stores/auth';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const route = {
  path: 'my',
  onEnter: requireAuth,
  getComponent(nextState, cb){
    return require.ensure([], (require) => {
      cb(null, require('./index'))
    },'my')
  },
  getIndexRoute(nextState, cb) {
    return require.ensure([], function (require) {
      cb(null, {
        header: '个人中心',
        component: require('./dashboard')
      }, 'dashboard')
    })
  },
  childRoutes:[
    {
      path: 'profile',
      header: '个人简介',
      getComponent(nextState, cb) {
        return require.ensure([], (require) => {
          cb(null, require('./profile'))
        },'profile')
      }
    }
  ]
}

module.exports = route;
