var outputMessage = function fun_name_1(message1, message2) {
    console.log(message1);
    console.log(message2);
  };
  
  // is the same as:
  
  var outputMessageArrow = (message1, message2) => {
    console.log(message1);
    console.log(message2);
  };
  
  // invoke each function to see the result
  
  outputMessage("Function", "Expression");
  outputMessageArrow("Arrow", "Function");