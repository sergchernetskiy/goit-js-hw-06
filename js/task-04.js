const decrementBtnRef = document.querySelector(
  '[data-action="decrement"]'
);
const counterRef = document.querySelector("#value");
const incrementBtnRef = document.querySelector(
  '[data-action="increment"]'
);

let counterValue = 0;

const counterDecrement = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};
const counterIncrement = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};

decrementBtnRef.addEventListener("click", counterDecrement);
incrementBtnRef.addEventListener("click", counterIncrement);
