/// stack memory(primitive)   heap memory(non primitive)

let myyoutubename  = "priyankabishtdotcom"

let anothername = "chaicodedotcom";

console.log(anothername);
console.log(myyoutubename);


//stack mai copy milti h


let Userone ={
    email: "user@goggle.com",
    upi:"user@ybl"

}

let UserTwo = Userone;
UserTwo.email = "hitesh@google.com"


console.log(Userone.email);
console.log(UserTwo.email);

//heap mai original chait h