// console.dir(document.head);

// console.log(document.body)

// console.dir(document.body.childNodes[1]); //

// let heading =document.getElementById("heading");//id selecter
// console.dir(heading);

let head = document.getElementsByClassName("heading");    //class selecter

// console.dir(head);

let parahs = document.getElementsByTagName("p");       //paragraph acess krne ka trika
// console.dir(parahs);

let element = document.querySelector("p");         //Id/ Class// p sb access kr skte h
// console.dir(element);

let first= document.querySelector (".heading");//("p");
// console.log(first);


//node child

// console.dir(document.body.firstChild);

// console.dir(document.body.lastChild);

// let div= document.querySelector("div");
// console.dir(div);

// let heading =document.querySelector("h1");
// // console.dir(heading);

let h2 = document.querySelector("h2");
console.log(h2.innerText);

// h2.innerText =h2.innerText +" from Apna college student";

let divs =document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    div.innerText =`new unique value ${idx}`;
    idx++;
    // console.log(div.innerText);
}
// div[0].innerText ="new unique value 1";
// div[1].innerText ="new unique value 2";
// div[2].innerText ="new unique value 3";
// console.log(div[0]);

