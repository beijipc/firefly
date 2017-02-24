//金额，保留小数点后两位，第三位做4舍5入。
function roundPrice(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

module.exports = {roundPrice};
