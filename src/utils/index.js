import time from './time';
import regexp from './regexp';
import color from './color';
import money from './money';

function setTitle(_title) {
  document.title = _title;
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

module.exports = {time, regexp, color, money, setTitle};
