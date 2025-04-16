window.addEventListener("load", loadTasks);

function addTask() {
    const taskInputTitle = document.getElementById("task-input-title");
    const taskTitle = taskInputTitle.value;

    const taskInputDate = document.getElementById("task-input-date");
    const taskDate = taskInputDate.value;

    const tasks = getTasksFromStorage();
    const id = tasks.length + 1; // Set ID based on current tasks length

    if (taskInputTitle.value != "" && taskInputDate != "") {
        const task = {
            id: id,
            title: taskTitle,
            date: taskDate,
            completed: false
        };
        
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

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.checked = task.completed;

    const taskText = document.createElement("span");
    taskText.textContent = `Id: ${task.id} - Task: ${task.title}  At: ${task.date}`;
    if (task.completed) {
        taskText.classList.add("completed");
    }

    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        taskText.classList.toggle("completed", checkbox.checked);

        const tasks = getTasksFromStorage().map(t =>
            t.id === task.id ? task : t
        );
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.classList.add("del-button");

    delButton.addEventListener("click", () => {
        ul.removeChild(li);
        deleteTask(task);
    });

    li.appendChild(checkbox);
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
    tasks = tasks.filter(task => task.id !== taskToDelete.id);
    
    // Reassign IDs to maintain the sequence
    tasks = tasks.map((task, index) => {
        task.id = index + 1; // Reassign IDs starting from 1
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Reload tasks to reflect updated IDs
    document.getElementById("task-list").innerHTML = '';
    tasks.forEach(task => displayTask(task));
}
