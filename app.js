const formElement = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(formElement);
  const formValues = Object.fromEntries(data);

  console.log(formValues);

  formElement.reset();
}

formElement.addEventListener("submit", handleSubmit);

const ShowHiddenBtn = document.getElementById("show-hide");

function handleShowHide(event) {
  event.preventDefault();

  const PwInput = document.getElementById("pw-input");
  if (PwInput.type === "password") {
    PwInput.type = "text";
  } else {
    PwInput.type = "password";
  }
}

ShowHiddenBtn.addEventListener("click", handleShowHide);
