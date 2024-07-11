function myfunction(msg, n) {
  //parameter
  //     console.log("welcome to js");
  //     console.log("kaise ho");
  // }
  console.log(msg);
}

// myfunction("i love java", 100);  //argument
// myfunction();

//function ==>2 numbers, sum

function sum(x, y) {
  s = x + y;
  return s;
  // console.log(x+y);
}
// let val = sum(3,5);
// console.log(val);

//Arrow function
const arrowSum = (a, b) => {
  console.log(a + b);
};

const arrowMul = (a, b) => {
  // console.log(a*b);
  return a * b;
};

const printHello = () => {
  console.log("hello");
};

//create a function using the function keyword that takes a string as an argument & return the number of vowels
//in the string

function countvowels(str) {
  //"Apnacollege", count =0;
  let count = 0;
  for (let char of str) {
    console.log(char);

    if (
      char === "a" ||
      char === "e" ||
      char == "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}



//same question with arrowfunction

const vowelscount = (str)=>{
    let count = 0;
  for (let char of str) {
    console.log(char);

    if (
      char === "a" ||
      char === "e" ||
      char == "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
//   return count;
};


// forEach loop

// let arr = [1,2,3,4,5,6];
// arr.forEach(function printVal(val){   //val at each index
//     console.log(val);
// })

let arr =["priynaka", "delhi", "mumbai", "sonam"];
arr.forEach((val, idx, arr) =>{
    // console.log(val.toUpperCase(), idx, arr);
});

//for a given array of number print the square of each value using the forEAch loop
 
let num =[1,2,4,6];
num.forEach((num)=>{
    // console.log(num*num);   //num**2
})
               /////////////////map//////////////////////////////
 let array= [1,5,4,3,2,6,8,10,12,7];
// // let newarray= array.map((val)=>{
//   return val*2;
// });

// console.log(newarray);


           ///////////////////////// //filter///////////////////////////////////////
let newarray= array.filter((val)=>{
   return val % 2===0;
});
// console.log(newarray);



        //////////////////reduce method////////////////////////

        const arr1= [1,2,3,6,5];
      const output = arr1.reduce((prev, curr) =>{
        // return res +curr;
        return prev >curr? prev : curr;
       });

      //  console.log(output);



       //We are given array of marks of students . filter out of the marks of students that scored 90.

       let marks =[7,99, 89, 98,94,45,34,95];

       let studentmarks = marks.filter((value) =>{
        return value >90;
       });

       console.log(studentmarks);

       //take a number n as input from user .create array fo numbers from 1 to n. use the reduccce method to calculate
       //sum all numbers in the array. use the reduce method to calculate product fo all numbers in the array.


let n =prompt("enter a number :");

let ar=[];
for (let i=1;i<=n;i++){
    ar[i-1] =i;          

  }
  console.log(ar);

 let newaar= ar.reduce((prev, curr) =>{
  return prev +curr;
});
console.log( "sum =" ,newaar);

let fact= ar.reduce((prev, curr) =>{
  return prev *curr;
});
console.log("factorial = ", fact);
