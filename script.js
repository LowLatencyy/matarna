function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Stänger menyn när muspekaren inte längre är över menyn
document.getElementById("menu").addEventListener("mouseleave", function() {
    this.style.display = "none";
});
