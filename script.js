// Variables for DOM manipulation
const form = document.getElementById("form");
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  message.textContent = "Please fill out all fields.";
  messageContainer.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(event) {
  event.preventDefault();
  // Validate Form
  validateForm();
}

// Event Listener
form.addEventListener("submit", processFormData);
