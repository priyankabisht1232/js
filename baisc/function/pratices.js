//write a JS fuction to print the hello world 


function printhello(){
    // console.log("kaise ho");
}

printhello();

//function that return the square of a  number

function squarenumber(num){
    return num**2;

}
// console.log(squarenumber(2));
// console.log(squarenumber(9));

//convert celsius to fahreheit

function converCtoF(cel){
    return (cel*9/5)+32;
}

// console.log(converCtoF(0));
// console.log(converCtoF(10));
// console.log(converCtoF(40));

//find the area of area of ractangle

function rectangle(a,b){
    return  `The area of the rectangle is ${a*b}`;
}
// console.log(rectangle(10,20));

//area and perimeter of a circle

function circlevalue(r){
    return `perameter : ${2*Math.PI*r}, Area : ${Math.PI*r*r}` ;
}

// console.log(circlevalue(10))
// console.log(circlevalue(5));

//reverse a Number

function reversenumber(num){
    var reverse =0;
    while(num !=0){
        reverse= reverse*10;
        reverse = reverse+num%10;
        num = Math.trunc(num/10);
    }
    return reverse;
}
// console.log(reversenumber(123));

function checkpalindrom(str){
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)!=str.charAt(str.length-i-1)){
        return false;
    }
}
return true;
}
// console.log(checkpalindrom("priyanaka"));
// console.log(checkpalindrom("madam"));

function simpleInt(p, rate, time){
    var  Si = p+rate*time*p;
    return Si;
}

// console.log(simpleInt(20000,5,3));

function genRandom(start, end){
    return Math.floor(Math.random()*end)+start;
}
// console.log(genRandom(1,10));

function factorial(num){
    if(num ==1){
        return 1;
    }
    if(num==0){
        return 0;
    }
    return num*factorial(num-1);
}

// console.log(factorial(4));

//count of a latter in a string

function letterCount(str, c){
    var count=0;
    str = str.toLowerCase();
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)==c){
            count++;
        }
    }
    return count;
}
// console.log(letterCount("My name is priyanka",'a'));


//prime or no

function primenumber(num,div =2){
    if(num <-2){
        return (num ==2) ?true:false
    }
    if(div*div>num){
        return true;
    }
    if(num %div ==0){
        return false;
    }
    return primenumber(num , div+1);
}
console.log(primenumber(27));

  


//Discount calculator

function  calDiscount(price , dis){
    return price -(price* dis/100);
}
let orignalprice =100;
let discount = 20;

let discountprice = calDiscount(orignalprice, discount);

console.log("orignal price: ", orignalprice, "discout is:", discount);