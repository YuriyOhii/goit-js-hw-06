const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  div: document.getElementById("boxes"),
};
let numberOfBoxes = 0;

refs.input.addEventListener("blur", onInputChange);
refs.buttonCreate.addEventListener("click", onButtonCreateClick);
refs.buttonDestroy.addEventListener('click', onButtonDestroyClick);

function onInputChange(evt) {
  numberOfBoxes = 0;
  if (
    evt.currentTarget.value >= +refs.input.min &&
    evt.currentTarget.value <= +refs.input.max
  ) {
    numberOfBoxes = Number(evt.currentTarget.value);
  };
}

function onButtonCreateClick() {
  const boxesMarkup = [];
  let widthAndHeight = 30;
  for (let i = 1; i <= numberOfBoxes; i += +refs.input.step) {
    boxesMarkup.push(`<div style="height: ${widthAndHeight}px; width: ${widthAndHeight}px; background-color: ${getRandomHexColor()};"></div>`);
    widthAndHeight += 10;
  };
  refs.div.insertAdjacentHTML('beforeend', boxesMarkup.join(''));
};

function onButtonDestroyClick() {
  refs.div.innerHTML = '';
  refs.input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

