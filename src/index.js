import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';

function onChange() {
  //默认情况下，所有页面都需要禁用分享。个别页面可分享的在页面组件中设置。
  // WechatAction.shareClose();
  console.log('rootRoute onChange');
}

// rootRoutes
const rootRoutes = {
  path: '/',
  component: require('components/Main'),
  onChange: onChange,
  childRoutes:[
    ...require('components/home/route'),
    require('components/my/route'),
    ...require('components/orther/route')
  ]
}

//重置默认路由
// console.log(window.location.hostname);
if(window.location.hostname === 'localhost'){
  rootRoutes.indexRoute = {
    onEnter: (nextState, replace) => replace({
      pathname:'/home',
      state:{test:'str'}
    })
  }
}

// Render the main component into the dom
ReactDOM.render(
  <Router history={hashHistory} routes={rootRoutes} />,
  document.getElementById('app')
);
