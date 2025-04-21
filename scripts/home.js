document.addEventListener("DOMContentLoaded", () => {
    let curUser = JSON.parse(localStorage.getItem("curUser")) || [];
    headerUser = document.getElementById("header-username");
    headerUser.textContent = curUser.username;

    addTaskBtn = document.getElementById("addTask");
    addTaskBtn.addEventListener("click", () => {
        taskTitle = document.getElementById("task-input-title").value;
        taskDate = document.getElementById("task-input-date").value;

        tasks = {
            taskTitle: taskTitle,
            taskDate: taskDate
        };

        curUser.tasks.push(tasks);

        //console.log(curUser);

        ul = document.getElementById("task-list");
        li = document.createElement("li");
        li.textContent = `${tasks.taskTitle} At ${tasks.taskDate}`;
        li.classList.add("list-item");
        ul.appendChild(li);
    })
});