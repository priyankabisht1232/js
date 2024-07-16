let a =10;
const b=20;
var c=30;

// console.log(a);
// console.log(b);
// console.log(c);

//////Arrow function/////////

const user ={
    username :"priya",
    price :999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage();
// console.log(this.user);

function chai(){
    // console.log(this);
}
chai();

const addTwo = (num1, num2)=>{
    return num1+num2
}
// console.log(addTwo(3,4))


//Immediately Invoked function Expressions(IIFE)

(function chai(){

    console.log( `DB CONNECTED`);
})();

(   (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('priynaka')


