/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var row = word1.length; // 行
  var col = word2.length; // 列
  // dp初始化
  var dp = new Array(row + 1).fill().map(() => new Array(col + 1).fill(0));

  // 边界处理
  // 第一列填上word1
  for (var i = 0; i <= row; i++) {
    dp[i][0] = i;
  }
  // 第一行填上word2
  for (var j = 0; j <= col; j++) {
    dp[0][j] = j;
  }
  
  for (var n = 1; n < row + 1; n++) {
    for (var m = 1; m < col + 1; m++) {
      if (word1[n - 1] == word2[m - 1]) {
        dp[n][m] = dp[n - 1][m - 1];
      } else {
        dp[n][m] = Math.min(dp[n - 1][m - 1] + 1, dp[n][m - 1] + 1, dp[n - 1][m] + 1)
      }
    }
  }
  return dp[row][col];
};
