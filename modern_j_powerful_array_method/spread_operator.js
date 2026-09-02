//spread oparator three dot
//let newArr=[...oldArr]
//let newobj={...oldobj}
let cart=["fruuit","food"];
cart.push("egg");


//now
let cart2=[...cart,"egg"];
console.log(cart,cart2);
const personalInfor={
    name:"samad",
    age: 22,

};
const contactInfo={
   email:"meyadurrahman@gmail.com"
   ,phone:"1233423535"


};;


const fullprofile={
    ...personalInfor,
    ...contactInfo,
};
console.log(fullprofile);
