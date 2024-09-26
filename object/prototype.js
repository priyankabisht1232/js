// let myName ="priyanka   "
// let mychannel ="chai   "
// console.log(myName.truelength);

let myHero =["thor", "spiderman"]

let heropower ={
    thor:"hammer",
    spiderman:"sling",

    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`);


    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}

heropower.hitesh();

//inheritance

const user={
    name:"code",
    email:"code@google.com"
}
const teacher ={
    makevideo:true
}
const techingSupport ={
    isAvailable:false
}

const TASupport ={
    makeAssignment:'js assingment',
    fylltime:true,
    __proto__: techingSupport
}

teacher.__proto__=user

//modern sytnax
Object.setPrototypeOf(techingSupport, teacher);

let anotherUsername ="JsCode      "
String .prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
}
anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()