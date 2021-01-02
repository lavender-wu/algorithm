// 每个字母出现的次数一样，位置不同的两个单词
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false;
  }
  var hash = {};
  for (var i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] == undefined ? 1 : hash[s[i]] + 1;
    hash[t[i]] = hash[t[i]] == undefined ? -1 : hash[t[i]] - 1;
  }
  for (var p in hash) {
    if (hash[p] != 0) {
      return false;
    }
  }
  return true;
};