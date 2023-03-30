

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const inputDelay = document.getElementsByName('delay')
const inputStep = document.getElementsByName('step')
const inputAmount = document.getElementsByName('amount')
const BtnEl = document.querySelector('button')

// BtnEl.setAttribute('disabled', '');

BtnEl.addEventListener('click', handleFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
});
  
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  let delay = 0;
  let step = inputStep[0].value;
  let amount = inputAmount[0].value;

  for (let i = 1; i <= amount; i++){
    delay = inputDelay[0].value + step * (i - 1);
    createPromise(i, delay)
      .then(({position, delay}) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({position, delay}) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
  }
  // form.reset();
}


// function isInputFulfilled(evt) {
//   evt.preventDefault();
//   const {
//     elements: { delay, step, amount }
//   } = evt.currentTarget;
//   if (Number(delay.value) === "" || Number(step.value) === "" || Number(amount.value) === "") {
//     Notiflix.Notify.failure("Please fill in all the fields!");
//     return;
//   }
//   if (Number(delay.value) <= 0 || Number(step.value) <= 0 || Number(amount.value) <= 0) {
//     Notiflix.Notify.failure("The value can't be negative or zero");
//     return;
//   }
//   BtnEl.removeAttribute('disabled')

// }

