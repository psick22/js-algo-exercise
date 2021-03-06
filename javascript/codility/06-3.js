// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  // [0, 1, 1, 2, 4, 5]
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (i + A[i] >= j - A[j]) {
        count++;
      }
      if (count > 10000000) {
        return -1;
      }
    }
  }

  return count;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
// A = [1, 5, 2, 1, 4 ,0] => radiuses of the discs
// center = index
// J < K 라고 가정하면
// J+A[J] >= K-A[K] 라면 교차한다.

// 오름차순으로 sorting 하고
