function validateForm() {
  let form = document.getElementById("userProfileForm");
  let fullName = document.getElementById("fullName");
  let phoneNumber = document.getElementById("phoneNumber");
  let favoriteNumber = document.getElementById("favoriteNumber");
  let favoriteMammal = document.getElementById("favoriteMammal");
  let address = document.getElementById("address");
  let dob = document.getElementById("dob");
  let zipCode = document.getElementById("zipCode");
  let gender = document.getElementById("gender");

  let valid = true;

  // Full Name: Presence check
  if (fullName.value.trim() === "") {
    fullName.classList.add("error");
    valid = false;
  } else {
    fullName.classList.remove("error");
  }

  // Phone Number: Presence check and format validation (Phone number pattern)
  if (!phoneNumber.value.match(/^\+?[1-9]\d{1,14}$/)) {
    phoneNumber.classList.add("error");
    valid = false;
  } else {
    phoneNumber.classList.remove("error");
  }

  // Favorite Number: Presence check and range validation (1 to 100)
  if (favoriteNumber.value < 1 || favoriteNumber.value > 100) {
    favoriteNumber.classList.add("error");
    valid = false;
  } else {
    favoriteNumber.classList.remove("error");
  }

  // Favorite Mammal: Presence check
  if (favoriteMammal.value.trim() === "") {
    favoriteMammal.classList.add("error");
    valid = false;
  } else {
    favoriteMammal.classList.remove("error");
  }

  // Address: Presence check
  if (address.value.trim() === "") {
    address.classList.add("error");
    valid = false;
  } else {
    address.classList.remove("error");
  }

  // Date of Birth: Presence check and future date validation
  const today = new Date().toISOString().split("T")[0];
  if (dob.value > today) {
    dob.classList.add("error");
    valid = false;
  } else {
    dob.classList.remove("error");
  }

  // Zip Code: Presence check and format validation (5 digits)
  if (!zipCode.value.match(/^\d{5}$/)) {
    zipCode.classList.add("error");
    valid = false;
  } else {
    zipCode.classList.remove("error");
  }

  // Gender: Presence check
  if (gender.value === "") {
    gender.classList.add("error");
    valid = false;
  } else {
    gender.classList.remove("error");
  }

  if (!valid) {
    alert("Please fill out all fields correctly.");
  }

  return valid; // Only submit if valid
}

// Prevent non-letter input in the "Favorite Four-Legged Mammal" field
document
  .getElementById("favoriteMammal")
  .addEventListener("keydown", function (event) {
    // Allow backspace, space, and alphabetic characters only
    if (
      (event.key < "A" || event.key > "Z") &&
      (event.key < "a" || event.key > "z") &&
      event.key !== " " &&
      event.key !== "Backspace"
    ) {
      event.preventDefault(); // Prevent non-letter input
    }
  });
