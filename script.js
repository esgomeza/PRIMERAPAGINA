document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to My First Website!");
});
document.getElementById("changeColorButton").addEventListener("click", function() {
    document.querySelector("p").style.color = "red";
});