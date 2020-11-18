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
  }
  return maxValue;
};

// 附带记录下标功能的方法
var maxAreaAndIndex = function(height) {
  var maxValue = 0;
  var indexArr = [0, height.length - 1]; // 存放下标
  for(var i = 0,j = height.length - 1;i < j;) {
      console.log(i, j, indexArr)
      // 找出两线的最小值作为求面积的高, 且小的线向中间移一位,先用后加(减)
      var h = height[i] > height[j] ? height[j] : height[i];
      // 求面积,底*高， + 1是因为上面取高之后向中间移动，底长肯定少了1，要加回来
      var s = (j - i) * h;
      // 给最大的值赋值
      maxValue = maxValue > s ? maxValue : s;
      indexArr = maxValue > s ? indexArr : [i, j];
      height[i] > height[j] ? j-- : i++;

  }
  console.log(indexArr);
  return maxValue;
};
