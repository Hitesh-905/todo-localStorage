const inputBox=document.getElementById('todo-input')//the text field
const addtask=document.getElementById('add-task-btn')//the button which add a task to a list
const tasks=document.getElementById('todo-list')//the unordered list container


addtask.addEventListener('click',function(){
    const userInput = inputBox.value.trim()
    if(userInput==="") return ;

    const listItem=document.createElement('li')
    listItem.innerHTML=`
     ${userInput}
     <button>Delete<button>
    `
    const removeTask=listItem.querySelector('button')
    removeTask.addEventListener('click',function(){
        listItem.remove()
    })
    tasks.appendChild(listItem)
    inputBox.value=""

    listItem.addEventListener('click',function(){
        listItem.classList.toggle('completed')
    })

    localStorage.setItem('mykey','myvalue')
    
})
