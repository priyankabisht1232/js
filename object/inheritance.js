// class user{
//     constructor(username){
//         this.username = username;
//     }
//     logMe(){
//         console.log(`UserName is ${this.username}`);
//     }
// }
// class Teacher extends user{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password =password

//     }
//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }

// }
// const Users = new Teacher("priya", "priyanka@gamil.com", "1234");
// Users.addCourse()

// const ankit = new user("ankit")
// ankit.logMe()
// console.log(Users );


class user{
    constructor(username){
        this.username = username
        
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
  static  createId(){
        return `123`
    }
}
const priya = new user("priya")
// console.log(priya.createId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "Iphone@gamil.come")
// iphone.logMe()
console.log(iphone.createId());