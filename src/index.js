import 'core-js/fn/object/assign';
import 'promise-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';

function onChange(prevState, nextState, replace) {
  let nextRoute = nextState.routes[nextState.routes.length-1];
  if(nextRoute.header&&document.title!=nextRoute.header){
    document.title = nextRoute.header;
    // 兼容微信浏览器动态改变title，界面不更新的bug
    let faviconEl = document.querySelector('link[rel="shortcut icon"]');
    if(faviconEl){
      var i = document.createElement('iframe');
      i.src = faviconEl.getAttribute('href');
      i.style.display = 'none';
      i.onload = function() {
        setTimeout(function(){
          i.remove();
          i = null;
        }, 0)
      }
      document.body.appendChild(i);
    }
  }
}
function onLaunch() {
  console.log('应用启动');
}

// rootRoutes
const rootRoutes = {
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
      pathname:'/my',
      state:{test:'str'}
    })
  }
}else{
  //线上环境
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
