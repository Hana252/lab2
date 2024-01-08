function validateForm() {
    var name = document.getElementById("name").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var email = document.getElementById("email").value;


    // Reset error messages
    var nameError = document.getElementById("invalidName");
    nameError.innerHTML = "";
    var passError = document.getElementById("passError");
    passError.innerHTML = "";
    // Validate name
    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;

    }

    // Validate pass
    if (pass1 === "") {
        passError.innerHTML = "password is required";
        return false;
    } else if (pass1.length <= 4) {
        passError.innerHTML = "password must be mor than 4 num";
        return false;

    }
    //confirm pass

    var errorPass = document.getElementById("errorPass");
    errorPass.innerHTML = "";
    if (pass2 !== pass1) {
        errorPass.innerHTML = "Passwords do not match";
        return false;
    }
    // validate email

    var emailErorr = document.getElementById("emailErorr");
    emailErorr.innerHTML = "";

    if (email === "") {
        emailErorr.innerHTML = "Email is required";
        return false;
    } else {

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailErorr").innerHTML = "Invalid email format";
            return false;
        }
    }

    // Save user information in local storage
    saveUserInfo(name, email, pass1);

    // Form is valid
    alert("Registration successful!");

   
    return true;
}

function saveUserInfo(name, email, pass1) {
     // Retrieve existing user information from localStorage
     var existingUsersString = localStorage.getItem('users');
     var existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

     // Add new user information to the array
     existingUsers.push({ name: name, email: email, pass1: pass1 });

     // Convert the array to a JSON string
     var updatedUsersString = JSON.stringify(existingUsers);

     // Save the updated JSON string in local storage
     localStorage.setItem('users', updatedUsersString);



}
