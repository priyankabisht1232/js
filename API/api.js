const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// let promise =fetch(URL);
// console.log(promise);


// const getFact = async() =>{
//     console.log("getting data......");
//     let response = await fetch(URL);
//     console.log(response);

//     let data = await response.json();
//     // console.log(data[0].text);
//     factpara.innerText= data[2].text;
// };

function getFact(){
    fetch(URL).then((response) =>{
    return   response.json();
    })
    .then((data)=>{
        console.log(data);
        factpara.innerText= data[2].text;
    })
}

btn.addEventListener("click", getFact);


