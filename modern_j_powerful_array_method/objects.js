//non-primitive
const bottle={
    brand:'apple',
    price: 45,
    color:'white',
    isClean:false


}
//non primitive
const subject={
    name:'biology',
    teacher: 'rasheda mam',
    examdate:'30 30feb',
    Chapters:['First','2nd']

}



const person={
    name: 'miyad',
    age:25,
    profession:'developer',
    salary:25000,
    married: true,
    "fav place":["chitagong","dhaka"]

}
console.log(person.profession)

console.log(person['name'])
const boyos=person['age']
console.log(boyos);
console.log(person["fav place"])