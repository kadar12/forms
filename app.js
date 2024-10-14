const formElement = document.querySelector("form");
const login = document.getElementById("login");

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(formElement);
  const formValues = Object.fromEntries(data);

  console.log(formValues);

  formElement.reset();
}

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Enter") {
    formElement.submit();
  }
});

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
