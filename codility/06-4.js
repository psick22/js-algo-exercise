// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //  A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and
  // A[P] + A[Q] > A[R],
  // A[Q] + A[R] > A[P],
  // A[R] + A[P] > A[Q].
  // A = [10, 2, 5, 1, 8, 20]
  // (0, 2, 4) is triangular

  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 2] - A[i + 1]) {
      //overflow 주의
      return 1;
    }
  }
  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]));
