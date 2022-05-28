var outputMessage = function(message){
    console.log(message);
  };
  
  // is the same as:
  
  var outputMessageArrow = message => console.log(message);
  
  // invoke each function to see the result
  
  outputMessage("Function Expression");
  outputMessageArrow("Arrow Function");