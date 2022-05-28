var outputMessage = function() {
    console.log("Hello Function Expression");
  };
  
  // is the same as:
  
  var outputMessageArrow = () => console.log("Hello Arrow Function");
  
  // invoke each function to see the result
  
  outputMessage();
  outputMessageArrow();