// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let min = 1000000;
  let minIdx = 0;
  let avg;
  for (let i = 0; i < A.length; i++) {
    if (i + 1 < A.length) {
      avg = (A[i] + A[i + 1]) / 2;
      if (avg < min) {
        min = avg;
        minIdx = i;
      }
    }
    if (i + 2 < A.length) {
      avg = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (avg < min) {
        min = avg;
        minIdx = i;
      }
    }
  }
  return minIdx;
}

//average :  A[p]+...+A[q]/(Q-P+1)
console.log(solution([4, 2, 2, 5, 1, 5, 8]));
console.log(solution([8, 4, 2, 1, 1, 1, 1]));
