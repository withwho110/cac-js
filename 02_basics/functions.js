function sayMyName(){
    console.log("Vidhu");
}
//sayMyName()
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
const result=addTwoNumbers(3,4)
function loginusermessage(username){
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginusermessage("Vidhu"));


function CalculateCartPrice(...num1){
    return num1;
}
console.log(CalculateCartPrice(200,400,500));

const user={
    username:"vidhu"
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}