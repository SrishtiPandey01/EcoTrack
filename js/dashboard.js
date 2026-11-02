
/* Display today's date */

var today = new Date();

var currentDate = document.getElementById("currentDate");

if (currentDate != null) {
    currentDate.innerHTML = "📅 Today: " + today.toDateString();
}


/* Logout Confirmation */

function logoutUser() {
    var confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout == true) {
        return true;
    } else {
        return false;
    }
}

