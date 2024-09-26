   // document.getElementById('healthy').onclick =function(){
    //     alert("own clicked");
    // }


    //false default hota h
     //type ,timestamp, defaultPrevented , 
     //target, toElement, soucrElement, currentTarget, 
     //clientX ,clientY, screenX, screenY,  
     //altkey, ctrkey, shiftkey, keyCode
    // document.getElementById('healthy').addEventListener('click', function(e){
    //     // alert("healthy");
    //     console.log(e);
    // },false)   

    //attachEvent()
    //jQuery -on
/*
document.getElementById('images').addEventListener('click' , function(e){
    console.log("click inside the ul");
},false)

document.getElementById('healthy').addEventListener('click' , function(e){
    console.log("healhty click  ul");
    e.stopPropagation()
},false)

document.getElementById('google').addEventListener('click' , function(e){
    console.log("google clicked");
    e.preventDefault();
    e.stopPropagation()
})

*/

/*
document.querySelector("#images").addEventListener('click', function(e){
//   console.log(e.target.parentNode);
console.log(e.target.tagName);
if(e.target.tagName ==='IMG'){
    console.log(e.target.id);
}

  
  let removeIt = e.target.parentNode
//   removeIt.remove();
//   removeIt.parentNode.removeChild(removeIt)
}, false)

*/
// let btn1= document.querySelector("#btn");

// btn1.addEventListener('click', (evt)=>{
//     // console.log(evt);
//     console.log("button was clicked -handler1");
// });

// btn1.addEventListener('click', (evt)=>{
//     // console.log(evt);
//     console.log("button was clicked -handler2");
// });

// btn1.addEventListener('click', (evt)=>{
//     // console.log(evt);
//     console.log("button was clicked -handler3");
// });

// btn1.addEventListener('click', (evt)=>{
//     // console.log(evt);
//     console.log("button was clicked -handler4");
// });


// btn1.onclick =(evt) =>{
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let div= document.querySelector("div")
// div.onmouseover = (evt) =>{
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("your are inside div");
// }

/////////////Questin 
//create a toggle button that change the screen to dark mode when clicked & light mode when clicked again

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";

modebtn.addEventListener("click", () =>{
    if(currentMode==="light"){
        currentMode= "dark";
    //  body.classList.add("dark"); 
        document.querySelector("body").style.backgroundColor ="black";
    } else{
        currentMode = "light";
        // body.classList.add("light");
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currentMode);
});
