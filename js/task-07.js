const refs = {
    input: document.getElementById('font-size-control'),
    span: document.getElementById('text'),
};
refs.span.style.fontSize = `${refs.input.value}px`;
refs.input.addEventListener('input', onRangeInput);

function onRangeInput() {
    refs.span.style.fontSize = `${refs.input.value}px`;
}