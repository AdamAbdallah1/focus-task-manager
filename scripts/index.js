function addTask() {
    const taskInputTitle = document.getElementById("task-input-title");
    const taskTitle = taskInputTitle.value;

    const taskInputDate = document.getElementById("task-input-date");
    const taskDate = taskInputDate.value;

    if (taskInputDate.value != "" && taskInputDate !=  "") {
        const ul = document.getElementById("task-list");
        const li = document.createElement("li");
        li.textContent = `Task: ${taskTitle} At: ${taskDate}`;
        ul.appendChild(li);

        taskInputTitle.value = "";
        taskInputDate.value = "";
    }
}