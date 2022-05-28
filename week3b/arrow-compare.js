console.log(plus_100(200));

const num_list = [
    3,
    4,
    5,
    6
  ];
  
console.log(num_list.map(num => num+100));

// Traditional Function
function plus_100(a){
    return a + 100;
}
  
  // Arrow Function Break Down
  
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
    return a + 100;
}
  
// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;
  
  // 3. Remove the argument parentheses
a => a + 100;
  