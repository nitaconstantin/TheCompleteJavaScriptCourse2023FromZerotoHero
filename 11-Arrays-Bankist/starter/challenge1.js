const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  //   console.log(dogsJuliaCorrected);

  //   dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  // 'Dog number 1 is an adult, and is 5 years old or a puppy 'Dog number 2 is still a puppy 🐶''

  dogs.forEach(function (dog, i) {
    const type = dog > 3 ? 'adult' : 'puppy';
    console.log(`Dog number ${i + 1} is an ${type} and is ${dog} years old!`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
