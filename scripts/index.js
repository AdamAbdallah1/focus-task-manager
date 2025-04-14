function addTask() {
    const taskInputTitle = document.getElementById("task-input-title");
    const taskTitle = taskInputTitle.value;

    const taskInputDate = document.getElementById("task-input-date");
    const taskDate = taskInputDate.value;

    if (taskInputDate.value != "" && taskInputDate !=  "") {
        const ul = document.getElementById("task-list");
        const li = document.createElement("li");
        li.textContent = `Task:  ${taskTitle}     •      At: ${taskDate}` ;

        const delButton = document.createElement("button");
        delButton.textContent = "X";
        delButton.id = "del-button";
        delButton.classList = "del-button";
        delButton.style.cursor = "pointer";
        delButton.style.marginLeft = "165px";
        delButton.style.border = "none";
        delButton.style.fontSize = "18px";
        delButton.style.color = "blue";

        delButton.addEventListener("click", () => {
            ul.removeChild(li);
        });

        li.appendChild(delButton);
        ul.append(li);

        taskInputTitle.value = "";
        taskInputDate.value = "";
    }
}