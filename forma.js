document.addEventListener("DOMContentLoaded", function() {
    const newTaskInput = document.getElementById("new-task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-ul");

    let taskCounter = 1;

    addButton.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <div class="task-info">
                    <span class="task-text">${taskText}</span>
                </div>
                <button class="complete-button">Completar</button>
                <button class="delete-button"><i class="fas fa-trash"></i></button>
            `;
            taskItem.setAttribute("data-task-id", taskCounter);
            taskList.appendChild(taskItem);
            newTaskInput.value = "";
            taskCounter++;
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.closest("li").remove();
        } else if (event.target.classList.contains("complete-button")) {
            const task = event.target.closest("li");
            task.classList.toggle("completed");
            const taskText = task.querySelector(".task-text");
            if (task.classList.contains("completed")) {
                taskText.innerHTML += " <span>✅</span>";
            } else {
                taskText.lastElementChild.remove();
            }
        }
    });
});
