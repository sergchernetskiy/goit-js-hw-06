const loginFormRef = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  /*   event.currentTarget.elements.email.value
  event.currentTarget.elements.password.value; */

  if (email.value === "" || password.value === "") {
    alert("Заповніть, будь ласка, всі поля!");
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log("value", value);
    console.log("name", name);
  });

  event.currentTarget.reset();
}

loginFormRef.addEventListener("submit", onFormSubmit);
