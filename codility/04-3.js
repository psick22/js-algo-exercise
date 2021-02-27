// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const obj = {};

  A.sort((a, b) => a - b);

  A.forEach((item, index) => {
    if (item > 0) {
      obj[item] = item;
    }
  });

  for (let i = 1; i < 1000001; i++) {
    if (!obj.hasOwnProperty(i)) {
      return i;
    }
  }
}

console.log(solution([1, 3, 6, 4, 5, 2, 20000]));
