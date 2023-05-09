const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (Number(inputRef.value.length) === Number(inputRef.dataset.length)) {
    inputRef.classList.toggle("invalid");
    inputRef.classList.add("valid");

    return;
  }
  inputRef.classList.add("invalid");
}
