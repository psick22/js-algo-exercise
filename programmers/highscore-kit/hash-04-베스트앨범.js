function solution(genres, plays) {
  let answer = [];
  let songs = genres.map((item, idx) => {
    return {
      index: idx,
      genre: item,
      plays: plays[idx],
    };
  });

  // 장르 순서 결정
  let genrePlays = {};
  songs.forEach((item, idx) => {
    genrePlays[item.genre] = genrePlays[item.genre]
      ? genrePlays[item.genre] + item.plays
      : item.plays;
  });

  let genreRanks = [];
  Object.entries(genrePlays)
    .sort(([, a], [, b]) => b - a)
    .forEach((item, idx) => {
      genreRanks.push(item[0]);
    });

  // 장르마다 플레이수로 곡 정렬하여서 최대 2곡 선정
  genreRanks.forEach((item, idx) => {
    let filteredSongs = songs.filter(song => song.genre === item);
    filteredSongs.sort((a, b) => b.plays - a.plays);
    answer.push(filteredSongs[0].index);
    if (filteredSongs[1]) {
      answer.push(filteredSongs[1].index);
    }
  });

  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500],
  ),
);

// {1: {genres:'classic',plays:500}
// index -> 고유번호
// return : [4, 1, 3, 0]
// 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
