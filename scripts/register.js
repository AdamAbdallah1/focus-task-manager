document.addEventListener("DOMContentLoaded", () => {
    const regBtn = document.getElementById("register-button");
    regBtn.addEventListener("click", () => {
        const regUsername = document.getElementById("username").value;
        const regEmail = document.getElementById("email").value;
        const regPassword = document.getElementById("password").value;

        console.log(`Account: ${regEmail} : ${regPassword}`);
    })
})