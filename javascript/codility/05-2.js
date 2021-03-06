// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  let K = P.length;
  let answer = [];
  S = S.split('').map(item => {
    switch (item) {
      case 'A':
        return 1;
      case 'C':
        return 2;

      case 'G':
        return 3;

      case 'T':
        return 4;

      default:
        return 0;
    }
  });

  console.log(S);

  for (let i = 0; i < K; i++) {
    let obj = {};
    for (let j = P[i]; j <= Q[i]; j++) {
      if (obj[j]) {
        obj[S[j]] = 1;
      } else {
        obj[S[j]] = 1;
      }
    }
    answer.push(parseInt(Object.keys(obj)[0]));
  }

  return answer;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));
