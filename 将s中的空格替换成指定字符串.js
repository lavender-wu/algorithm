/**
 * 题目： 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param {string} s
 * @return {string} res
 */
var replaceSpace = function(s) {
  var reg = /\s/g;
  var res = s.replace(reg, '%20');
  return res;
};