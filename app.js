const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");

firstName.addEventListener("blur", enterFirstName);
lastName.addEventListener("blur", enterLastName);
email.addEventListener("blur", enterEmail);
phone.addEventListener("blur", enterPhoneNumber);
submit.addEventListener("click", submitForm);

function enterFirstName() {
  const reg = /^[a-zA-Z]([0-9a-zA-Z]){4,10}$/;
  let firstNameStr = firstName.value;
  console.log(firstNameStr);
  if (reg.test(firstNameStr)) {
    firstName.classList.add("is-valid");
    firstName.classList.remove("is-invalid");
  } else {
    firstName.classList.add("is-invalid");
    firstName.classList.remove("is-valid");
  }
}

function enterLastName() {
  const reg = /^[a-zA-Z]([0-9a-zA-Z]){4,10}$/;
  let lastNameStr = lastName.value;
  console.log(lastNameStr);
  if (reg.test(lastNameStr)) {
    lastName.classList.add("is-valid");
    lastName.classList.remove("is-invalid");
  } else {
    lastName.classList.add("is-invalid");
    lastName.classList.remove("is-valid");
  }
}

function enterEmail() {
  const reg = /^([0-9a-zA-Z]+)\@([0-9a-zA-Z]+)\.([a-zA-Z]){2,3}$/;
  let emailStr = email.value;
  console.log(emailStr);
  if (reg.test(emailStr)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
}

function enterPhoneNumber() {
  const reg = /^([0-9]){10}$/;
  let number = phone.value;
  console.log(number);
  if (reg.test(number)) {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
  } else {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  }
}

function submitForm(error) {
  error.preventDefault();
  let success = document.getElementById("success");
  let firstNameStr = firstName.value;
  if(firstNameStr.length > 0) {
    success.classList.add("show");
  }
  setTimeout(() => {
    success.classList.remove("show");
  }, 5000);
}
