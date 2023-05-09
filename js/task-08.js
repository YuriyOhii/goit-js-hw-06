const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Всі поля мають бути заповнені!!");
  } else if (email.value.trim() !== "" && password.value.trim() !== "") {
    const formData = {
      [email.name]: email.value,
      [password.name]: password.value,
      };
      console.table(formData);
  }
    evt.currentTarget.reset();
}
