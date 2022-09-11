const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

function onInputFocus(event) {
  const requiredLength = Number(event.target.dataset.length);

  onAddClass("invalid");
  onRemoveClass("valid");
  /* event.target.classList.add("invalid");
  event.target.classList.remove("valid"); */
  /* console.log(requiredLength);
  console.log(event.target.value.length); */

  if (requiredLength === event.target.value.length) {
    onAddClass("valid");
    onRemoveClass("invalid");
    /* event.target.classList.remove("invalid");
    event.target.classList.add("valid"); */
  }
}

function onAddClass(add) {
  event.target.classList.add(add);
}

function onRemoveClass(remove) {
  event.target.classList.remove(remove);
}

inputRef.addEventListener("blur", onInputFocus);
