// Use in initial setup to get ze DOM
//console.dir(window.document);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! 1
//! This ection is where we bring in items from HTML
// Query Selector for Add Task button
// Assigns .btn to the constant addTask.
// Button is being identified by .btn which is identifying the class.
const getClass = document.querySelector('.btn');
// console.log('Identified by class: ', getClass);
// For bigger apps identify the element by id.
// Another way to notate it is "document.querySelector("#save-task");"
const addTask = document.getElementById('save-task');
// console.log('Identified by id: ', addTask);
// console.log(addTask); // Console log to check what is being identified.

// Identifies the ul where the tasks are going to be nested under
var tasksToDoEl = document.getElementById('tasks-to-do');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! 3
//! Actual creation of the new item
//When addTask is clicked run this function
const createTask = function () {
  //create an li element and assign it to addItemEl
  var addItemEl = document.createElement('li');
  //give addItemEl the class task-item
  addItemEl.className = 'task-item';
  //insert this text into addItemEl
  addItemEl.textContent = 'This is a new task.';
  //Assign addItemEl to task-to-do
  //Parent goes first, item in parentesys is child
  tasksToDoEl.appendChild(addItemEl);
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! 2
//! Event listenter
//Event listener to verify the correct button is being clicked.
//First the button needs to be brought into js via var/const. At top of page.
// addTask.addEventListener('click', function () {alert('add Task button clicked');});

// when addTask is triggered on click, it calls the function createTask to execute.
addTask.addEventListener('click', createTask);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
