let students = [
    {
        id: 101,
        name: "Miyad",
        age: 22,
        department: "CSE",
        address: {
        city:"dhaka",//nested
        zip:1212

        }
        
    },
    {
        id: 102,
        name: "Ratul",
        age: 21,
        department: "EEE"
    },
    {
        id: 103,
        name: "Sakib",
        age: 23,
        department: "BBA"
    }
];

//old system
 const oldname=students[0].name;
 console.log(oldname);

 //new system
 const {id,name,age,department}=students[0];
 console.log(name);

const{name:stdname/*name aliasing*/ ,address:{city,zip}}=students[0];

console.log(stdname,city);
//array ar khetre
const arr=["red","green","black"];
const[first,second,third]=arr;
console.log(second);


let student1 = { id: 101,
        name2: "Miyad",
        age: 22,
        department: "CSE",
        address: {
        city2:"dhaka",//nested
        zip:1212,


        },
        hobbies:["gardening","painting"]
    };
    const {name2,address:{city2},hobbies:[firsthoobby]}=student1;
       console.log(name2,city,firsthoobby)