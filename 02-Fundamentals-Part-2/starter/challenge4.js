const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let tip;
let total;
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
};

for (let b = 0; b < bills.length; b++) {
  // console.log(bills[b]);
  tip = calcTip(bills[b]);
  total = bills[b] + tip;

  tips.push(tip);
  totals.push(total);
}

console.log(totals, tips);
