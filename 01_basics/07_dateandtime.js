let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));
let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekday:"long"
    
})