/**
 * @param {number[][]} grid
 * @return {number}
 */

/** 
 * 思路，每一个点的最小路径为 当前路径 + min(上项路径，左项路径)
 * 即 DP方程为：grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
 */
var minPathSum = function(grid) {
  var row = grid.length; // 行数
  var col = grid[0].length; // 列数
  // 由于第一行只有左项， 第一列只有上项，可以计算得到
  // 计算第一列
  for (var j = 1; j < col; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  // 计算第一行
  for(var i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (var i = 1; i < col; i++) {
    for (var j = 1; j < row; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[col - 1][row - 1]
};

/**
 * 拓展 路径上有障碍 则障碍的路径为0 多加一步判断障碍物的逻辑
 */ 