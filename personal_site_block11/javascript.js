document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
            
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }
            
            // Redirect to success page
            window.location.href = "success.html";
        });
    }

    // Additional interactivity - Add hover effects dynamically
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "red";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
});
