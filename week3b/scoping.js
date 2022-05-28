function local_scope(){
    var y = 1;
  }
console.log('y is '+y); // undefined because y is in the local scope of function x
var y=12;

var a = 1;
function global_scope() {
  console.log('a is '+a) // prints 1 because the "a" variable is global
}
global_scope()

function fun_var(){
    for (var i = 0;i < 5;i++) {
        // some code here
        }
    console.log('i is '+i); // this will return 5 since i is global and will not be undefined
}
fun_var()
// console.log('i is '+i); //will it compile?

// ES6 block scoped "let", 
// which works the same as "var" but has block scoping.
function fun_let(){
    for (let j = 0;j < 5;j++) {
        // some code here
        }
    console.log('j is '+j); //will it compile?
    // j=10;
}
fun_let()

