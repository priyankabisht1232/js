//ES6 ke baad

class User{
    constructor(username, email, password){
        this.username = username;
        this.email= email;
        this.password= password
    }
    encryptPassword(){
        return `${this.password} abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }

}
const ankit = new User("ankit", "ankit@gmail.com", "1234")

console.log(ankit.encryptPassword());
console.log(ankit.changeUsername());