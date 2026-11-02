


function validateForm() {

    // Get values from input fields

    

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var mobile = document.getElementById("mobile").value;

    var password = document.getElementById("password").value;

    var confirmPassword = document.getElementById("confirmPassword").value;

    var terms = document.getElementById("terms").checked;


    // Clear previous messages

    document.getElementById("nameError").innerHTML = "";

    document.getElementById("emailError").innerHTML = "";

    document.getElementById("mobileError").innerHTML = "";

    document.getElementById("passwordError").innerHTML = "";

    document.getElementById("confirmError").innerHTML = "";

    document.getElementById("termsError").innerHTML = "";

    document.getElementById("successMessage").innerHTML = "";


    var valid = true;


    // Name Validation

    if (name == "") {

        document.getElementById("nameError").innerHTML =
            "Please enter your name.";

        valid = false;

    }


    // Email Validation

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {

        document.getElementById("emailError").innerHTML =
            "Please enter your email.";

        valid = false;

    }

    else if (!emailPattern.test(email)) {

        document.getElementById("emailError").innerHTML =
            "Please enter a valid email.";

        valid = false;

    }


    // Mobile Validation

    var mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {

        document.getElementById("mobileError").innerHTML =
            "Enter a valid 10 digit mobile number.";

        valid = false;

    }

    
    // Password Validation

    var passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$!%*?&])[A-Za-z0-9@#$!%*?&]{8,}$/;

    if (password == "") {

        document.getElementById("passwordError").innerHTML =
            "Please enter your password.";

        valid = false;

    }

    else if (!passwordPattern.test(password)) {

        document.getElementById("passwordError").innerHTML =
            "Password must contain 8 characters, uppercase, lowercase, number and special character.";

        valid = false;

    }



    // Confirm Password Validation

    if (confirmPassword == "") {

        document.getElementById("confirmError").innerHTML =
            "Please confirm your password.";

        valid = false;

    }

    else if (password != confirmPassword) {

        document.getElementById("confirmError").innerHTML =
            "Passwords do not match.";

        valid = false;

    }


    // Terms Validation

    if (terms == false) {

        document.getElementById("termsError").innerHTML =
            "Please accept the terms and conditions.";

        valid = false;

    }


    // Final Result

    if (valid == true) {

        document.getElementById("successMessage").innerHTML =
            "Registration successful! Welcome to EcoTrack.";

            return false;

    }

}



/* Login Form Validation */

function loginValidation() {

    // Get values from HTML fields
    alert("Login function is working!");

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    let message = document.getElementById("message");


    // Email Regular Expression

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Check Empty Fields

    if (email === "" || password === "") {

        message.innerText = "Please fill in all fields.";
        message.style.color = "red";

        return false;
    }


    // Check Email Format

    else if (!emailPattern.test(email)) {

        message.innerText = "Please enter a valid email address.";
        message.style.color = "red";

        return false;
    }


    // Check Password Length

    else if (password.length < 6) {

        message.innerText = "Password must contain at least 6 characters.";
        message.style.color = "red";

        return false;
    }


    // Validation Successful

    else {

        message.innerText = "Form validation successful! Demo login only.";
        message.style.color = "green";

        return false;
    }

}


/* Show and Hide Password */

function showPassword() {

    let password = document.getElementById("password");

    let button = document.getElementById("togglePassword");


    if (password.type === "password") {

        password.type = "text";

        button.innerText = "Hide";

    }

    else {

        password.type = "password";

        button.innerText = "Show";

    }

}
