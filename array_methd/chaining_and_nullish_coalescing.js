let user1={
    name:"rahim",
    address:{
      city:"dhaka",
    },
};
let user2={
    name:"rahim",
    
};
// optional chaining  ->?,we use it when we donno if we have key information
console.log(user1?.address?.city);
console.log(user2?.address?.city);//herei have not addresss key in attribute,i use ? so it will donot givve error just will give underfinede

//nulish colescing->??,we use it when undefind or null
console.log(user2?.address?.city ?? "feni");