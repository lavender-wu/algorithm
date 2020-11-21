/* *
 * 题目：
 *      xA 表示有 x 位数字出现在秘密数字中，且位置都与秘密数字一致。
 *      yB 表示有 y 位数字出现在秘密数字中，但位置与秘密数字不一致。
 */

/* *
 * 题解：巧用同一个数组索引来存取值，索引是数字本身，值的数字绝对值是出现的次数，正数位秘密，负数为猜测数
 *      
 */
 var getHint = function (secret, guess) {
  var m = 0;
  var n = 0;
  var hash = Array(10).fill(0);
  for (var i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      m++;
    } else {
       // 把每个秘密数都存进去, 正数位秘密数字，负数为猜测数
       // 非0则说明前面有存储过数字, 故n++, 且数字出现的数量+(-)
       if (hash[guess[i]]++ < 0) {
         n++;
       }

       if (hash[secret[i]]-- > 0) {
         n++;
       }
    }
  }
  return `${m}A${n}B`
 }