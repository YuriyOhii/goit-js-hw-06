const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputRef.value.length === +inputRef.dataset.length) {
    return toggleClasses("valid", "invalid");
  }
  toggleClasses("invalid", "valid");
}

function toggleClasses(classNameToAdd, classNameToRemove) {
  inputRef.classList.add(`${classNameToAdd}`);
  inputRef.classList.remove(`${classNameToRemove}`);
}
