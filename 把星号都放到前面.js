/**
 * 题目：一个字符串中只包含*和数字，请把*都放在开头
 * 思路：可以把字符串转为数组，操作完成再转为字符串
 */
// TODO
var replaceStar = str => {
  console.log(str, str.length);
  var res = '';
  var i = 0;
  while(i < str.length) {
    if (str[i] === '*') {
      res += str[i];
    }
    i++;
  }

  console.log('res', res, str)
  var len = str.length - res.length;
  if (!len) {
    return str;
  }
  return res += '&';
}
var s = '93*797*';
console.log(replaceStar(s))
