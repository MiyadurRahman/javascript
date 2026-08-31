// we will build a order processing system to understand dry and how important a function 
function isValidprice(price){
    return typeof price ==="number" && price>0;
}
function isValidEmail(email){
    return email.includes("@") && email.includes(".");
}
function calculateDiscount(price,discountpercent){
    if(!isValidprice(price)){
        return 0;

    }
    let discountamount=(price*discountpercent)/100;
    return price-discountamount;
}

function calculateFinalBILL(price,vatpercentage=15){
    let vat=(price*vatpercentage)/100;
    return price +vat;
}

function formatbdt(amount){
    return amount.toFixed(2) +"bdt";

}
function capitalized(str){
    if(!str){
        return "";
    
    }
    return str.charAt(0).toUpperCase()+ str.slice(1);



}
function processorder(user,itemprice,discountcode){
    console.log("processing order for"+" "+ capitalized(user.name));
   if(!isValidEmail(user.email)){
    console.log("error: invalid user email");
    return;
   }
   let currentprice=itemprice;
   if(discountcode=="NLB"){
    currentPrice=calculateDiscount(itemprice,20);
    console.log("20 % discount applied");

   }
   let totalbill=calculateFinalBILL(currentPrice);
   console.log("final amount to pay: ", formatbdt(totalbill));
   console.log("oder completed successfully");



}

   let user1={

name:"miyad",email:"meyadurrahman777@gmail.com"

    
   };
processorder(user1,2000,"NLB");

