// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
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
    return obj[dominator][0];
  } else {
    return -1;
  }

  // console.log(dominators);
  // return dominators[0];
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
