//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Vidhu"

//console.log(tinderUser);
const regularUser={
    email:"some@gmail.com"
    full name:{
        userfullname:{
            firstname:"vidhu"
            lastname:"chaudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
const users=[
    {
        id:1;
        name:"Vidhu";
    }
]