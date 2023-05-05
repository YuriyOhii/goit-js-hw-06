const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    display: document.getElementById('value'),
};
let counterValue = 0;

refs.decrement.addEventListener('click', onButtonMinusClick);
refs.increment.addEventListener('click', onButtonPlusClick);

function onButtonMinusClick() {
    counterValue -= 1;
    refs.display.textContent = counterValue;
};

function onButtonPlusClick() {
    counterValue += 1;
    refs.display.textContent = counterValue;
};
