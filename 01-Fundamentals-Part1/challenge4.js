const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
const totalVal = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalVal}`
);
