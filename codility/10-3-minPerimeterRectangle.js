// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let factors = [];
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (i * i > N) {
      break;
    }
    if (i * i === N) {
      factors.push([i, i]);
      break;
    }
    if (N % i === 0) {
      factors.push([i, N / i]);
    }
  }

  let minPerimeter = Number.MAX_SAFE_INTEGER;
  factors.forEach((item, index) => {
    let peri = 2 * (item[0] + item[1]);
    if (peri < minPerimeter) {
      minPerimeter = peri;
    }
  });

  console.log(factors);
  console.log(minPerimeter);

  return minPerimeter;
}

solution(12515);

// 정수 N => 직사각형의 넓이
// goal : 넓이가 N인 직사각형의 최소 둘레
// N = A*B ->
// N의 약수 세트를 구해서 최소가 되는 2(A+B) 를 구하면됨
