document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-button");
    loginBtn.addEventListener("click", () => {
        const userEmail = document.getElementById("email").value;
        const userPassword = document.getElementById("password").value;
        //console.log(`User ${userEmail}: ${userPassword}`);
    })
})