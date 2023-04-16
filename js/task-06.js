const inputValidation = document.querySelector("#validation-input");
const dataLength = inputValidation.dataset.length;

inputValidation.addEventListener("blur", () => {
  inputValidation.classList.remove("valid", "invalid");
  if (inputValidation.value.length === Number.parseInt(dataLength)) {
    inputValidation.classList.add("valid");
  } else if (inputValidation.value.length > 0) {
    inputValidation.classList.add("invalid");
  }
});