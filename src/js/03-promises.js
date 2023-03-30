
import Notiflix from 'notiflix';

const form = document.querySelector('form');
const inputDelay = document.getElementsByName('delay')
const inputStep = document.getElementsByName('step')
const inputAmount = document.getElementsByName('amount')
const BtnEl = document.querySelector('button')

// BtnEl.setAttribute('disabled', '');


BtnEl.addEventListener('submit', handleFormSubmit);
// form.addEventListener('input', isInputFulfilled)

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
});
  
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  let delay = Number(inputDelay.value);
  let step = Number(inputStep.value);
  let amount = Number(inputAmount.value);

  for (let i = 1; i <= amount; i++){
    createPromise(i, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    delay += step;
  }

  form.reset();
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

