let tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];

const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const subject = document.getElementById("subject");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");

const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");


// Add New Task
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const task = taskName.value;
    const subjectName = subject.value;
    const date = dueDate.value;
    const taskPriority = priority.value;

    const newTask = {
        name: task,
        subject: subjectName,
        dueDate: date,
        priority: taskPriority,
        completed: false
    };

    tasks.push(newTask);

    localStorage.setItem("studyTasks", JSON.stringify(tasks));

    displayTasks();

    taskForm.reset();

});


// Display Tasks
function displayTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <p class="empty-message">
                No study tasks added yet.
            </p>
        `;

        updateCounters();
        return;
    }

    tasks.forEach(function(task, index) {

        taskList.innerHTML += `
            <div class="task-card ${task.completed ? "completed" : ""}">

                <h3>${task.name}</h3>

                <p>
                    <strong>Subject:</strong> ${task.subject}
                </p>

                <p>
                    <strong>Due Date:</strong> ${task.dueDate}
                </p>

                <p>
                    <strong>Priority:</strong> ${task.priority}
                </p>

                <button 
                    class="complete-btn" 
                    onclick="completeTask(${index})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button 
                    class="delete-btn" 
                    onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

    });

    updateCounters();

}


// Complete / Undo Task
function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("studyTasks", JSON.stringify(tasks));

    displayTasks();

}


// Delete Task
function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("studyTasks", JSON.stringify(tasks));

    displayTasks();

}


// Update Dashboard Counters
function updateCounters() {

    const total = tasks.length;

    const completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    const pending = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;

}


// Load saved tasks when page opens
displayTasks();