/** 常用排序 O(nlogn)
 * 1.快排：找标杆位置，比标杆小的都放左边，大的都放右边
 * 2.归并排序：分成两个数组，对数据进行排序，合并两个有序数组
 * 3.堆排序
 **/

/**
 * 1.快速排序：
 *   快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分
 *   一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
 */
// 不考虑内存问题,可以另外申请内存（力扣官网提交会因为内存泄露报错）
var quickSort = function (nums) {
  var len = nums.length;
  if (len < 2) {
    return nums.slice();
  }
  // Math.random() 返回0-1间的浮点数, 乘以长度，向下取整得到pivot下标
  var pivotIndex = Math.floor(Math.random() * len);
  var pivot = nums[pivotIndex];
  var left = [];
  var right = [];
  for (var i = 0; i < len; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return sortArray(left).concat(sortArray(right));
};

// 考虑内存，只能在原数组操作(最优解)
var quickSortOptimal = (nums) => {
  // 2. 排序，递归排序到最小颗粒 
  var sort = (array, begin, end) => {
    if (end <= begin) {
      return array;
    }
    var pivot = partition(array, begin, end);
    sort(array, begin, pivot - 1);
    sort(array, pivot + 1, end);
    return array;
  };

  // 1.找到标杆位置，并将小于标杆的数放到左边，大于标杆的放右边
  var partition = (arr, begin, end) => {
    var pivot = end;
    var counter = begin;
    for (var i = begin; i < end; i++) {
      if (arr[i] < arr[pivot]) {
        [arr[i], arr[counter]] = [arr[counter], arr[i]];
        counter++;
      }
    }
    // 最后把标杆位置与counter对调，此时标杆左边的数均小于它 右边的数均大于它
    // 递归之后结果也是两个有序数组
    [arr[pivot], arr[counter]] = [arr[counter], arr[pivot]];
    return counter;
  };

  // 调用方式
  return sort(nums, 0, nums.length - 1);
};

// 2.归并排序
var mergeSort = function (nums) {
  return sort(nums, 0, nums.length - 1);

  // (1)先排序
  function sort(array, left, right) {
    if (left >= right) {
      return array;
    }
    // 取中点有两中方式均可
    var mid = (left + right) >> 1; // 右位移 相当于 除以2 即（left + right）/2
    // var mid = Math.floor(left + (right - left) / 2);
    sort(array, left, mid);
    sort(array, mid + 1, right);
    merge(array, left, mid, right);
    return array;
  }

  // (2)合并两个有序数组
  function merge(arr, left, mid, right) {
    // arr 排序数组
    // left: 当前处理的第一项元素坐标
    // mid：当前处理的中间元素坐标
    // right：当前处理的最后一项元素坐标
    var i = left; // 做数组的起始坐标 [left, mid]
    var j = mid + 1; // 右数组的起始坐标 [mid + 1, right]
    var k = 0; // 标记存入temp的个数
    var temp = [];

    while (i <= mid && j <= right) {
      temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
    }

    // 走到这里说明左边或者右边有一个数组取完了，则将未取完的也放到temp中
    while (i <= mid) {
      temp[k++] = arr[i++];
    }

    while (j <= right) {
      temp[k++] = arr[j++];
    }

    // 将temp的元素拷贝回arr去
    for (var p = 0; p < temp.length; p++) {
      arr[left + p] = temp[p];
    }
  }
};
