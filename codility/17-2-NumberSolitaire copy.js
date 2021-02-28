// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let N = A.length;
  let dp = new Array(N);
  // [, , , , , ,]

  dp[0] = A[0];

  for (let i = 1; i < N; i++) {
    console.log('i', i);
    console.log('dp[i-1]', dp[i - 1]);

    let max = dp[i - 1] + A[i];

    for (let j = 1; j <= 6; j++) {
      if (i - j >= 0) {
        max = Math.max(dp[i - j] + A[i], max);
      }
    }

    dp[i] = max;
  }

  return dp[N - 1];
}

// console.log(solution([1, 2, 0, 9, -1, -2, 213, 15, -123, 15]));
console.log(solution([1, -2, 0, 9, -1, -2]));

// A = [1, -2, 0, 9, -1, -2]

// N 개의 연속된 사각형이고 번호가 쓰여져 있음 (0 ~ N-1)
// 길이 N인 배열 A는 사각형의 번호를 가지고 있음
// initial State : square 0번에 조약돌 이있다.
// goal of the game: 조약돌을 N-1 번 사각형까지 옮기는 것

//매턴 주사위를 던지고 나오는 숫자 K => +K 만큼 조약돌을 이동
// 조약돌이 I에 있을 때 I+K 가 invalid 값이라면 다시던짐

// 게임이 끝나면 ( 조약돌이 N-1에 도착하면 )
// 결과를 계산 : sum of the numbers written on all marked squared

// given a non-empty array A of N integers
// returns the maximal result that can be achieved on the board represented by array A.

// 조약돌의 현재 위치로부터 1~6번째 중 가장 큰값을 찾아서 이동해야함
