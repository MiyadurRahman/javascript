let fruits=["Apple","Banna","mango","jackfruits"];

let customfruits =fruits.find((f)=> f.length > 5)//find will just find the matched one and will stop

console.log(customfruits);


//includes
let  findfruit=fruits.includes("mango");
console.log(findfruit);



//some,it will give true if some element following oor false
let student=[
    {name:"miyad",marks:85},
    {name:"rahim",marks:45}, 
    {name:"faruk",marks:90}

];
let studentCheck=student.some((s)=> s.marks>40);
console.log(studentCheck);



//every
let studentCheck2=student.every((s)=> s.marks>85);
console.log(studentCheck2);