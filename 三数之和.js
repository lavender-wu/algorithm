/**
 * 题目：
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 最优算法 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 先排序
  nums.sort((a, b) => a - b);
  // 终止条件 如果第一项就 > 0 则后面每一项都会大于0，即结果只会为空
  if (n1 > 0) {
     return [];
  }
  var res = [];
  console.log('nums', nums);
  for (var i = 0; i <  nums.length - 2; i++) {
    var n1 = nums[i];
    // 边界条件
    if (n1 > 0) {
      break; // 第一项就为0 退出整个循环，接着执行return res 
    }
    // 从第二项开始(i-1>=0)，若是出现重复项，跳过本次循环，执行下一次循环
    if (i - 1 >= 0 && n1 == nums[i - 1]) {
      continue;
    }
    // 定义左右指针
    var left = i + 1;
    var right = nums.length - 1;
    while(left < right) {
      console.log('out')
      var n2 = nums[left];
      var n3 = nums[right];
      // 这里不管执行哪个分支，执行完了之后都需要移动指针
      if (n1 + n2 + n3 == 0) {
        res.push([n1, n2, n3]);
        // 得到一个解后，要继续左右指针向内缩，继续找解（中间还可能有解）
        while(left < right && n2 == nums[left]) {
          left++;
        }
        while(left < right && n3 == nums[right]) {
          right--;
        }

      } else if (n1 + n2 + n3 < 0) {
        // 和比目标值小了， 做指针右移
        left++;

      } else {
        // 和比目标值大了，有指针左移
        right--;
      }
    }
  }
  return res;
};


// 两个人组合找主持人登记的方法
// 这里会出现重复的
// 若先排序在执行 则会有遗漏 因为hash存储会覆盖 比如重组合的差值都为同一个时会覆盖
var threeSum = (nums) => {
  var res = [];
  var hash = {};
  for(var i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (hash[nums[j]] != undefined) {
        res.push([nums[j]].concat(hash[nums[j]]));
        // 每个只能使用一次，使用之和就要清空
        hash[nums[j]] = undefined;
      } else {
        // 差值作为key 组合作为value存到hash表
        var mark = 0 - nums[i] - nums[j];
        hash[mark] = [nums[i], nums[j]]
      }
    }
  }
  return res;
}

