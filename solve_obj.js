let student ={
    name: "miyad",
    id: 101,
    marks:{
        bangla:75,
        english:82,
        math:90
    }
};
let totalmark=0;
let totalsub=0;
for(const ele in student.marks){
totalmark+=student.marks[ele];
totalsub++;
}
let avg=totalmark/totalsub;
console.log( avg);