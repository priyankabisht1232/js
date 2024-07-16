const myObject = {
    js :'javascript',
    cpp :'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for each

const coding =["Js","ruby", "java", "C++","python"];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding =[
    {
  languangeName:"javaScript",
  languangeFileName:"Js",

},

{
    languangeName:"java",
    languangeFileName:"Java",
  
  },

  {
    languangeName:"pythod",
    languangeFileName:"py",
  
  },

  {
    languangeName:"C++",
    languangeFileName:"cpp",
  
  }
]

// myCoding.forEach( (item) =>{
    
//     console.log(item.languangeFileName);
// })
const myNums =[1,2,3,4,5,6,8,9,11,23,45];

// const newNums =myNums.filter((num)=> {
   
//     return  num>4
// })

const  newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);


const mynumbs =[1,2,3,4,5,6,7,8,9,10];

//  const newnums =mynumbs.map((num) =>{return num+10});

const newnums = mynumbs
              .map((nums) => nums *10)
              .map((num)=>num +1)
              .filter((num)=>num>= 40)
               
//  console.log(newnums);

 //reduce 

 const arr=[1,2,3,4,5,5];
    //  const sum = arr.reduce(( prev,curr)=>{
    //      return prev +curr;

    //  })
             //  ya fir

            //  const mytotal =arr.reduce(function(acc,currval){
            //   console.log(`acc : ${acc} and currval: ${currval}`);
            //   return acc +currval
            //  }, 0)
    //  console.log(mytotal);

    const shoppingCart =[
      {
        itemName:"Js course",
        price : 2999
      },
      {
        itemName:"python course",
        price : 999
      },
      {
        itemName:" mobile  dev course",
        price : 5999
      },
      {
        itemName:"Data st course",
        price : 12999
      },

      {
        itemName:"c++ course",
        price : 1999
      },
    ]
    
    const total= shoppingCart.reduce((acc,item) => acc + item.price, 0)

    console.log(total);
    
    


     
     