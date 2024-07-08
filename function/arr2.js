const marval_heros = ["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"];

// marval_heros.push(dc_heros)
// console.log(marval_heros);
// console.log(marval_heros[3][1]);

//  const all_heros = marval_heros.concat(dc_heros);
// console.log(all_heros);


// const all_new_heros =[...marval_heros, ...dc_heros]
// console.log(all_new_heros);
// const another_array =[1,2,3,4,[5,6,7],8,[9,4,[4,2]]];

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("priyanka"))

// console.log(Array.from("priyanka"))


//array mothods

//push():add to end

let number= [7,5,8,5,4,3,9];

// number.push(10);
 let deleted =number.pop();      //pop delete from end and return 

// console.log(number);
// console.log(deleted);

//tostring  =>convert array to string

let fooditems=["potato","apply","litchi", "tomato"];
// console.log(fooditems);
// console.log(fooditems.toString());

//concat

//create an array to store companies =>

    let companies=["bloomberg", "Microsoft", "uber","Google","IBM","Netfilx"]

    // companies.shift(companies[0]);

    companies.splice(2, 1, "ola");

    companies.push("Amazon");

    console.log(companies);