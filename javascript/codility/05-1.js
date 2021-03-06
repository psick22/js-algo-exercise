// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  // A-1까지 K의 배수
  const a = Math.floor((A - 1) / K);
  const b = Math.floor(B / K);
  return b - a;
}

console.log(Math.floor(5.95));
console.log(parseInt(5.95));
console.log(parseInt(0));

console.log(solution(11, 345, 17));
console.log(solution(1, 1, 11));
