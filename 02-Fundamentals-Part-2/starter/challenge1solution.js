const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avDolphins, avKoalas) {
  if (avDolphins >= avKoalas * 2) {
    console.log(`Dolphins win the trophy! 🏆( ${avDolphins} vs. ${avKoalas})`);
  } else if (avKoalas >= avDolphins * 2) {
    console.log(`Koalas win the trophy! 🏆( ${avKoalas} vs. ${avDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);
