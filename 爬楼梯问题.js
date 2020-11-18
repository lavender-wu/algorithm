/* 
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
  注意：给定 n 是一个正整数。
*/

/* 
  该问题转换为斐波拉契数列问题
  上第三级台阶方法：站在第一级的时候跨2级一步上去（一种） 或者站在第二级跨1级一步上去（一种）
  即f(n) = f(n-1) + f(n-2) 因为最小两个f(1) f(2)值已经知道,逆向思维 先求f(3)=> f(4)=>f(5)...f(n)
*/
function climbStairs(n) {
  // 终止条件
  if(n === 1) {
    return 1
  }
  var prevPrev = 1;
  var prev = 2; // f(n)最终结果放在这里
  // 最多算到f(n-1), 所以i<n
  for(var i = 2; i < n; i++) {
    var temp = prevPrev + prev; // 当i=2 即f(3) = f(1)+f(2) = prevPrev + prev = temp 以此类推
    // 不考虑执行时间问题，可以使用es6结构
    // [prev, prevPrev] = [prevPrev, prev]
    // [prev, temp] = [temp, prev]
    prevPrev = prev;
    prev = temp;
  }
  return prev;
}

const res = climbStairs(5);
console.log(res)
// 注明：在力扣编译run 定义变量使用var，代码块要用{}包裹， 可以节省时间
