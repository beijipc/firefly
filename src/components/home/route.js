const route = [
  {
    path:'home',
    header:'首页',
    getComponent(nextState, cb){
      return require.ensure([], (require) => {
        cb(null, require('./index'))
      },'home');
    }
  }
];
module.exports = route;
