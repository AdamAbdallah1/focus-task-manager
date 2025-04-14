window.addEventListener("load", loadTasks);

function addTask() {
    const taskInputTitle = document.getElementById("task-input-title");
    const taskTitle = taskInputTitle.value;

    const taskInputDate = document.getElementById("task-input-date");
    const taskDate = taskInputDate.value;

    if (taskInputTitle.value != "" && taskInputDate !=  "") {
        const task = {
            title: taskTitle,
            date: taskDate
        };
        
        const tasks = getTasksFromStorage();
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTask(task);

        taskInputTitle.value = "";
        taskInputDate.value = "";
    }
}

function displayTask(task) {
    const ul = document.getElementById("task-list");

    const li = document.createElement("li");
    li.classList.add("task-item");

    const taskText = document.createElement("span");
    taskText.textContent = `Task: ${task.title}  At: ${task.date}`;

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.classList.add("del-button");

    delButton.addEventListener("click", () => {
        ul.removeChild(li);
        deleteTask(task);
    });

    li.appendChild(taskText);
    li.appendChild(delButton);
    ul.appendChild(li);
}

function getTasksFromStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => displayTask(task));
}

function deleteTask(taskToDelete) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => !(task.title === taskToDelete.title && task.date === taskToDelete.date));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}