/**
 * 题目：求滑动窗口最大值
 */
var maxSlidingWindow = function(nums, k) {
  // window存nums的下标、且window[0]是窗口数的最大值
  // res存的结果
  const window = [], res = [];
  for(let i = 0; i< nums.length; i++) {
    const num = nums[i];
    // 先判断要不要把最左边的元素踢出去？？？
    if(window[0] <= i - k) { // 超过下标 
      window.shift();
    }
  // 进来一个数，先从window最右边比，小的全扔掉,不成立的话什么都不做
    while(nums[window[window.length - 1]] <= num) {
      window.pop()
    }
    // 每次都会把下标存入window
    window.push(i);
    // 窗口至少存了k个数之后才取最大值，即i-k+1 > = 0，[i, i-k+1]时取最大值 nums[0];
    if(i >= k - 1) {
      res.push(nums[window[0]])
    }
  }
  return res;
};
