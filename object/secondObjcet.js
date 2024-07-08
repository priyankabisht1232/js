// const tinderUser = new Object()//singleton object

const tinderUser={} //non singleton object

tinderUser.id="12345abc",
tinderUser.name="Sammy",
tinderUser.isLoggedIn ="false"


// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
     userfullname :{
        firstname:"priya",
        lastname: "bisht"
     }
    }
}
// console.log(regularUser.fullname.userfullname);


const obj1 ={1: "a", 2: "b"}       // 2 object ko merge kerna
const obj2 ={3: "a", 4:"b"}

//const obj3 ={obj1,obj2};

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 ={...obj1, ...obj2}
// console.log(obj3);


const users =[
    
    {
        id :1,
      
        email :"priyankemail.com",
    },

    {
        id :1,
        email :"priyankemail.com",
    },

    {
        id :1,
        email :"priyankemail.com",
    },

]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isloggedIn'));

// console.log(tinderUser.propertyIsEnumerable());

    
//de stucture

const course = {
    name:"JS in hindi",
    price :"999",
    courseInSturctor :"hitesh"

}
// course.courseInSturctor

const {courseInSturctor :inStructor} = course

// console.log(courseInSturctor);
console.log(inStructor);

//JSON

// {
//     "name": "Ankit",
//     "coursename": "js in hindi",
//     "price": "free"
// }
