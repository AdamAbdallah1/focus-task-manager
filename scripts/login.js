document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-button");
    loginBtn.addEventListener("click", () => {
        const userEmail = document.getElementById("email").value;
        const userPassword = document.getElementById("password").value;
        //console.log(`User ${userEmail}: ${userPassword}`);

        let regUsers = JSON.parse(localStorage.getItem("users")) || [];
        console.log(regUsers);

        const matchedUser = regUsers.find(user => (
            user.email === userEmail && user.password === userPassword
        ));

        if (matchedUser) {
            window.location.href = "../pages/home.html"
        } else {
            //console.log("Not found");
        }
    });
});