/**
 * 题目： 判断一个数组是另一个数组的子集, 考虑同一个数组多次出现的情况
 *        如下，subArr是supArr的子集
 */

var subArr = [1, 1, 3, 9];
var supArr = [1, 1, 2, 5, 9];

// 方法1：基础两边循环
// var isSubset = function (subArr, supArr) {
//   const len = supArr.length;
//   var map = {};
//   for (let i = 0; i < len; i++) {
//     if (map[supArr[i]]) {
//       map[supArr[i]]++;
//     } else {
//       map[supArr[i]] = 1;
//     }
//   }

//   for (let j = 0; j < subArr.length; j++) {
//     if (!map[subArr[j]] || map[subArr[j]] === 0) {
//       return false;
//     } else if (map[subArr[j]]-- > 0) {
//     }
//   }
//   return true;
// };

// 方法2： 最优解！注意利用有序这个条件，同一个下标，若是subArr[i] < supArr[i], 说明非自己如下数组
// subArr = [1, 2, 5], supArr = [1, 3, 5]; 2 < 3, 一定是非子集
var isSubset = (subArr, supArr) => {
  var i = 0; // subArr遍历下标
  var j = 0; // supArr遍历下标
  while (i < subArr.length && j < supArr.length) {
    if (subArr[i] === supArr[j]) {
      i++;
      j++;
    } else if (subArr[i] > supArr[j]) {
      // 同一个下标子元素比较大时，父下标往后移（+1），继续比较
      // subArr = [1, 2, 5], supArr = [1, 2, 3, 5];
      j++;
    } else {
      return false;
    }
  }
  // 退出循环时存在两种情况，分别是子数组全部遍历完毕或者父数组全部遍历完毕
  if (i === subArr.length) {
    // 子数组全部遍历完 说明是子集
    return true;
  } else {
    return false;
  }
};

console.log(isSubset(subArr, supArr));
