
// TODO 需要再理解n m 和 i j 关系 
var longestCommonSubsequence = function(text1, text2) {
  // 以text1、text2构造二维数组
  // 从后往前看，如果最后两个相同，最长子序列为各自减一的最长子序列加一
  if (!text2 || !text1) {
    return 0;
  }
  var n = text1.length;
  var m = text2.length;
  // 构建一个n * m二维数组并填充为0
  var op = new Array();
  for (var k = 0; k < n + 1; k++) {
    op[k] = [...Array(m + 1)].map(v => 0);
  }
  console.log(op);
  for (var i = 1; i < n + 1; i++) {
    for(var j = 1; j < m + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        op[i][j] = op[i - 1][j - 1] + 1;
      } else {
        op[i][j] = Math.max(op[i - 1][j], op[i][j - 1])
      }
    }
  }

  return op[n][m];
};