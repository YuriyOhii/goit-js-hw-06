const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
    inputRef.classList.remove('invalid');
  Number(inputRef.value.length) >= Number(inputRef.dataset.length)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
}
