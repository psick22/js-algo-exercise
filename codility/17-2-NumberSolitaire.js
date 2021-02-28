// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let max = A[0];
  let currentPos = 0;
  let tempMax = -10001;
  let tempPos = 0;

  while (currentPos !== A.length - 1) {
    // console.log('while 문 시작, currentPos :', currentPos);

    let endpoint =
      currentPos + 6 < A.length - 1 ? currentPos + 6 : A.length - 1;

    for (let i = currentPos + 1; i <= endpoint; i++) {
      // console.log(i, 'A[i] :', A[i]);
      // 현재위치 +1 ~ +6 사이에서 max값 찾는다
      if (A[i] > tempMax) {
        // console.log('현재위치 +1 ~ +6 사이에서 max값 찾는다');
        tempMax = A[i];
        tempPos = i;
        // console.log('tempMax :', tempMax);
      } else {
        // console.log('tempMax 보다 작으므로 건너뜀');
        // console.log('tempMax :', tempMax);
      }

      // 현재치 +1 ~ +6 사이에 endpoint A[N-1] 가있다면
      // tempMax (1~6 구간내 최대값이)가 양수면 들렀다가고 음수면 바로 endpoint 로 가야함

      if (i === A.length - 1) {
        // console.log('마지막 ');
        if (tempMax > 0) {
          // console.log('tempMax가 양수이므로 이동');
          // tempMax, tempPos 유지
          tempMax = tempMax;
        } else {
          // console.log('tempMax가 음수이므로 끝으로 이동');
          // 음수면 바로 끝으로 이동해야되니 tempMax 변경
          tempMax = A[i];
          tempPos = i;
          // console.log('마지막 tempMax', tempMax);
        }
      }
    }

    // +1~+6사이에서 최대값 찾으면 이동
    currentPos = tempPos;
    max = max + tempMax;
    tempMax = -10001;

    // console.log('currentPos : ', currentPos);
    // console.log('max : ', max);
    // console.log('tempMax : ', tempMax);
  }

  return max;
}

console.log(solution([1, 2, 0, 9, -1, -2, 213, 15, -123, 15]));

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
