// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const obj = {};
  let answer = 0;

  A.forEach((item, index) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
  });

  return parseInt(Object.keys(obj).length);
}

console.log(solution([]));

// N개의 정수로 이루어진 Array A를 받아서 distinct values의 갯수를 반환하는 함수

// A =[2, 1, 1, 2, 3, 1] => return 3
