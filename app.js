//Define UI Variables
const form = document.querySelector('#task-form'); //Selects Entire Form
const taskInput = document.querySelector('#task'); //Selects Task Input Field
const taskList = document.querySelector('.task-list'); //selects ul
const clearTasks = document.querySelector('.clear-tasks'); //Selects clear task btn


//Call load all event listeners functiom
loadEventListeners(); 

//Create load all event listeners function 
function loadEventListeners(e) {

//Create the Add task event
form.addEventListener('submit', addTask);

//Remove Task listener (Make the x delete the task when it's clicked)
taskList.addEventListener('click', removeTask);

//Clear Task Event (for the clear all button)
clearTasks.addEventListener('click', clearAllTasks);
}

//Create the Add Task function (we add e because it is the event object and this function has to do with firing off events)
function addTask(e) {
    
    if(taskInput.value === '') {
        alert('Please add a task');
    }

//Create an li element
const li = document.createElement('li');

//Add a class to li element
li.className = 'collection-item';

//Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));



//Create new link element dynamically for the delete icon
const link = document.createElement('a');
//Add class to link element
link.className = 'delete-item secondary-content';
//Add Icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append Link to li
li.appendChild(link)

//append li to ul
taskList.appendChild(li);

//Clear input
taskInput.value = '';

e.preventDefault();
}

//Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
    
    if(confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();
    }


}


//Clear All Tasks
function clearAllTasks(e) {
    taskList.innerHTML = '';
}