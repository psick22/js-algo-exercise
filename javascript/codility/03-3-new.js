// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let answer;
  let sum1 = A[0];
  let sum2 = A.reduce((acc, cur) => acc + cur, 0) - A[0];
  for (let i = 0; i < A.length - 1; i++) {
    console.log(i, answer);
    if (i === 0) {
      answer = Math.abs(sum1 - sum2);
    } else {
      sum1 += A[i];
      sum2 = sum2 - A[i];
      answer = answer < Math.abs(sum1 - sum2) ? answer : Math.abs(sum1 - sum2);
    }
  }
  return answer;
}

console.log(solution([3, 1, 2, 4, 3]));
