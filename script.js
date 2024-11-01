const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipCodeInput = document.querySelector("#zip");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const form = document.querySelector("form");

const Handlers = (function () {
  function submitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
  }

  function emailValidate() {

  }

  return { submitHandler, emailValidate };
})();

form.addEventListener("submit", Handlers.submitHandler);
emailInput.addEventListener("input", Handlers.emailValidate);
