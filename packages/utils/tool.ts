/**
 * 格式化数字
 * 千分位分割，保留两位小数
 */
export const formatNumber = (s: number, decimalNum: number = 2) => {
  if (!s) {
    return "0.00";
  }
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimalNum,
    maximumFractionDigits: decimalNum,
  }).format(+s);
};
