// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A.sort((a, b) => a - b);
  let left = A[0] * A[1] * A[2];
  let right = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];

  if (A[0] <= 0 && A[1] <= 0 && A[A.length - 1] > 0) {
    left = A[0] * A[1] * A[A.length - 1];
  }
  if (left > right) {
    return left;
  } else {
    return right;
  }
}

console.log(solution([-5, 5, -5, 4]));

// A = [-3, 1, 2, -2, 5, 6]

// maximal product of any triplet (A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).)
