

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');

form.addEventListener('submit', handleFormSubmit);

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
  const {delay, amount, step} = evt.target.elements
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);

  for (let i = 0; i <= amountValue; i++){
    createPromise(i, delayValue)
      .then(({position, delay}) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({position, delay}) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
  }
  delayValue += stepValue;
}



