function validatelogin() {
  var enteredUsername = document.getElementById("name").value;
  var enteredPassword = document.getElementById("pass1").value;

  // Reset error messages
  var nameError = document.getElementById("invalidName");
  nameError.innerHTML = "";
  var passError = document.getElementById("passError");
  passError.innerHTML = "";


  // Retrieve user information from localStorage
  var existingUsersString = localStorage.getItem("users");

  if (!existingUsersString) {
    alert("No user information found. Please register.");
    return false;
  }

  // Parse the stored JSON string to an array of user objects
  var existingUsers = JSON.parse(existingUsersString);

  // Find the user with the entered username
  var foundUser = existingUsers.find(function (user) {
    return user.name === enteredUsername;
  });

  // Check if user was found
  if (!foundUser) {
    nameError.innerHTML = "Invalid username";
    return false;
  }

  // Check if entered password matches the stored password
  if (enteredPassword !== foundUser.pass1) {
    passError.innerHTML = "Invalid password";
    return false;
  }

  // Login successful
  alert("Login successful!");
  return true;
}

function login() {
  // Perform login validation here
  if (validatelogin()) {
    // Redirect to coins.html page
    window.location.href = "../HTML/coins.html";
  }
}
