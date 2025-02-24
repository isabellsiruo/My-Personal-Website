document.addEventListener("DOMContentLoaded", function () {
    console.log("success.js is loaded and running!");

    function goBack() {
        console.log("Going back to home...");
        window.location.href = "index.html"; 
    }

    const button = document.getElementById("return-home");
    if (button) {
        console.log("Return Home button found! Adding event listener...");
        button.addEventListener("click", goBack);
    } else {
        console.error("Return Home button NOT FOUND!");
    }
});
