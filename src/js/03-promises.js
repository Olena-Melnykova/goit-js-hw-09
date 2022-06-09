import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    form: document.querySelector(".form"),
    delay: document.querySelector("[name=delay]"),
    step: document.querySelector("[name=step]"),
    amount: document.querySelector("[name=amount]")
} 

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
      setTimeout (() =>{
      if (shouldResolve) {
      resolve({position, delay});
      } else {
        reject({position, delay});
      }
    })},delay);
} 

refs.form.addEventListener("click", submitBtn)

function submitBtn(e) {
    e.preventDefault();

    for (let i = 0; i < refs.amount.value; i += 1) {
    const position = i+1;
    const delay = (Number(refs.delay.value)) + (Number(refs.step.value))*i;
    setTimeout(() =>{createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })},delay); 
  }
}

