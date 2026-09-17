// study page//

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("studyBloomTasks")) || [];

// Add task//
function addTask() {
  //get input from user//
  const input = document.getElementById("taskInput");

  //stores what user wrote and removes extra spaces//
  const taskText = input.value.trim();

  //Doesn't add empty tasks
  if (taskText === "") {
    return;
  }

  // Save the new task//
  tasks.push({
    text: taskText,
    completed: false,
  });

  localStorage.setItem("studyBloomTasks", JSON.stringify(tasks));

  const taskList = document.getElementById("taskList");

  // Create new task://
  //This basically means creating a new and naming it task//
  const task = document.createElement("div");
  task.className = "task";

  // Put the checkbox, task text, and delete button inside
  task.innerHTML = `
    <input type="checkbox" onchange="updateProgress()">  
    <span>${taskText}</span>  
    <button class="delete" onclick="deleteTask(this.parentElement)">  
      <img class="taskBin" src="assests/bin.png" alt="Delete">
    </button>
  `;

  // Add the task to the list
  taskList.appendChild(task);

  // Clear the input box
  input.value = "";

  updateProgress();
}

// Delete task//
function deleteTask(taskElement) {
  // Remove task from the page
  taskElement.remove();

  // Save the remaining tasks//
  saveTasks();

  updateProgress();
}

// Save tasks//
function saveTasks() {
  const taskElements = document.querySelectorAll("#taskList .task");

  tasks = [];

  taskElements.forEach((task) => {
    const taskText = task.querySelector("span").textContent;
    const completed = task.querySelector("input").checked;

    tasks.push({
      text: taskText,
      completed: completed,
    });
  });

  localStorage.setItem("studyBloomTasks", JSON.stringify(tasks));
}

//Update tasks//
function updateProgress() {
  const taskList = document.querySelectorAll("#taskList .task");

  const checkedTasks = document.querySelectorAll(
    "#taskList .task input[type='checkbox']:checked"
  );

  document.getElementById("taskProgress").textContent =
    checkedTasks.length + "/" + taskList.length;

  // Save checkbox changes//
  saveTasks();
}

// Load saved reminders//
let reminders = JSON.parse(localStorage.getItem("studyBloomReminders")) || [];

// reminder button for calendar//
function addReminder() {
  const input = document.getElementById("reminderInput");

  const reminderText = input.value.trim();

  if (reminderText === "") {
    return;
  }

  // Save reminder//
  reminders.push(reminderText);

  localStorage.setItem("studyBloomReminders", JSON.stringify(reminders));

  const reminderList = document.getElementById("reminders");

  const newReminder = document.createElement("p");

  newReminder.innerHTML = `
    <span>• ${reminderText}</span>

    <button class="delete" onclick="deleteReminder(this.parentElement)">
      <img class="reminderBin" src="assests/bin.png" alt="Delete">
    </button>
  `;

  reminderList.appendChild(newReminder);

  input.value = "";
}

// Delete reminder//
function deleteReminder(reminderElement) {
  // Remove reminder from the page//
  reminderElement.remove();

  // Save the remaining reminders//
  saveReminders();
}

// Save reminders//
function saveReminders() {
  const reminderElements = document.querySelectorAll("#reminders p");

  reminders = [];

  reminderElements.forEach((reminder) => {
    const reminderText = reminder
      .querySelector("span")
      .textContent.replace("• ", "");

    reminders.push(reminderText);
  });

  localStorage.setItem("studyBloomReminders", JSON.stringify(reminders));
}

document.addEventListener("DOMContentLoaded", function () {
  // Load saved tasks//
  const taskList = document.getElementById("taskList");

  tasks.forEach((taskData) => {
    const task = document.createElement("div");

    task.className = "task";

    task.innerHTML = `
      <input 
        type="checkbox" 
        ${taskData.completed ? "checked" : ""}
        onchange="updateProgress()"
      >

      <span>${taskData.text}</span>

      <button class="delete" onclick="deleteTask(this.parentElement)">
        <img class="taskBin" src="assests/bin.png" alt="Delete">
      </button>
    `;

    taskList.appendChild(task);
  });

  // Load saved reminders//
  const reminderList = document.getElementById("reminders");

  reminders.forEach((reminderText) => {
    const newReminder = document.createElement("p");

    newReminder.innerHTML = `
      <span>• ${reminderText}</span>

      <button class="delete" onclick="deleteReminder(this.parentElement)">
        <img class="reminderBin" src="assests/bin.png" alt="Delete">
      </button>
    `;

    reminderList.appendChild(newReminder);
  });

  // Update progress when page loads//
  updateProgress();
});

const timerVideo = document.getElementById("timerVideo");
//stores how many seconds the user has studied.
let studySeconds = Number(localStorage.getItem("studyBloomStudyTime")) || 0;

let timerInterval;

timerVideo.addEventListener("play", () => {
  timerInterval = setInterval(() => {
    studySeconds++;
    localStorage.setItem("studyBloomStudyTime", studySeconds);
    updateStudyTime();
  }, 1000);
});

// updates study time//
function updateStudyTime() {
  const hours = Math.floor(studySeconds / 3600);

  const minutes = Math.floor((studySeconds % 3600) / 60);

  document.getElementById("studyTime").textContent =
    hours + "h " + minutes + "m";
}
updateStudyTime();
// Stop counting when video is stopped
timerVideo.addEventListener("pause", () => {
  clearInterval(timerInterval);
});

document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("studyBloomUser");

  if (savedName) {
    const getStartedBtn = document.querySelector(".get-started");

    if (getStartedBtn) {
      getStartedBtn.innerText = "Welcome, " + savedName + " !";
    }
  }
});
