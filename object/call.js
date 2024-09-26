 function setUsername(username){
    this.Username = username
    console.log("called");

}
    function crateUser(username, email, password){
        setUsername.call(this, username)
            
        this.email =email
        this.password= password
    }

const chai = new crateUser("cahi", "chai@fb.com", "123");
console.log(chai);