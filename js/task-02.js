const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const elementsToAdd = [];

ingredients.forEach((ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredient;
  newEl.classList.add("item");
  elementsToAdd.push(newEl);
});

ingredientsList.append(...elementsToAdd);
