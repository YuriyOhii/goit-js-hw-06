const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const colorVar = getRandomHexColor();
  refs.span.textContent = colorVar;
  document.body.style.backgroundColor = `${colorVar}`
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}






