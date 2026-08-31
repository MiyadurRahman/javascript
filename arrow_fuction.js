const weight=process.argv[2];
const height=process.argv[3];
const calculate =(weight,height)=>
{
    const bmi=weight / (height *height);
    return;

};

const bmi=calculate(weight,height);
console.log(bmi);