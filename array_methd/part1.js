// foreach--> check objects one by one donot return
// 
//,map

//foreach ,from foreach we cannot return
let fruits=["Apple","Banna","mango "]

let newFruits = fruits.forEach((fruits,index)=>{
console.log(`${index+1} --> ${fruits}`);
// return `${index+1} --> ${fruits}` cannot return



});


//map ,returns



let newFruits2 = fruits.map((fruits,index)=> {
    
    return  `${index+1} --> ${fruits}`;


    
});

console.log(newFruits2);
//to upper cae
let newfruits3=fruits.map((fruits)=>fruits.toUpperCase());

console.log(newfruits3);



// filter
let newfruits4=fruits.filter((fruits)=>5<fruits.length);

console.log(newfruits4);

