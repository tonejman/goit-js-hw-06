const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredient;
  newEl.classList.add("item");
  ingredientsList.append(newEl);
});