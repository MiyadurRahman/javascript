console.log('connected');
let taskInput = document.getElementById("taskinput");

let addbtn = document.getElementById("btn");
let tasklist = document.getElementById("tasklist");

//array to push 
let tasks=[];
let taskIdCounter=1;

//render
function render() {
  tasklist.innerHTML = "";

  tasks.forEach((task) => {
    // create li
    let li = document.createElement("li");
    li.classList.add("task-item");

    // span
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = `id: ${task.id} completed: ${task.completed}`;

    // buttons wrapper
    let btnwrapper = document.createElement("div");
    btnwrapper.classList.add("task-button");

    // buttons
    let completebtn = document.createElement("button");
    completebtn.textContent = "YES";
    completebtn.addEventListener("click",()=>{
      complete(task.id);
    });

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "NO";
     deletebtn.addEventListener("click",()=>{
      deletetask(task.id);
    });

    // append buttons
    btnwrapper.appendChild(completebtn);
    btnwrapper.appendChild(deletebtn);

    // append span + buttons to li
    li.appendChild(span);
    li.appendChild(btnwrapper);

    // append li to tasklist
    tasklist.appendChild(li);
  });
}

function addtask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let newtask = {
    id: taskIdCounter++,
    text: taskText,
    completed: false,
  };

  tasks.push(newtask);
  taskInput.value = "";
  render();
}

addbtn.addEventListener("click", addtask);//passing function


function complete(id){
  let task=tasks.find((task)=>task.id ==id);
  task.completed=!task.completed;
  render();
}
function deletetask(id){
  //if false filter will remove that
 tasks=tasks.filter((task)=> task.id != id);//over writing old array with new array

render();
}










