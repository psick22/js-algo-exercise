// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (S, P, Q) => {
  const genMap = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  const sStr = 'ACGT';
  const results = [];
  for (let i = 0; i < P.length; i++) {
    const slice = S.slice(P[i], Q[i] + 1);
    let min;
    for (let i = 0; i < 4; i++) {
      const char = sStr[i];
      if (slice.indexOf(char) > -1) {
        min = genMap[char];
        break;
      }
    }
    results.push(min);
  }
  return results;
};
console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));
