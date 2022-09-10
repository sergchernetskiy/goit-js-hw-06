const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", inputChange);

function inputChange(event) {
  const { value } = event.currentTarget;
  refs.nameLabel.textContent = value.trim();
  if (value === "") {
    refs.nameLabel.textContent = "Anonymous";
  }
}
