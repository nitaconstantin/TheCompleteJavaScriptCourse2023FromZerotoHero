function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = (bill * 15) / 100;
  } else {
    tip = (bill * 20) / 100;
  }
  return tip;
}

// console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [];
const totals = [];

bills.forEach((bill) => {
  const tip = calcTip(bill);
  const total = bill + tip;
  tips.push(tip);
  totals.push(total);
});
console.log(tips, totals);
