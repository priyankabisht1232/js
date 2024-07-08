// let arr =[1,2,3,4,78,67];

// for(let i=0;i<arr.length;i++){
//     const   number = arr[i]; 
//     console.log(number);
// }

            //foreach loop
// arr.forEach((value, i,a) =>{
//     console.log(value, i,a)
// })

 //forin loop
//  let obj={
//     a:1,
//     b:2,
//     c:3
//  }

//  for(const key in obj){
//     if(Object.hasOwnProperty.call(obj, key)){
//         const element = obj[key];
//         console.log(key, element)
//     }
//  }

    //forof loop

    // for(const iterator of arr){
    //     console.log(iterator);
    // }


    //map
    //Create a new array by performing some operatin on each array element.

    //ex  const a=[1,2,3]
    //a.map((value, index, array)=>{
        //})

    let arr=  [1,2,13,4,6,7,18];
    // let newArr =[];
    // for(let i=0;i<arr.length;i++){
    //     const element = arr[i];
    //     newArr.push(element**2);
    // }

    let newArr = arr.map((e,index, arr)=>{
        return e**2;
    })
    console.log(newArr)


    //filter

    const greaterThanSeven=(e)=>{
        if(e>7){
        return true
        }
    
            return false
    
    }
    console.log(arr.filter(greaterThanSeven))


    //reduce method => reduce an array to a single value
/*
    const n= [1,8,7,11];
    let sum = number.reduce(sum);
    */

    let arr2= [1,3,5,7,8]
    const red = (a,b)=>{
        return a+b
    }

    console.log(arr2.reduce(red))


