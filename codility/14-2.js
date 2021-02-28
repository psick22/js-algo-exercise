// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // K번 묶어서 길이가 K보다 크거나 같은 로프의 수의 최대값을 반환
  // A = [1,2,3,4,1,1,3]

  // K = 4

  let count = 0;
  let sum = 0;

  for (let i of A) {
    console.log('i', i);
    if (sum + i >= K) {
      console.log('sum+i', sum + i);
      count++;
      sum = 0;
    } else {
      sum = sum + i;
    }
  }
  return count;
}

console.log(solution(4, [1, 2, 3, 4, 1, 1, 3]));
