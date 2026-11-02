
function showHistory() {

    var historyTable = document.getElementById("historyTable");
    var emptyMessage = document.getElementById("emptyMessage");
    var totalRecords = document.getElementById("totalRecords");
    var totalQuantity = document.getElementById("totalQuantity");

    // Get saved records from browser
    var wasteRecords = JSON.parse(
        localStorage.getItem("wasteRecords")
    ) || [];

    historyTable.innerHTML = "";

    var quantitySum = 0;

    // Show message if no records exist
    if (wasteRecords.length === 0) {

        emptyMessage.style.display = "block";
        totalRecords.innerHTML = "0";
        totalQuantity.innerHTML = "0 kg";

        return;
    }

    emptyMessage.style.display = "none";

    // Display each record
    for (var i = 0; i < wasteRecords.length; i++) {

        var record = wasteRecords[i];

        quantitySum = quantitySum + Number(record.quantity);

        var row = document.createElement("tr");

        var statusClass = "status-pending";

        if (record.status === "Recycled") {
            statusClass = "status-recycled";
        }

        row.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + record.wasteType + "</td>" +
            "<td>" + record.quantity + " kg</td>" +
            "<td>" + record.wasteDate + "</td>" +
            "<td><span class='status-label " + statusClass + "'>" +
            record.status + "</span></td>" +
            "<td><button class='delete-btn' onclick='deleteWaste(" +
            i + ")'>Delete</button></td>";

        historyTable.appendChild(row);
    }

    totalRecords.innerHTML = wasteRecords.length;
    totalQuantity.innerHTML = quantitySum.toFixed(1) + " kg";
}


// Delete a record
function deleteWaste(index) {

    var confirmDelete = confirm(
        "Are you sure you want to delete this record?"
    );

    if (confirmDelete === true) {

        var wasteRecords = JSON.parse(
            localStorage.getItem("wasteRecords")
        ) || [];

        wasteRecords.splice(index, 1);

        localStorage.setItem(
            "wasteRecords",
            JSON.stringify(wasteRecords)
        );

        showHistory();
    }
}


// Display history when the page opens
showHistory();
