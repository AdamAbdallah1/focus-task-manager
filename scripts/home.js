document.addEventListener("DOMContentLoaded", () => {

    let curUser = JSON.parse(localStorage.getItem("curUser")) || [];

    if (!curUser || !curUser.email) {
        alert("No user logged in.");
        window.location.href = "../index.html";
        return;
    }

    const headerUser = document.getElementById("header-username");
    headerUser.textContent = curUser.username;

    logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("curUser");
        window.location.href = "../index.html";
    })

    if (!Array.isArray(curUser.tasks)) {
        curUser.tasks = [];
    } 

    const ul = document.getElementById("task-list");
    curUser.tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.taskTitle} At ${task.taskDate}`;
        li.classList.add("list-item");
        ul.appendChild(li);
    });

    const addTaskBtn = document.getElementById("addTask");
    addTaskBtn.addEventListener("click", () => {
        const taskTitle = document.getElementById("task-input-title").value;
        const taskDate = document.getElementById("task-input-date").value;

        if (!taskTitle || !taskDate) {
            alert("Please fill in both fields.");
            return;
        }

        const newTask = {
            taskTitle: taskTitle,
            taskDate: taskDate
        };

        curUser.tasks.push(newTask);

        localStorage.setItem("curUser", JSON.stringify(curUser));

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users = users.map(user => user.email === curUser.email ? curUser : user);
        localStorage.setItem("users", JSON.stringify(users));

        const li = document.createElement("li");
        li.textContent = `${taskTitle} At ${taskDate}`;
        li.classList.add("list-item");
        ul.appendChild(li);

        document.getElementById("task-input-title").value = '';
        document.getElementById("task-input-date").value = '';

    });
});