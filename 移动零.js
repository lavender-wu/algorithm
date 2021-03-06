/**
 * 题目：移动 0
 *      给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *      输入: [0,1,0,3,12] => 输出: [1,3,12,0,0]
 */
/**
 * 题解： 用sort 排序
 *        当 b === 0, 返回-1 降序排列
 *           b !== 0, 返回0 不操作
 */
var moveZeroes = function (nums) {
  return nums.sort((a, b) => {
    return b === 0 ? -1 : 0;
  });
};
var arr = [2,0,3,0,0,7,8];
console.log(moveZeroes(arr));
