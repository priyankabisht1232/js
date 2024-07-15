let form =document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    
const height=parseInt(document.querySelector("#height").value);
const weight=parseInt(document.querySelector("#weight").value);
const results=document.querySelector("#results");

if(height ===''|| height<0 || isNaN(height)){
    results.innerHTML =`Please give valid height ${height}`;
}else if (weight ===''|| weight<0 || isNaN(weight)){
    results.innerHTML =`Please give valid weight ${weight}`;
} else{
 const BMI=   (weight/((height*height)/10000)).toFixed(2);
 //show the result

 results.innerHTML=`<span>${BMI}</span>`;

 if(BMI< 18.6){
    results.innerHTML=`under weight ${BMI}`;
 }
 else if(BMI >18.6 && BMI<24.9){
    results.innerHTML=`Noraml Range ${BMI}`;
}
else{
    
        results.innerHTML=`Overweight ${BMI}`;
}    

}
});