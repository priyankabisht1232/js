 const pivalue =Object.getOwnPropertyDescriptor(Math, "PI");
 console.log(pivalue);

// console.log(Math.PI);
// Math.PI= 5;
// console.log(Math.PI);

 const mynewobject ={
    name: "course",
    price: 299,
    isAvalible:true,

    orderchai:function(){
        console.log("code ft gya");
    }

 }
 console.log(Object.getOwnPropertyDescriptor(mynewobject,"name"));

 Object.defineProperty(mynewobject,"name",{
    // writable:false,
    // enumerable:false
 })
 console.log(Object.getOwnPropertyDescriptor(mynewobject,"name"));

 for (const [key, value]of Object.entries(mynewobject)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
    
 }