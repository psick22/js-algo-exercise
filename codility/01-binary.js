// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let bin = N.toString(2).split('');
  let gaps = [];
  let gap = 0;
  let count = 0;

  for (let i of bin) {
    if (i === '1') {
      if (count === 1) {
        gaps.push(gap);
        gap = 0;
      } else {
        count = 1;
      }
    } else {
      gap++;
    }
  }
  let max = Math.max(...gaps);
  if (max === -Infinity) {
    max = 0;
  }
  return max;
}
