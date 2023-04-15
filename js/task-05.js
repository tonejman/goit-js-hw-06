const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value) {
    textOutput.textContent = event.currentTarget.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
});
