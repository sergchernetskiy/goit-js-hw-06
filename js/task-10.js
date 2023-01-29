function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector(".js-input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};
const items = [];

refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener("click", onBtnDestroyClick);

function onBtnCreateClick(e) {
  createBoxes(refs.input.value);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    item.style.backgroundColor = color;
    //item.textContent = i;
    item.style.width = `${i * 10 + 20}px`;
    //console.log(item.style.width);
    item.style.height = `${i * 10 + 20}px`;
    items.push(item);
  }
  refs.container.append(...items);
  console.log(...items);
}
function onBtnDestroyClick() {
  refs.container.innerHTML = "";
  refs.input.value = "";
  location.reload();
}
