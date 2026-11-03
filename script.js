// This small JavaScript is only used for the trip form.
document.getElementById("tripForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    var userName = document.getElementById("name").value;

    document.getElementById("message").textContent =
        "Thank you, " + userName + "! Your trip details have been received.";

    this.reset();
});
