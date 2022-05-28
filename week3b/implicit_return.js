var adder = function(num1, num2) {
    return num1 + num2
};

// is the same as:

var adderArrow = (num1, num2) => num1 + num2;

// invoke each function to see the result

console.log(adder(2, 2));
console.log(adderArrow(2,2));