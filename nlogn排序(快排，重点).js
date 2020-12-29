/** 常用排序 O(nlogn)
 * 1.快排
 * 2.归并排序
 * 3.堆排序
 **/

/**
 * 1.快速排序：
 *   快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分
 *   一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
 */
// 不考虑内存问题,可以另外申请内存
var sortArray = function (nums) {
  var len = nums.length;
  if (len < 2) {
    return nums.slice();
  }
  // Math.random() 返回0-1间的浮点数, 乘以长度，向下取整得到pivot下标
  var pivotIndex = Math.floor(Math.random() * len);
  var pivot = nums[pivotIndex];
  var left = [],
    right = [];
  for (var i = 0; i < len; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return sortArray(left).concat(sortArray(right));
};

// 考虑内存，只能在原数组操作
var quickSort = (array, start, end) => {
  var sort = (array, begin, end) => {
    if (end <= begin) {
      return array;
    }
    var pivot = partition(array, begin, end);
    quickSort(array, begin, pivot - 1);
    quickSort(array, pivot + 1, end);
    return array;
  };

  // 找到标杆位置，并将小于标杆的数放到左边，大于标杆的放右边
  var partition = (arr, begin, end) => {
    var pivot = end;
    var counter = begin;
    for (var i = begin; i < end; i++) {
      if (arr[i] < arr[pivot]) {
        [arr[i], arr[counter]] = [arr[counter], arr[i]];
        counter++;
      }
    }
    [arr[pivot], arr[counter]] = [arr[counter], arr[pivot]];
    return counter;
  };

  // 调用方式
  return sort(nums, 0, nums.length - 1);
};
