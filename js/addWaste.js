
function saveWaste() {

    // Get values from the form
    var wasteType = document.getElementById("wasteType").value;
    var quantity = document.getElementById("quantity").value;
    var wasteDate = document.getElementById("wasteDate").value;
    var status = document.getElementById("status").value;

    // Get error message elements
    var typeError = document.getElementById("typeError");
    var quantityError = document.getElementById("quantityError");
    var dateError = document.getElementById("dateError");
    var statusError = document.getElementById("statusError");
    var successMessage = document.getElementById("successMessage");

    // Clear old messages
    typeError.innerHTML = "";
    quantityError.innerHTML = "";
    dateError.innerHTML = "";
    statusError.innerHTML = "";
    successMessage.innerHTML = "";

    var isValid = true;

    // Validate waste type
    if (wasteType === "") {
        typeError.innerHTML = "Please select a waste type.";
        isValid = false;
    }

    // Validate quantity
    if (quantity === "" || Number(quantity) <= 0) {
        quantityError.innerHTML = "Please enter a quantity greater than 0.";
        isValid = false;
    }

    // Validate date
    if (wasteDate === "") {
        dateError.innerHTML = "Please select a date.";
        isValid = false;
    } else {
        var selectedDate = new Date(wasteDate);
        var today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            dateError.innerHTML = "Future dates are not allowed.";
            isValid = false;
        }
    }

    // Validate recycling status
    if (status === "") {
        statusError.innerHTML = "Please select a recycling status.";
        isValid = false;
    }

    // Show result
    
if (isValid === true) {

    var wasteRecords = JSON.parse(
        localStorage.getItem("wasteRecords")
    ) || [];

    var newRecord = {
        wasteType: wasteType,
        quantity: Number(quantity),
        wasteDate: wasteDate,
        status: status,
        description: document.getElementById("description").value
    };

    wasteRecords.push(newRecord);

    localStorage.setItem(
        "wasteRecords",
        JSON.stringify(wasteRecords)
    );

    successMessage.innerHTML =
        "Waste details saved successfully!";

    document.querySelector("form").reset();
}


    
    return false;
}
