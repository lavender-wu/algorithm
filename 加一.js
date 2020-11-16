/* 
  题目：加一
  给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
  你可以假设除了整数 0 之外，这个整数不会以零开头。
*/

/* 
  分2种情况：
    1.有进位，在中间结束（加一之后没有进位也属于这种情况）
    2.有进位，且一直到最后一位还有进位，即最终结果为[1, 0, 0, 0]格式
*/
function plusOne(digits = []) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %=10; // 除10取余
    if (digits[i] != 0) {
      // 余数不为0，说明没有进位，计算结束
      return digits;
    }
  }
  // 走到这里说明，是[9, 9, 9]这种情况，将长度+1, 每一项填充0，第一项设置为1
  digits = [...Array(len + 1)].map((_ => 0))
  digits[0] = 1;
  return digits;
}

const res = plusOne([9, 9, 9]);
console.log(res)


/* 
  shift: 删除数组第一个元素，并返回删除的元素
  unshift： 在数组开头添加一个或多个元素，并返回新的长度
*/