webpackJsonp([8],{471:function(t,n,e,o,r){var u=e(o);u(u.S+u.F,"Object",{assign:e(r)})},452:function(t,n,e,o){var r=e(o);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},451:function(t,n,e,o,r){e(o),t.exports=e(r).Object.assign},453:function(t,n,e,o,r,u){var i=e(o),c=e(r),f=e(u);t.exports=function(t){return function(n,e,o){var r,u=i(n),a=c(u.length),l=f(o,a);if(t&&e!=e){for(;a>l;)if(r=u[l++],r!=r)return!0}else for(;a>l;l++)if((t||l in u)&&u[l]===e)return t||l||0;return!t&&-1}}},454:function(t,n,e,o){var r=e(o);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,r){return t.call(n,e,o,r)}}return function(){return t.apply(n,arguments)}}},455:function(t,n,e,o){t.exports=!e(o)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},456:function(t,n,e,o,r){var u=e(o),i=e(r).document,c=u(i)&&u(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},457:function(t,n,e,o,r,u){var i=e(o),c=e(r);t.exports=e(u)?function(t,n,e){return i.f(t,n,c(1,e))}:function(t,n,e){return t[n]=e,t}},458:function(t,n,e,o,r,u){t.exports=!e(o)&&!e(r)(function(){return 7!=Object.defineProperty(e(u)("div"),"a",{get:function(){return 7}}).a})},459:function(t,n,e,o){var r=e(o);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},470:function(t,n,e,o){var r=e(o);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},469:function(t,n,e,o){var r=e(o);t.exports=function(t){return Object(r(t))}},468:function(t,n,e,o){var r=e(o),u=Math.min;t.exports=function(t){return t>0?u(r(t),9007199254740991):0}},467:function(t,n,e,o,r){var u=e(o),i=e(r);t.exports=function(t){return u(i(t))}},466:function(t,n,e,o){var r=e(o),u=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?u(t+n,0):i(t,n)}},465:function(t,n,e,o){var r=e(o),u="__core-js_shared__",i=r[u]||(r[u]={});t.exports=function(t){return i[t]||(i[t]={})}},464:function(t,n,e,o,r){var u=e(o)("keys"),i=e(r);t.exports=function(t){return u[t]||(u[t]=i(t))}},460:function(t,n,e,o,r,u,i,c,f){"use strict";var a=e(o),l=e(r),s=e(u),p=e(i),h=e(c),d=Object.assign;t.exports=!d||e(f)(function(){var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach(function(t){n[t]=t}),7!=d({},t)[e]||Object.keys(d({},n)).join("")!=o})?function(t,n){for(var e=p(t),o=arguments.length,r=1,u=l.f,i=s.f;o>r;)for(var c,f=h(arguments[r++]),d=u?a(f).concat(u(f)):a(f),g=d.length,v=0;g>v;)i.call(f,c=d[v++])&&(e[c]=f[c]);return e}:d},461:function(t,n,e,o,r,u,i){var c=e(o),f=e(r),a=e(u),l=Object.defineProperty;n.f=e(i)?Object.defineProperty:function(t,n,e){if(c(t),n=a(n,!0),c(e),f)try{return l(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},462:function(t,n,e,o,r,u,i){var c=e(o),f=e(r),a=e(u)(!1),l=e(i)("IE_PROTO");t.exports=function(t,n){var e,o=f(t),r=0,u=[];for(e in o)e!=l&&c(o,e)&&u.push(e);for(;n.length>r;)c(o,e=n[r++])&&(~a(u,e)||u.push(e));return u}},463:function(t,n,e,o,r){var u=e(o),i=e(r);t.exports=Object.keys||function(t){return u(t,i)}},328:function(t,n){},292:[451,324,166],301:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},302:[452,169],303:[453,207,321,320],304:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},166:function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},305:[454,301],202:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},167:[455,168],306:[456,169,155],307:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},308:function(t,n,e){var o=e(155),r=e(166),u=e(204),i=e(317),c=e(305),f="prototype",a=function(t,n,e){var l,s,p,h,d=t&a.F,g=t&a.G,v=t&a.S,y=t&a.P,m=t&a.B,b=g?o:v?o[n]||(o[n]={}):(o[n]||{})[f],x=g?r:r[n]||(r[n]={}),O=x[f]||(x[f]={});g&&(e=n);for(l in e)s=!d&&b&&void 0!==b[l],p=(s?b:e)[l],h=m&&s?c(p,o):y&&"function"==typeof p?c(Function.call,p):p,b&&i(b,l,p,t&a.U),x[l]!=p&&u(x,l,h),y&&O[l]!=p&&(O[l]=p)};o.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},168:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},155:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},203:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},204:[457,311,316,167],309:[458,167,168,306],205:[459,304],169:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},310:[460,314,312,315,322,205,168],311:[461,302,309,323,167],312:function(t,n){n.f=Object.getOwnPropertySymbols},313:[462,203,207,303,318],314:[463,313,307],315:function(t,n){n.f={}.propertyIsEnumerable},316:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},317:function(t,n,e){var o=e(155),r=e(204),u=e(203),i=e(208)("src"),c="toString",f=Function[c],a=(""+f).split(c);e(166).inspectSource=function(t){return f.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(u(e,"name")||r(e,"name",n)),t[n]!==e&&(f&&(u(e,i)||r(e,i,t[n]?""+t[n]:a.join(String(n)))),t===o?t[n]=e:c?t[n]?t[n]=e:r(t,n,e):(delete t[n],r(t,n,e)))})(Function.prototype,c,function(){return"function"==typeof this&&this[i]||f.call(this)})},318:[464,319,208],319:[465,155],320:[466,206],206:function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},207:[467,205,202],321:[468,206],322:[469,202],323:[470,169],208:function(t,n){var e=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+o).toString(36))}},324:[471,308,310],278:function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var c=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}();e(328),e(330);var f=e(1),a=o(f),l=function(t){function n(){return r(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),c(n,[{key:"render",value:function(){return a.default.createElement("main",null,this.props.children)}}]),n}(a.default.Component);l.defaultProps={},t.exports=l},280:function(t,n,e){"use strict";var o=[{path:"home",header:"首页",getComponent:function(t,n){return e.e(4,function(t){n(null,e(279))})}}];t.exports=o},284:function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,n){i.default.loggedIn()||n({pathname:"/login",state:{nextPathname:t.location.pathname}})}var u=e(154),i=o(u),c={path:"my",onEnter:r,getComponent:function(t,n){return e.e(6,function(t){n(null,e(282))})},getIndexRoute:function(t,n){return e.e(7,function(t){n(null,{header:"个人中心",component:e(281)},"dashboard")})},childRoutes:[{path:"profile",header:"个人简介",getComponent:function(t,n){return e.e(5,function(t){n(null,e(283))})}}]};t.exports=c},288:function(t,n,e){"use strict";var o=[{path:"login",header:"登录",getComponent:function(t,n){return e.e(1,function(t){n(null,e(286))})}},{path:"logout",header:"登出",getComponent:function(t,n){return e.e(2,function(t){n(null,e(287))})}},{path:"*",header:"未找到页面",getComponent:function(t,n){return e.e(3,function(t){n(null,e(285))})}}];t.exports=o},0:function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}function u(){console.log("rootRoute onChange")}e(292);var i=e(1),c=o(i),f=e(148),a=o(f),l=e(239),s=o(l),p=e(244),h=o(p),d={path:"/",component:e(278),onChange:u,childRoutes:[].concat(r(e(280)),[e(284)],r(e(288)))};"localhost"===window.location.hostname&&(d.indexRoute={onEnter:function(t,n){return n({pathname:"/home",state:{test:"str"}})}}),a.default.render(c.default.createElement(s.default,{history:h.default,routes:d}),document.getElementById("app"))},154:function(t,n){"use strict";function e(t,n,e){setTimeout(function(){e(t&&n?{authenticated:!0,token:Math.random().toString(36).substring(7)}:{authenticated:!1})},0)}t.exports={login:function(t,n,o){var r=this;return o=arguments[arguments.length-1],localStorage.token?(o&&o(!0),void this.onChange(!0)):void e(t,n,function(t){t.authenticated?(localStorage.token=t.token,o&&o(!0),r.onChange(!0)):(o&&o(!1),r.onChange(!1))})},getToken:function(){return localStorage.token},logout:function(t){delete localStorage.token,t&&t(),this.onChange(!1)},loggedIn:function(){return!!localStorage.token},onChange:function(){}}},330:328});
//# sourceMappingURL=app.b46334.js.map