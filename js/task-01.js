// 'use strict'

const categoryItems = document.querySelectorAll('#categories li.item');
const categoryNumbers = categoryItems.length;
const categoryNames = categoryItems;
console.log(`Number of categories: ${categoryNumbers}`);

categoryNames.forEach((name) => {
const heading = name.querySelector('h2').textContent;
const amountEl = name.querySelectorAll('li').length;
console.log("\n");
console.log(`Category: ${heading}`);
console.log(`Elements: ${amountEl}`);
});