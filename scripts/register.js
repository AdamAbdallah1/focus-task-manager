document.addEventListener("DOMContentLoaded", () => {
    const regBtn = document.getElementById("register-button");
    regBtn.addEventListener("click", () => {
        const regUsername = document.getElementById("username").value;
        const regEmail = document.getElementById("email").value;
        const regPassword = document.getElementById("password").value;

        //console.log(`Account: ${regEmail} : ${regPassword}`);

        if (regUsername && regEmail && regPassword) {
            const regUser = {
                username: regUsername,
                email: regEmail,
                password: regPassword,
                tasks: []
            };
    
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(regUser);
            localStorage.setItem("users", JSON.stringify(users));
    
            window.location.href = "../pages/login.html";
        }
    })
})