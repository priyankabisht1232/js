//for loops

for (let index = 0; index <= 10;index++) {
    const element = index;
    // console.log(element)
    
}

for(let i=1;i<=10;i++){
    console.log(`outer loop value : ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`innerloop value : ${j} and inner loop ${i} `);

        console.log(i + ' * ' +j +' = ' + i*j);
    }
}