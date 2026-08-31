const students = [
    {
        id: 101,
        name: "Miyad",
        age: 21,
        dept: "CSE"
    },
    {
        id: 102,
        name: "Ratul",
        age: 22,
        dept: "EEE"
    },
    {
        id: 103,
        name: "Karim",
        age: 20,
        dept: "BBA"
    }
];

function addStudent(name,age,dept){

    let newid = students.length>0 ? students[students.length-1].id+1 : 101;
    let newstudent = {
        id: newid,
        name: name,
        age: age,
        dept: dept
    };
    students.push(newstudent);
    console.log("student added");





}
addStudent("miyad",21,"AI");

//want to see all student

function getAll(){
    for(const student of students){
        console.log(student);
    }
}
getAll();



function findStudent(id){
    let foundstudet=null;
    for(let student of students){
        if(student.id==id){
            foundstudet=student;
            break;
        }
    }
    if(foundstudet){
        console.log("found student: ",foundstudet);
        
    }
    else{
        console.log("error 404");
    }



}
findStudent(102);