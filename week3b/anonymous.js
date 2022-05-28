// Traditional Anonymous Function
let sum_add_100 = function (a, b){
    return a + b + 100;
};

console.log(sum_add_100(1,2));
  
  // Arrow Function
  (a, b) => a + b + 100;
  
  // Traditional Anonymous Function (no arguments)
  let x = 4;
  let y = 2;
  let sum_xy_100= function (){
    return x + y + 100;
  };

  console.log(sum_xy_100);
  console.log(sum_xy_100());
 
  // Arrow Function (no arguments)
  let m = 4;
  let n = 2;
  () => m + n + 100;

  
  