// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const obj = {};

  for (let i of A) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  let dominator = null;

  if (Math.max.apply(null, Object.values(obj)) > A.length / 2) {
    let idx = Object.values(obj).findIndex(
      el => el === Math.max.apply(null, Object.values(obj)),
    );

    dominator = parseInt(Object.keys(obj)[idx]);
    // console.log('dominator', dominator);
  } else {
    dominator = null;
  }

  let dominators = [];
  if (dominator) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === dominator) {
        dominators.push(i);
        break;
      }
    }
  } else {
    dominators.push(-1);
  }

  // console.log(dominators);
  return dominators[0];
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
