const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const subject = document.getElementById("subject");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");

const taskList = document.getElementById("taskList");
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Task Added Button Clicked!");
    const task = taskName.value;
const subjectName = subject.value;
const date = dueDate.value;
const taskPriority = priority.value;

console.log(task);
console.log(subjectName);
console.log(date);
console.log(taskPriority);
taskList.innerHTML = `
    <div class="task-card">
        <h3>${task}</h3>
        <p><strong>Subject:</strong> ${subjectName}</p>
        <p><strong>Due Date:</strong> ${date}</p>
        <p><strong>Priority:</strong> ${taskPriority}</p>
    </div>
`;

});