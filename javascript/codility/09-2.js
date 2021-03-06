// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length === 1 || A.length === 0) {
    return 0;
  }

  let min = A[0];
  let tempProfit = 0;
  let profit = 0;
  for (let i = 1; i < A.length; i++) {
    tempProfit = A[i] - min;
    if (A[i] < min) {
      min = A[i];
    }
    profit = Math.max(tempProfit, profit);
  }

  if (profit < 0) {
    return 0;
  }
  return profit;
}

// [23171, 21011, 21123, 21366, 21367]

// return : maximum possible profit from one transaction (impossible profit -> return 0)
