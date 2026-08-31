const weight=process.argv[2];
const height=process.argv[3];
function calculate(weight,height)
{
    const bmi=weight / (height *height);
    return bmi;

}
const bmi =calculate(weight,height);
if ( bmi<18){
    console.log("under weight");
}
else if(bmi>18 && bmi<25 ){
    console.log("good health");
}
else{
    console.log("over weight")
}