let x = 30, y = 0;

y = 1;

let z = x / y;

// console.log('z: ',z);

if(isFinite(z)){
  console.log("success! " + x + "/" + y + "=" + z);
}else{
  console.log(x + " is not divisible by " + y);
}