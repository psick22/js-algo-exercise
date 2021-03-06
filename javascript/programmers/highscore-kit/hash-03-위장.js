function solution(clothes) {
  const obj = {};
  let answer = 1;

  clothes.forEach(item => {
    obj[item[1]] = obj[item[1]] ? obj[item[1]] + 1 : 1;
  });

  Object.values(obj).forEach(item => {
    answer *= item + 1;
  });

  return answer - 1;
}

solution([
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);
//return : 5
