// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // counter :   (0, 0, 0, 0, 0)
  // A = [3,4,4,6,1,4,4]
  // A[K] = N+1이면 모든 counter를 max값으로 초기화

  const counter = new Array(N).fill(0);

  let max = 0;
  let tempMax = 0;

  A.forEach((item, index) => {
    if (item < N + 1) {
      counter[item - 1] = Math.max(counter[item - 1], max);
      counter[item - 1]++;
      tempMax = Math.max(counter[item - 1], tempMax);
      console.log(index, counter, tempMax, max);
    } else {
      max = tempMax;
      console.log('max', index, counter, tempMax, max);
    }
  });
  // max 적용 안된 것들 적용
  counter.forEach((item, index) => {
    counter[index] = Math.max(item, max);
  });
  return counter;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
