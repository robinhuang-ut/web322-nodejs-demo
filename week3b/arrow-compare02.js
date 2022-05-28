// Traditional Named Function
function fn_sum_100(x,y){
    return x + y + 100;
  };
console.log(fn_sum_100(1,2));


// Arrow Function
let arrow_sum_100 = (a, b) => a + b + 100;
console.log(arrow_sum_100(3,4));

console.log(typeof arrow_sum_100);
console.log(typeof arrow_sum_100());