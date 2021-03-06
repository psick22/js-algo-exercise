// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // P++ 하면서 결과값이 최소인 것 구해야함
  let length = A.length;
  let answer;
  let sum1 = 0;
  let sum2 = 0;
  let num = 0;
  const first = A.slice(0, 1);
  const second = A.slice(1);

  for (let P = 1; P < length; P++) {
    // console.log(first, second);
    let result = 0;
    if (P === 1) {
      sum1 = first[0];
      sum2 = second.reduce((acc, cur) => acc + cur, 0);
      result = Math.abs(sum1 - sum2);
      // console.log(second[0]);
      // console.log(sum1, sum2, result);
      num = second[0];
      first.push(second.shift());
    } else {
      sum1 = sum1 + first[first.length - 1];
      // console.log(second);
      sum2 = sum2 - num;
      num = second[0];
      result = Math.abs(sum1 - sum2);
      // console.log(sum1, sum2, result);
      first.push(second.shift());
    }

    if (answer < result) {
      answer = answer;
    } else {
      answer = result;
    }
  }
  return answer;
}

console.log(solution([3, 1, 2, 4, 3]));
