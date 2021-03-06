// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const equi_leaders = [];
  for (let s = 0; s < A.length; s++) {
    // console.log(s);
    let left = A.slice(0, s + 1);
    let right = A.slice(s + 1);
    // console.log(left, right);
    // console.log('dominatorLeft', getDominator(left));
    // console.log('dominatorRight', getDominator(right));
    let dominatorLeft = getDominator(left);
    let dominatorRight = getDominator(right);

    if (dominatorLeft === dominatorRight) {
      if (dominatorLeft !== -1) {
      }
    }
  }
  return equi_leaders.length;
}

function getDominator(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const obj = {};

  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = [];
      obj[A[i]].push(i);
    } else {
      obj[A[i]].push(i);
    }
  }
  // console.log(obj);

  let dominator = null;

  let lengths = [];
  Object.values(obj).forEach(item => {
    lengths.push(item.length);
  });
  // console.log('lengths', lengths);

  if (Math.max.apply(null, lengths) > A.length / 2) {
    let idx = lengths.findIndex(el => el === Math.max.apply(null, lengths));
    // console.log(idx);

    dominator = parseInt(Object.keys(obj)[idx]);

    // console.log('dominator', dominator);
  } else {
    dominator = null;
  }

  if (dominator) {
    return dominator;
  } else {
    return -1;
  }

  // console.log(dominators);
  // return dominators[0];
}

console.log(solution([4, 3, 4, 4, 4, 2]));
// leader => dominator value
// equi leader => index S
