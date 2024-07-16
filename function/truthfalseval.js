const userEmail = "priya@.aih"

if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}

// flasy value=> false , 0, -0, BigInt 0n, "" , null , undefined , NaN
//truly  value => "0", 'false', " ",[], {}empty object, function(){}

// if(userEmail.length ===0){
//     console.log("Array is empty");
// }

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    // console.log("object is empty");
}

// Terniary operator

// condition ?true :false

const iceTeaPrice =100
iceTeaPrice <=80?console.log("less than 80"): console.log("more than 80")