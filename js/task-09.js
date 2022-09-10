const refs = {
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange(event) {
  const randomColor = getRandomHexColor();

  refs.body.style.backgroundColor = randomColor;
  refs.color.textContent = randomColor;
}

refs.btn.addEventListener("click", onColorChange);
