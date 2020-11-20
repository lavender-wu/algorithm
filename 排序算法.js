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

/**
 * 快速排序：
 *          快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分
 *          一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
 */
var quickSort = function (arr) {
  // 拷贝数组防止操作过程改变原数组
  var newArr = arr.slice();
  // 当数组只有一个数， 返回当前数组
  if (newArr.length <= 1) {
    return newArr;
  }
  // newArr.length/2 的最大整数,向下取整,比如当length = 7，则povatIndex = 3
  var pivotIndex = Math.floor(newArr.length / 2);
  // (splice 从下标pivotIndex起，删掉一个元素并返回删除的元素, 会改变元素组)
  // 取出数组中心数
  var pivot = newArr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  // 数组分成左右两部分
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] < pivot) {
      left.push(newArr[i]);
    } else {
      right.push(newArr[i]);
    }
  }
  // 最后把左数组、中心数、有数组拼接起来
  return quickSort(left).concat([pivot], quickSort(right));
};

/**
 * 插入排序：这里做升序排列 TODO
 *
 */
var insertSort = function (inputNums) {
  let len = inputNums.length;
  // 取第二项作为临时值temp
  for (let i = 1; i < len; i++) {
    let temp = inputNums[i];
    let j = i;
    for (; j > 0; j--) {
      // temp 跟它的前一项比较
      if (temp >= inputNums[j - 1]) {
        break; // 当前考察的数大于前一个数，证明有序，退出循环
      }
      inputNums[j] = inputNums[j - 1]; // 将前一个数复制到后一个数上
    }
    console.log('j', j);
    // 此时j已经执行 -1, 即向右移动以为
    inputNums[j] = temp; // 找到考察的数应处于的位置
  }
  return inputNums;
};

var arr = [1, 0, 6, 16, 8, 1];
// console.log(bubbleSort(arr), quickSort(arr));
console.log(insertSort(arr));
