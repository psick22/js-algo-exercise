// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length === 0) {
    return 0;
  }
  let end = B[0];
  let count = 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > end) {
      count++;
      end = B[i];
    }
  }
  return count;
}

console.log(solution([], []));
