document.getElementById("showBtn").addEventListener("click", showMenu);
document.getElementById("hideBtn").addEventListener("click", hideMenu);

function showMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("hideBtn").style.display = "block";
    document.getElementById("showBtn").style.display = "none";
}

function hideMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("hideBtn").style.display = "none";
    document.getElementById("showBtn").style.display = "block";
}
