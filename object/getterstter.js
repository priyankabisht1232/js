class user{
    constructor(email,password){
        this.email =email,
        this.password= password
    }
    get email(){
          return this._email.toUpperCase()
    }
    set email(value){
        return this._email=value
    }
    
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Aman`
    }
    set password(value){
        this._password = value
    }
}

const Aman = new user("Aman@gmail.com", "abc");

console.log(Aman.password);
console.log(Aman.email);
