let techstacks=["js","react","nodejs","nextjs"];
for(const tech in techstacks){

    console.log("learning: ",techstacks[tech]);
}
//both are same
for(const tech of techstacks){

    console.log("learning: ",tech);
}


let object={
name: "mr.x",
age:100,
address:"dhaka",

};


for(let ele in object)
{
    // console.log(object);


    console.log(ele,object[ele]);
}

let marks=50;
for(let i=marks; i<=100;i++){

    if(i>60){
        break;
    }
    console.log(i);
}


for(let i=1;i<15;i++)
{ if(i%2 !=0){
continue;
}

    console.log( i);



}