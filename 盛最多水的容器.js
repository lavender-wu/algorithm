/** 
 *题目：盛最多水的容器
 *给你 n 个非负整数 a1，a2，...，an，
 *每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
 *垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
 *找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var maxValue = 0;
  for(var i = 0,j = height.length - 1;i < j;) {
      // 找出两线的最小值作为求面积的高, 且小的线向中间移一位,先用后加(减)
      var h = height[i] > height[j] ? height[j--] : height[i++];
      // 求面积,底*高， + 1是因为上面取高之后向中间移动，矩形的底肯定少了1，要加回来
      var s = (j - i + 1) * h;
      // 给最大的值赋值
      maxValue = Math.max(maxValue, s);
      // TODO 若想再记录对应的下标， 难点是后面的三目运算取[i, j]后，并不能知道是谁向中间移动了的，找到的下标也是不对的
      // indexArr = maxValue > s ? indexArr : [i, j];
  }
  return maxValue;
};
