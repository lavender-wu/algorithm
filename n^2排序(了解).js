/**
 * 了解为主 O(n^2)
 * 1.选择排序：每次找到最小值挪到待排序数组起始位置
 * 2.冒泡排序：嵌套循环，每次查看相邻的元素如果逆序，则交换（每次冒泡，最大元素被移到最后面）
 * 3.插入排序：从前到后逐步构建有序序列；对于未排序数据，在已排序序列中从后往前扫描，找到对应位置并插入
 */

// 选择排序：
function selectSort(arr) {
  var len = arr.length;
  var minIndex;
  var temp;
  for (var i = 0; i < len; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 找到最小值
        minIndex = j; // 将最小值索引保存
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // 交换位置
  }
  return arr;
}

// 插入排序
function insertSort(arr) {
  let len = arr.length;
  var preIndex;
  var current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1; // 有序数据的最后一项
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      // 当前项跟已排序元素比较，arr[preIndex]大则将其右移（移动current的位置， 此时arr[preIndex]是空的）
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    // 将当前项放到空位置（如果自始至终arr[preIndex] < current, 那么arr[preIndex + 1] = arr[i] = current，相当于没有变化）
    arr[preIndex + 1] = current;
  }
  return arr;
}

/**
 * 冒泡排序：
 *          比较相邻的两个元素，如果前一个比后一个大，则交换位置。
 *          第一轮的时候最后一个元素应该是最大的一个。
 *          按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
 */
var bubbleSort = function (nums) {
  const len = nums.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
};

var list = [1, 0, 6, 16, 8, 1];

console.log(insertSort(list));
