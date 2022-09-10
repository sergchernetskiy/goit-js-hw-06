const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

function onInputFocus(event) {
  const requiredLength = Number(event.target.dataset.length);

  event.target.classList.add("invalid");
  /* console.log(requiredLength);
  console.log(event.target.value.length); */

  if (requiredLength === event.target.value.length) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
}

inputRef.addEventListener("blur", onInputFocus);
