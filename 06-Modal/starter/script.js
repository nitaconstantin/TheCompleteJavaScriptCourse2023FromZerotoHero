'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  //   btnsOpenModal[i].addEventListener('click', function () {
  //     document.querySelector('.modal').classList.remove('hidden');
  //     document.querySelector('.overlay').classList.remove('hidden');

  //   });
  console.log(btnsOpenModal[i].textContent);
}
// modals.forEach(modal => {
//   modal.addEventListener('click', function () {
//     document.querySelector('.modal').classList.remove('hidden');
//     document.querySelector('.overlay').classList.remove('hidden');
//   });
// });
