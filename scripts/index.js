function addTask() {
    const taskInputTitle = document.getElementById("task-input-title");
    const taskTitle = taskInputTitle.value;

    const taskInputDate = document.getElementById("task-input-date");
    const taskDate = taskInputDate.value;

    console.log(`Task: ${taskTitle} at ${taskDate}`);
}