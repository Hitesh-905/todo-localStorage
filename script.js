//picking up all the element id's where we will be adding event listeners
const inputBox=document.getElementById('todo-input')//the text field
const addtask=document.getElementById('add-task-btn')//the button which add a task to a list
const taskslist=document.getElementById('todo-list')//the unordered list container

//it loads the tasks from the local storage on reloading,or start with an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];



 // functionality for saving the data in the localStorage
function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}


addtask.addEventListener('click',function(){
    const userInput = inputBox.value.trim()
    if(userInput==="") return ;

    const newTask = {
        // We use the text for the object
        text: userInput, 
        completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    const listItem=document.createElement('li')
    listItem.innerHTML=`
     ${userInput}
     <button>Delete<button>
    `
    const removeTask=listItem.querySelector('button')
    removeTask.addEventListener('click',function(){
        listItem.remove()
    })
    taskslist.appendChild(listItem)
    inputBox.value=""

    listItem.addEventListener('click',function(){
        listItem.classList.toggle('completed')
    })  
})


