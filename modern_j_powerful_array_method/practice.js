let movies=[
{title:"Inception", year:2010,rating:8.8,genre:"Sci-fi"},
{title:"titanic", year:2010,rating:7.9,genre:"romace"},
{title:"walle", year:2010,rating:8.7,genre:"Sci-fi"},
{title:"avatar", year:2010,rating:7.8,genre:"Sci-fi"},
{title:"notebook", year:2010,rating:7.8,genre:"romance"},

]
let sort_on_rating=movies
?.filter((p)=>p.genre==='Sci-fi')
?.sort((a,b)=> b.rating-a.rating)
?.map((m)=>`title: ${m.title} ,rating: ${m.rating}`);
console.log(sort_on_rating);

let products = [
	{ title: "Laptop", price: 800, inStock: true },
	{ title: "Phone", price: 500, inStock: true },
	{ title: "Headphones", price: 80, inStock: false },
	{ title: "Keyboard", price: 40, inStock: true }
];

let product_stock = products
	.filter((product) => product.inStock === true)
	.sort((a, b) => a.price - b.price);

product_stock.forEach((product) => {
	console.log(`title: ${product.title}, price: ${product.price}`);
});

let total_cost = product_stock.reduce((total, product) => {
	return total + product.price;
}, 0);

console.log(`Total cost: ${total_cost}`);