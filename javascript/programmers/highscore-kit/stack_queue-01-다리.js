function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  let passed = [];
  // passed.length === truckNumber 가 될때까지 반복
  let bridge = new Array(bridge_length).fill(0);
  // 1초마다 bride에 트럭을 순서대로 넣고
  // 대기중인 첫번째 트럭의 무게 + 다리에 있는 트럭들의 무게 > weight 라면 패스

  let truckNumber = truck_weights.length;
  console.log('truckNumber', truckNumber);

  let total = truck_weights[0];
  bridge.pop();
  bridge.unshift(truck_weights.shift());

  while (passed.length !== truckNumber) {
    console.log('------------------------');
    console.log('while문 진입, time: ', answer);
    console.log('현재 다리 상태 : ', bridge);
    let escape;
    escape = bridge.pop();
    if (escape) {
      passed.push(escape);
      total -= escape;
    }
    // let total = bridge.reduce((acc, cur) => {
    //   return acc + cur;
    // }, 0);
    console.log('마지막 트럭 나가고 난 후 총 무게 ', total, 'limit : ', weight);

    if (truck_weights[0] + total > weight) {
      // NOTE 중량 초과했을 때 트럭이 나가는 시간을 계산해서 반복피하고 점프 해주면 좋을텐데 어떻게?
      // 가장 먼저 나갈 수 있는 트럭의 현재 위치를 안다면  다리끝까지의 거리 크기만큼의 array를 pop, unshift 해주고 answer +=거리 해주면 되는데

      bridge.filter((truck, index) => {
        truck !== 0;
      });

      bridge.unshift(0);
    } else {
      console.log('남은 트럭', truck_weights);
      let newTruck = truck_weights.shift();
      if (!newTruck) {
        bridge.unshift(0);
      } else {
        bridge.unshift(newTruck);
        total += newTruck;
      }
      //1초 증가
    }
    console.log('지나간 트럭 :', passed);
    answer++;
  }
  answer++;

  return answer;
}

//트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.

// console.log(solution(2, 10, [7, 4, 5, 6]));
//return : 8
// console.log(solution(100, 100, [10]));
// //return : 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
//return : 110
