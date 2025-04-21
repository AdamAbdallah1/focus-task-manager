document.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(localStorage.getItem("curUser")) || [];
    headerUser = document.getElementById("header-username");
    headerUser.textContent = user.username;
});