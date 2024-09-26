// const student ={
//     fulname: "priyanka bisht",
//     marks: 97.3,

//     printmarks:function(){
//         console.log("marks =", this.marks);
//     },
// }

// const employee ={
//     calTax() {

//         console.log("Tax rate is 10%");
//     },
   
// };
// const karan ={
//     salary:50000,
//     calTax(){
//         console.log("Tax rate is 20%");
//     },
// };


// karan.__proto__ = employee;

// class ToyotaCar {
//   constructor(brand, mileage){
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage= mileage;
//   }

//       start(){
//         console.log("start");
//       }
//       stop(){
//         console.log("stop");
    
// }
// setBrand(brand) {
   ///   |objrct ke proparty
  // this.brandName = brand ;// <-argument same to uper h
//}
// }

// let fortuner = new ToyotaCar("fortuner", 10);          //constructor
// console.log(fortuner);
// // fortuner.setBrand("fortuner", 10);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);


//inheritence

class parent {
 
  hello() {
    console.log("hello");
  }
}
class child extends parent{}
// let obj = new child();

class person {
  constructor(){
  console.log("enter parent constructor");
    this.species = "homo sapiens";
  }
  eat(){
    console.log("eat");
  }
  // sleep(){
  //   console.log("sleep");

  // }
  // work (){
  //   console.log("don nothing");
  // }

}
//if child  & parent have same method , child method will be used(method overriding);

// class Engineer  extends person{
//   constructor(branch){
//     console.log("enter child constructor");
//     super();
//     this.branch = branch;
//     console.log("exit child consturctor");
//   }
//   work(){
//     console.log("Solve problem, build something");
//   }
// }

// let engObj = new Engineer("chemical eng");




//create a website for your college .Create a class user with 2 properties, name & email it also has a 
//method called viewData() that allows user to view website data
let DATA = "secret information";

class User{
  constructor(name, email){
       this.name =name;
       this.email = email;
  }
  viewData(){
    console.log("data =" , DATA);
  }
}
class Admin extends User{
  constructor(name, email){
    super(name, email);

  }
  editDate(){
    DATA = "some new value";
  }
}

let student = new User("priyanka", "pri12@gamil.com");
let student2 = new User("Nikit", "tyou@gmail.com");

let teacher = new User("Dean", "dean@college.com");

let Admin1 =new Admin("admin", "Admin@gmail.com");

//error Handing
let a=5;
let b=10;
console.log("a =" , a)
console.log("b=", b);
console.log("a+b =", a+b);
try{
console.log("a+b =", a+c); //error
} catch(err){
console.log(err);
}
console.log("a-b =", a-b);
console.log("a*b =", a*b);