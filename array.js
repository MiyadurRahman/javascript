const name=["miyad","ratul","emad","sifat"];
console.log(name[0]);
let number=[10,20,30,40];
console.log(name[0],number[6]);



//built in method

name.push("rakib");
console.log(name);
name.pop();
console.log(name);
name.unshift("rakib"); //add at first index
console.log(name);
name.shift();//removes from first
console.log(name);



name.splice(1,0/*delete count*/ ,"baker");
console.log(name);