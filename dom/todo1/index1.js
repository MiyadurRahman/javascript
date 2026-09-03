console.log("connected");
let taskInput=document.getElementById("taskinput");

let addbtn=document.getElementById("btn");
let tasklist=document.getElementById("tasklist");
// similarly
// let addbtn1=document.querySelector("button");

//again similar way to connect
// let addbtn1=document.querySelector("#btn");

// console.log(addbtn1);


//making button work
addbtn.addEventListener("click",()=>{
    console.log(taskInput.value);
});
// similarly
taskInput.addEventListener("keydown",(event)=>{
if(event.key ==="Enter"){
    console.log("Enter pressed",taskInput.value)
}
});