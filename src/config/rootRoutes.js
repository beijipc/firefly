import {setTitle} from 'utils';

function onChange(prevState, nextState) {
  let nextRoute = nextState.routes[nextState.routes.length-1];
  if(nextRoute.header&&document.title!=nextRoute.header){
    setTitle(nextRoute.header);
  }
}

function onLaunch() {
  console.log('应用启动');
}

// rootRoutes
let rootRoutes = {
  path: '/',
  component: require('components/Main'),
  onChange: onChange,
  onEnter: onLaunch,
  childRoutes:[
    ...require('components/home/route'),
    require('components/my/route'),
    ...require('components/orther/route')
  ]
}

//默认路由入口
if(window.location.hostname === 'localhost'){
  //开发环境
  rootRoutes.indexRoute = {
    onEnter: (nextState, replace) => replace({
      pathname:'/home',
      state:{test:'str'}
    })
  }
}else{
  //线上环境
  rootRoutes.indexRoute = {
    onEnter: (nextState, replace) => replace({
      pathname:'/my',
      state:{test:'str'}
    })
  }
}

export default rootRoutes;
