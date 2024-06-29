// Variables for DOM manipulation
const form = document.getElementById("form");
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    messageContainer.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Check to see if passwords match
  if (passwordEl1.value === passwordEl2.value) {
    passwordMatch = true;
    passwordEl1.style.borderColor = "green";
    passwordEl2.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    passwordEl1.style.borderColor = "red";
    passwordEl2.style.borderColor = "red";
    return;
  }
  // If Form is valid and passwords match
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

// Store Form Data
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(event) {
  event.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if Valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
