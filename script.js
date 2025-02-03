document.addEventListener("DOMContentLoaded", () => {
    const serviceButtons = document.querySelectorAll(".service-btn");
    const serviceInput = document.getElementById("service");

    serviceButtons.forEach(button => {
        button.addEventListener("click", () => {
            serviceInput.value = button.getAttribute("data-service");
        });
    });

    document.getElementById("bookingForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Appointment booked successfully!");
    });
});