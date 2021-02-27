// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const obj = {};
  for (let i = 0; i <= A.length; i++) {
    obj[i + 1] = true;
  }
  for (let i of A) {
    delete obj[i];
  }
  return parseInt(Object.keys(obj)[0]);
}

console.log(solution([1, 3, 4, 6, 2]));
