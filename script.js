// ============================
// PART 1: EVENT HANDLING BASICS
// ============================

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// ============================
// PART 2: INTERACTIVE ELEMENTS
// ============================

// Counter Game
let count = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// Collapsible FAQ
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ============================
// PART 3: FORM VALIDATION
// ============================

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Error message elements
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let formSuccess = document.getElementById("formSuccess");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Validate Email using regex
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // If all fields are valid
  if (isValid) {
    formSuccess.textContent = "Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});
