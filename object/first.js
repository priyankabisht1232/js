//object literals

// object.create       constructor

const mysym= Symbol("key1");

const JsUser ={
     name:"priynaka",
     "full name":"priyanaka Bisht",

     [mysym] :"mykey1",
     age: 20,
     location:"jaipur",
     email: "priynakbisht@google.com",
     isLoaggedIn: false,
     lastLoginDays:["monday", "Saturday"]
    }


   
//  console.log(JsUser.email);

//     console.log(JsUser["email"]);
//     console.log(JsUser ["full name"]);

//     console.log( JsUser[mysym]);
JsUser.email ="priyankabishtchatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUSer");

}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
