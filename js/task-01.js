const ulCategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategoriesRef.length}`, "");

ulCategoriesRef.forEach((el) => {
  console.log("");
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
