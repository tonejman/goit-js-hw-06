const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const valueItem = document.querySelector('#value');
let counterValue = 0;

const incrementClick = () => {
  counterValue++;
  valueItem.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementClick);

const decrementClick = () => {
  counterValue--;
  valueItem.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);

