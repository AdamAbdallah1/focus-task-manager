function addTask() {
    const taskInputTitle = document.getElementById("task-input-title");
    const taskTitle = taskInputTitle.value;

    const taskInputDate = document.getElementById("task-input-date");
    const taskDate = taskInputDate.value;

    if (taskInputDate.value != "" && taskInputDate !=  "") {
        const ul = document.getElementById("task-list");
        const li = document.createElement("li");
        li.textContent = `Task: ${taskTitle} At: ${taskDate}` ;

        const delButton = document.createElement("button");
        delButton.textContent = "❌";
        delButton.id = "del-button";
        delButton.classList = "del-button";
        delButton.style.cursor = "pointer";
        delButton.style.marginLeft = "20px";

        delButton.addEventListener("click", () => {
            ul.removeChild(li);
        });

        li.appendChild(delButton);
        ul.append(li);

        taskInputTitle.value = "";
        taskInputDate.value = "";
    }
}