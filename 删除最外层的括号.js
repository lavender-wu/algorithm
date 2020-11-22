/**
 * 题目： 删除最外层的括号
 *        
 */

var removeOuterParentheses = str => {
  var res = '';
  var openCount = 0;
  for (s of str) {
    if (s === '(' && openCount++ > 0) {
      res += s;
    }
    if (s === ')' && openCount-- > 1) {
      res += s;
    }
  }

  return res;
}