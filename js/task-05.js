const refs = {
  input: document.getElementById("name-input"),
  span: document.getElementById("name-output"),
};
refs.input.addEventListener(
  "input",
  () =>
    (refs.span.textContent =
      refs.input.value.trim() === "" ? "Anonymous" : refs.input.value)
);
