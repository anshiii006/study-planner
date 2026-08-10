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
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Task Added Button Clicked!");
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

console.log(task);
console.log(subjectName);
console.log(date);
console.log(taskPriority);
const emptyMessage = document.querySelector(".empty-message");

if (emptyMessage) {
    emptyMessage.remove();
}
taskList.innerHTML += `
totalTasks.textContent = document.querySelectorAll(".task-card").length;
pendingTasks.textContent = document.querySelectorAll(".task-card").length;
completedTasks.textContent = 0;
    <div class="task-card">
        <h3>${task}</h3>
        <p><strong>Subject:</strong> ${subjectName}</p>
        <p><strong>Due Date:</strong> ${date}</p>
        <p><strong>Priority:</strong> ${taskPriority}</p>
       <button class="complete-btn">Complete</button>
<button class="delete-btn">Delete</button>

    </div>
`;
taskForm.reset();
const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        this.parentElement.remove();

    });

});
});
const completeButtons = document.querySelectorAll(".complete-btn");

completeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const taskCard = this.parentElement;

        taskCard.classList.toggle("completed");

        const completedCount =
            document.querySelectorAll(".task-card.completed").length;

        const totalCount =
            document.querySelectorAll(".task-card").length;

        const pendingCount = totalCount - completedCount;

        completedTasks.textContent = completedCount;
        pendingTasks.textContent = pendingCount;

    });

});
