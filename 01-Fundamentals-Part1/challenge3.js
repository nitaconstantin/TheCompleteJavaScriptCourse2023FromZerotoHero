/* Write your code below. Good luck! 🙂 */
const dolphinScored = [96, 108, 89];
const koalasScored = [88, 91, 110];

function average(arr) {
  let sum = 0;
  arr.forEach((ar) => {
    sum += ar;
  });

  return sum;
}

const averageDolphin = average(dolphinScored) / dolphinScored.length;
const averageKoalas = average(koalasScored) / koalasScored.length;
// console.log(averageDolphin, average(dolphinScored) / 3);

function gratestAverage() {
  if (averageDolphin > averageKoalas) {
    console.log("Dolphins win the trophy");
  } else if (averageDolphin < averageKoalas) {
    console.log("Koalas win the trophy");
  } else {
    console.log("Both win the trophy");
  }
}

gratestAverage();
