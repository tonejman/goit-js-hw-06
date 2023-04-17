function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const createdELToAdd = [];
  const initialSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const sizeEl = initialSize + i * 10;
    const div = document.createElement("div");

    div.style.height = `${sizeEl}px`;
    div.style.width = `${sizeEl}px`;
    div.style.backgroundColor = getRandomHexColor();

    createdELToAdd.push(div);
  }
  return createdELToAdd;
};

const destroyBoxes = () => {
  divBoxes.innerHTML = "";
  input.value = "";
};

buttonCreate.addEventListener("click", () => {
  const partsToAdd = createBoxes(input.value);
  divBoxes.append(...partsToAdd);
});

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});
