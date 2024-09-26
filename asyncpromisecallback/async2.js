// setTimeout(function(){
//     console.log("priynak");
// }, 5000);

const saypriyanka = function(){
    console.log("hello");
}
const changeText = function(){
    document.querySelector('h1').
    innerHTML ="best js series"
}

const changeme =setTimeout(changeText, 2000)

clearTimeout(changeme)

document.querySelector('#stop').addEventListener("click", function(){
    clearTimeout(changeme)
    console.log("stoped");
})