console.log("connected");
let taskInput = document.getElementById("taskinput");

let addbtn = document.getElementById("btn");
let tasklist = document.getElementById("tasklist");
// similarly
// let addbtn1=document.querySelector("button");

//again similar way to connect
// let addbtn1=document.querySelector("#btn");

// console.log(addbtn1);



// similarly
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Enter pressed", taskInput.value)
    }
});



// //create element
// let li=document.createElement("li");
// li.textContent="learn js";
// console.log("li");
// //tasklist er bitore to rakhte hobe mane ul er vitore
// tasklist.appendChild(li);


//input dewar maddome ad korbo
addbtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    let span = document.createElement("span");

    let btnwrap = document.createElement("div");
    let completebtn = document.createElement("button");
    completebtn.textContent = "✅";
    let deletebtn = document.createElement("button");
       deletebtn.textContent = "❌";
    btnwrap.appendChild(span);
    btnwrap.appendChild(completebtn);
    btnwrap.appendChild(deletebtn);


    li.appendChild(span);
    li.appendChild(btnwrap);
    //tasklist er bitore to rakhte hobe mane ul er vitore
    tasklist.appendChild(li);
    taskInput.value = "";
});
