// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    console.log(i, Math.sqrt(N));
    if (i * i > N) {
      break;
    }
    if (i * i === N) {
      count++;
      break;
    }
    if (N % i === 0) {
      count += 2;
    }
    console.log('count', count);
  }
  return count;
}

console.log(solution(9));

// A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

// For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the number of its factors.

// For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].
