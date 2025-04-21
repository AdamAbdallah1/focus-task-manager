document.addEventListener("DOMContentLoaded", () => {
    loginBtn = document.getElementById("login-button");
    regBtn = document.getElementById("register-button");

    loginBtn.addEventListener("click", () => {
        window.location.href = "./pages/login.html";
    });

    regBtn.addEventListener("click", () => {
        window.location.href = "./pages/register.html";
    });
});