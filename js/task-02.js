const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.getElementById("ingredients");

const ingregientsArrayRef = ingredients.map(el => {
  const ref = document.createElement('li');
  ref.textContent = el;
  ref.classList.add('item');
  return ref;
});

ulRef.append(...ingregientsArrayRef);