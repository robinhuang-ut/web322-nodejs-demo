let x = "twenty";
x = 20;

let y = parseInt(x);

// console.log(y);

if(isNaN(y)){
    console.log("x cannot be converted to a number");
}else{
    console.log("success! the numeric value of x is: " + y);
}