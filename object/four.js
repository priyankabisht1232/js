const  user ={
    username: "priynaka",
    loginCount :1,
    singedIn: true,
  
    getuserDatails: function(){
        // console.log("got user detail from database");
        // console.log(`username ${this.username}`);
        // console.log(this);
    }
}
// console.log(user);
// console.log(user.getuserDatails());

function User(username, loginCount, isLoggedIn){
      this.username = username;
      this.loginCount =loginCount;
      this.isLoggedIn= isLoggedIn;

      return this
}

const userOne = new User("priya", 13, true)

const userTwo = new User("ankit", 15, false)

console.log(userOne);
console.log(userTwo);

