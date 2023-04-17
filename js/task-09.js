function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanTextColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  const valueColor = getRandomHexColor();
  body.style.backgroundColor = valueColor;
  spanTextColor.textContent = valueColor;
});