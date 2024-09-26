                                  // asyncfun
// function api(){
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         console.log("weather data");

//         resolve(200);
//       },2000);
//     });
// }
//     async function getweatherdata(){
//     await api(); //1st call
//     await api();
//     } 

     
     function getData(dataId){
                   return new Promise((resolve, reject) =>{
                            setTimeout(() =>{
                                console.log("data", dataId);
                                resolve("success");
                            }, 2000);
                             });
                 }
                 
 ///Async Await
 async function getAllData(){
    console.log("getting data1...");
 await getData(1);
 console.log("getting data2...");
await getData(2);

 console.log("getting data3...");
await getData(3);

console.log("getting data4...");
await getData(4);


}
 // console.log("one")
// console.log("two");

// const { reject } = require("async");

// function hello(){
//     // console.log("hello");
// }
// setTimeout(hello, 2000) //timeout kitne time baadd excute krana chahte h?
// //timeout :2s =2000milisecond

// setTimeout(() =>{
//     // console.log("hello");
// }, 4000);

// console.log("three")
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }
// function calculater(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculater(5,4,sum);

// const hello =() =>{
//     console.log("hello");
// }
// setTimeout(hello , 3000);

                                                 //promise 
//            function getData(dataId){
//            return new Promise((resolve, reject) =>{
//                     setTimeout(() =>{
//                         console.log("data", dataId);
//                         resolve("success");
//                     }, 2000);
//                      });
//             }
            
           
//            getData(1)
//            .then((res) =>{
//             return getData(2);
//            }).then(()=>{
//                 return getData(3);
//            }).then((res) =>{
// console.log("succussful");
//            })
        
        
 
         
                                                        //callback hall
/*
function getdata(dataId,getNextData){
    setTimeout(() =>{
    console.log("data", dataId);
    if(getNextData){
    getNextData();
    }
}, 2000);
}

getdata(1, () =>{
    console.log("getting data2 ....");
    getdata(2 ,() =>{
        console.log("getting data3 ....");
        getdata(3,() =>{
        console.log("getting data4 ....");
        });
    });
});


*/
 
     ////////////////// // promises////////////////////////
    //  const getpromise = () =>{
    // return new Promise((resolve, reject) =>{
    //         console.log("i am promises");
    //     //  resolve("Success");
    //       reject("some error");
    // });
    
    //  };
    //  let promise = getpromise();
    //  promise.then(()=>{
    //     console.log("promise fulfill");
    //  });
    //  promise.catch(() =>{
    //     console.log("rejected");
    //  })
  

//    function getData(dataId, getNextData){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success");

//             if(getNextData){
//             getNextData();
//             }
//         }, 5000);
        
//     });
// }


        //asyncFunction

        // function asyncfun(){
        //     return new Promise((resolve, reject) =>{
        //   setTimeout(()=>{
        //     console.log("data1");
        //     resolve("succuss");
        //   }, 4000);
        //     });
        // }  
       
        // function asyncfun2(){
        //     return new Promise((resolve, reject) =>{
        //   setTimeout(()=>{
        //     console.log("data2");
        //     resolve("succuss");
        //   }, 4000);
        //     });
        // }  
       

        // console.log("fatching data1...");
        //  asyncfun().then((res)=>{
        //     // console.log(res);

        //     console.log("fatching data2...");
        //     asyncfun2().then((res)=>{});
        //     // console.log(res);
        // });
    

      