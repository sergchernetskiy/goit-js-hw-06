const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
/* console.log(refs); */

function onInputSizeRange(event) {
  /* console.log(event.target.value); */
  refs.text.style.fontSize = `${event.target.value}px`;
}

refs.fontSizeControl.addEventListener("input", onInputSizeRange);
