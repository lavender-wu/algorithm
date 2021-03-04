// 二分查找
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    // 更新中点坐标
    mid = Math.floor(left + (right - left) / 2);
    // 找到下标
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // 中点数偏小
      left = mid + 1;
    } else {
      // 中点数偏大
      right = mid - 1;
    }
  }
  return -1;
};

// 两边往中间缩进
var search2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    left++;
    right--;
  }
  return -1;
};
