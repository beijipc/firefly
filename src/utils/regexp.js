const regexp = {
  amount: /^(0|[1-9]\d{0,9})$/, //正整数金额
  phonenum : /^1[3|4|5|7|8]\d{9}$/, //手机号码
  emoji: /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, //表情符
  idcard : /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, //身份证号
  password: /^[\d]{6}$/
};
module.exports = regexp;
