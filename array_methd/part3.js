//reduce,srt,chaining

let products = [
	{ title: "Laptop", price: 800, inStock: true },
	{ title: "Phone", price: 500, inStock: true },
	{ title: "Headphones", price: 80, inStock: false },
	{ title: "Keyboard", price: 40, inStock: true }
];
//reduce

let totalPrice=products.reduce((acc,current)=>{
return acc+= current.price;
},0)//accumulate joma kore, ar current ekta ekta kore elment dibe
console.log(totalPrice);


//sorting
let sorted=[10,30,40,50,60,30];
let sort=sorted.sort();
console.log(sort);

let sortdesc=sorted.sort((a,b)=> b-a);
console.log(sortdesc);