function calcAverage(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
}
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(85, 54, 41);
const scoreDolphins2 = calcAverage(65, 54, 49);
const scoreKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  avgDolphins = scoreDolphins;
  avgKoalas = scoreKoalas;
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
