// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count++;
    } else {
      result += count;
    }
    // console.log(i, '0 count:', count, ' result:', result);
  }

  if (result > 1000000000) {
    result = -1;
  }
  return result;
}
// A = [0, 1, 0, 1, 1]

console.log(solution([0, 1, 0, 1, 1]));
