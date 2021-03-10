/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
      arr.push(getString(i))
  }
  return arr;
};

function getString(n) {
  if (n % 3 === 0 && n % 5 === 0) {
      return 'FizzBuzz';
  } else if (n % 3 === 0) {
      return 'Fizz';
  } else if (n % 5 === 0) {
      return 'Buzz';
  } else {
      return String(n);
  }
  
}