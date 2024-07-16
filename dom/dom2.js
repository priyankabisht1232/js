// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let para =document.querySelector("p");
// console.log(para.getAttribute("class"));
// //class ka naam change ho jaye

// console.log(para.setAttribute("class", "newclass"));


// let div = document.querySelector("div");

// div.style.backgroundColor ="green";
// div.style.backgroundColor ="purple";
// // div.style.visibility ="hidden";

// div.innerText ="Hello!"

let newBtn = document.createElement("button");
newBtn.innerText ="click me!";
// console.dir(newBtn);

let div =document.querySelector("div");
// div.append(newBtn);    //adds at the end of node (inside)

// div.prepend(newBtn);     //adds at the start of node(inside)

// div.before(newBtn);    //adds before the node (outside)

// div.after(newBtn);  //adds after the node(outside)


let newHeading = document.createElement("h1");
newHeading.innerHTML ="<i>hi,I am new !</i>";            //new headingn add krna js se

document.querySelector("body").prepend(newHeading);

let para= document.querySelector("p");
para.remove();         //remove the node
// newHeading.remove();

// document.body
//   .appendChild(document.createElement("p"))
//   .appendChild(document.createElement("p"))
//   .appendChild(document.createElement("p"));

let child = document.createElement("p");
document.body.appendChild(child);

const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("mylist1").appendChild(node);