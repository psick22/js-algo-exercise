function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const obj = {};
  let answer = -1;
  // X=5 ->1,2,3,4,5

  // O(N)
  for (let i = 1; i <= X; i++) {
    obj[i] = true;
  }

  A.forEach((item, index) => {
    item = item.toString();
    if (obj[item]) {
      delete obj[item];
      answer = index;
    }
  });

  if (Object.keys(obj).length !== 0) {
    answer = -1;
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 4, 4]));
