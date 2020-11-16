/**************************************************************
* 题目：
*    给定一个整数数组 nums 和一个目标值 target，
*    请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
*    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍
*    给定 nums = [2, 7, 11, 15], target = 9
*    因为 nums[0] + nums[1] = 2 + 7 = 9
*    所以返回 [0, 1]
****************************************************************/

function add(nums, target) {
  let hash = {};
  for(let i = 0; i < nums.length; i++) {
    // 找出差值
    const dif = target - nums[i];
    
    // 表中存在该值，则找到和为target的两个数
    if (hash[dif] != undefined) {
      // 输出下标
      return [hash[dif], i]
    }
    // 当前项为key， i为value存入hash表中
    hash[nums[i]] = i;
  }
  return [];
}
const arr = [3, 5, 12, 50, 6]
const sum = add(arr, 9);
