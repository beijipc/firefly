// 时间戳转 YYYY/MM/dd HH:mm:ss
module.exports.formatTime = function(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 现在之前
module.exports.formatTimeNowBefore = function(str){
  var startTime = new Date(str).getTime();
  var nowTime = new Date().getTime();
  //现在的时间，减去过去的时间 = 相差的时间（单位 = 毫秒）
  var time = nowTime - startTime;

  if (time / 1000 < 60) {
      return parseInt((time /1000)) + '秒前';
  } else if ((time / 60000) < 60) {
      return parseInt((time / 60000)) + '分钟前';
  } else if ((time / 3600000) < 24) {
      return parseInt(time / 3600000) + '小时前';
  } else if ((time / 86400000) < 31) {
      return parseInt(time / 86400000) + '天前';
  } else if ((time / 2592000000) < 12) {
      return parseInt(time / 2592000000) + '月前';
  } else {
      return parseInt(time / 31536000000) + '年前';
  }
}

// 倒计时
module.exports.formatTimeBackwards = function(end) {
  // let maxHour = getApp().globalData.config.DefaultReplayMaxHour;
  // let maxMillisecond = maxHour*60*60*1000;
  // let createTime = new Date(end).getTime()
  let nowTime = new Date().getTime();
  let endTime = new Date(end).getTime();

  let nMS = endTime - nowTime;
  let nD = Math.floor(nMS / (1000 * 60 * 60 * 24));
  let nH = Math.floor(nMS / (1000 * 60 * 60 )) % 24;
  let nM = Math.floor(nMS / (1000 * 60 )) % 60;
  let nS = Math.floor(nMS / 1000) % 60;
  let result;
  if (nMS <= 0){
    result = 0;
  }else{
    result = nD ? `${nD}天 ${nH}时${nM}分${nS}秒` : `${nH}时${nM}分${nS}秒`;
  }
  return result;
}

//数字补齐2位
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//延时
module.exports.sleep = function(s) {
  return new Promise((resolve)=>{
    setTimeout( ()=>{
      resolve();
    }, s*1000);
  });
}
